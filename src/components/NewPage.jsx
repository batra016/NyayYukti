import { useState } from "react";

const NewPage = () => {
    const [messages, setMessages] = useState([
        {
            text: "Hello! I'm here to help. How can I assist you today?",
            sender: 'bot',
        },
    ]);
    const [userInput, setUserInput] = useState('');

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSendMessage = () => {
        if (userInput.trim() === '') return;

        const newMessages = [...messages, { text: userInput, sender: 'user' }];
        setMessages(newMessages);
        setUserInput('');

        setTimeout(() => {
            const botResponse = {
                text: `Thanks for asking! I'm still learning, but I hear you say: "${userInput}"`,
                sender: 'bot',
            };
            setMessages((prevMessages) => [...prevMessages, botResponse]);
        }, 1000);
    };

    return (
        <div className="chatbot-container bg-gray-100 rounded-lg shadow-md p-4 max-w-2xl mx-auto mt-15 mb-48">
            {/* Chat Window */}
            <div className="chat-window overflow-y-auto h-100 p-4 bg-white rounded-lg shadow-inner">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex items-start mb-4 ${message.sender === 'bot' ? 'justify-start' : 'justify-end'
                            }`}
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
                />
                <button
                    onClick={handleSendMessage}
                    className="ml-2 px-4 py-2 bg-blue-500 text-black rounded-lg hover:bg-blue-600 transition"
                >
                    Send
                </button>
            </div>
            <br>
            </br>
            <br></br>
        </div>

    );
}

export default NewPage
