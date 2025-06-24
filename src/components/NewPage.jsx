import { useState } from "react";
import axios from "axios";

let LEGAL_DOC;
let fileName;

const apiKey = process.env.REACT_APP_API_KEY;

const NewPage = () => {
    const [messages, setMessages] = useState([
        {
            text: "Hello, I am NyayYukti! I'm here to help.",
            sender: 'bot',
        },
    ]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isConversationalMode, setIsConversationalMode] = useState(true);
    const [showDownloadButton, setShowDownloadButton] = useState(false);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSendMessage = async () => {
        if (userInput.trim() === '') return;

        const newMessages = [...messages, { text: userInput, sender: 'user' }];
        setMessages(newMessages);
        setUserInput('');
        setIsLoading(true);

        try {
            const response = await axios.post('https://api.openai.com/v1/chat/completions', {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are acting as an Indian chatbot named NyayYukti. Urge the user to explain their scenario briefly so that their legal problem can be classified. Ask follow-up questions to gather more context, but do not give legal advice. Finally and most significantly, instruct the user to click the button below for problem classification." },
                    ...newMessages.map(msg => ({
                        role: msg.sender === 'bot' ? 'assistant' : 'user',
                        content: msg.text,
                    })),
                ],
                max_tokens: 150,
            }, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
            });

            const botResponse = {
                text: response.data.choices[0].message.content.trim(),
                sender: 'bot',
            };
            setMessages((prevMessages) => [...prevMessages, botResponse]);
        } catch (error) {
            console.error("Error fetching response from GPT API:", error);
            const errorMessage = {
                text: "Sorry, I had trouble processing your request. Please try again.",
                sender: 'bot',
            };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDocumentClassification = async () => {
        setIsConversationalMode(false);
        try {
            // Collect all user messages
            const userMessages = messages.filter(msg => msg.sender === 'user').map(msg => msg.text).join("\n");
    
            // Make the API request to classify the document
            const response = await axios.post('http://127.0.0.1:5000/predict', {
                text: userMessages,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Update LEGAL_DOC value
            LEGAL_DOC = response.data.prediction
            if (LEGAL_DOC === "Contract Agreement") {
                fileName = "Contract_Agreement.docx";
            } else if (LEGAL_DOC === "Rent Agreement") {
                fileName = "Rent_Agreement.docx";
            } else if (LEGAL_DOC === "Memorandum of Understanding") {
                fileName = "Company_MoU.docx";
            } else if (LEGAL_DOC === "Partnership Deed") {
                fileName = "Partnership_Deed.docx";
            }
            console.log("Window Location:", window.location.href);
            // Handle the response
            const classificationResponse = {
                text: `Thank you for providing the details. Assessing the scenario, NyayYukti recommends... ${response.data.prediction}`,
                sender: 'bot',
            };
            setMessages((prevMessages) => [...prevMessages, classificationResponse]);
            setShowDownloadButton(true);
        } catch (error) {
            console.error("Error fetching document classification:", error);
            const errorMessage = {
                text: "Sorry, there was an issue processing your request. Please try again later.",
                sender: 'bot',
            };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        }
    };

    return (
        <div className="chatbot-container bg-gray-100 rounded-lg shadow-md p-4 max-w-2xl mx-auto mt-15 mb-48">
            {/* Chat Window */}
            <div className="chat-window overflow-y-auto h-100 p-4 bg-white rounded-lg shadow-inner">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex items-start mb-4 ${message.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
                    >
                        {message.sender === 'bot' && (
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-2">
                                🤖
                            </div>
                        )}
                        <div
                            className={`p-2 rounded-lg break-words whitespace-normal ${message.sender === 'bot'
                                ? 'bg-blue-200 text-black'
                                : 'bg-green-200 text-black'
                                }`}
                        >
                            {message.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Box */}
            <div className="flex mt-4">
                <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSendMessage();
                    }}
                    placeholder="Type a message..."
                    className="flex-1 p-2 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    disabled={!isConversationalMode}
                />
                <button
                    onClick={handleSendMessage}
                    disabled={isLoading || !isConversationalMode}
                    className={`ml-2 px-4 py-2 rounded-lg transition ${isLoading || !isConversationalMode ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-black hover:bg-blue-600'}`}
                >
                    {isLoading ? 'Thinking...' : 'Send'}
                </button>
            </div>

            {/* End Conversational Mode Button */}
            {messages.filter(msg => msg.sender === 'user').length >= 2 && isConversationalMode && (
                <div className="flex mt-4">
                    <button
                        onClick={handleDocumentClassification}
                        className="ml-2 px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        Get Legal Doc
                    </button>
                </div>
            )}

            {/* Download Button */}
            {showDownloadButton && (
                <div className="flex mt-4">
                    <a
                        href={`${process.env.PUBLIC_URL}/${fileName}`}
                        download={fileName}
                        className="ml-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Download Legal Document
                    </a>
                </div>
            )}
        </div>
    );
};

export default NewPage;
