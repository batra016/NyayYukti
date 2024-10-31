import Heading from "./Heading"
import Section from "./Section"
import { check } from "../assets";
import card1 from "../assets/services/card1.png"
import card2 from "../assets/services/card2.png"
import { brainwaveServices } from "../constants";
import Generating from "./Generating";
import card3 from "../assets/services/card3.png"
import {
    PhotoChatMessage,
    Gradient,
    VideoChatMessage,
} from "./design/Services";
const Services = () => {
    return (
        <Section crosses id="how-to-use">
            <div className="container">
                <Heading title="Navigating Your Legal Document Journey" text="Your Guide to Seamless Document Creation" />
                <div className="relative">
                    <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                            <img
                                className="w-full h-full object-cover md:object-right opacity-5 md:opacity-100"
                                width={800}
                                alt="Smartest AI"
                                height={730}
                                src={card1}
                            />
                        </div>
                        <div className="relative z-1 max-w-[17rem] ml-auto">
                            <h4 className="h4 mb-4">Smartest AI</h4>
                            <p className="body-2 mb-[3rem] text-n-3">
                                Start by selecting from four essential document types to kickstart your legal journey!
                            </p>
                            <ul className="body-2">
                                {brainwaveServices.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start py-4 border-t border-n-6"
                                    >
                                        <img width={24} height={24} src={check} />
                                        <p className="ml-4">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
                    </div>
                    <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                        <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0">
                                <img
                                    src={card2}
                                    className="h-full w-full object-cover opacity-80"
                                    width={630}
                                    height={750}
                                    alt="card2"
                                />
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                                <h4 className="h4 mb-4">Define Your Requirements</h4>
                                <p className="body-2 mb-[3rem] text-n-3">
                                    Provide specific details to tailor the document precisely to your needs. Try it now!
                                </p>
                            </div>
                            <PhotoChatMessage />
                        </div>
                        <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                            <div className="py-12 px-4 xl:px-8">
                                <h4 className="h4 mb-4">Document Ready for Download</h4>
                                <p className="body-2 mb-[2rem] text-n-3">
                                    Your legal document has been successfully generated and is now available for download as a Word file.
                                </p>
                            </div>
                            <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                                <img
                                    src={card3}
                                    className="object-cover opacity-0 relative left-48 md:opacity-60 "
                                    width={450}
                                    height={200}
                                    alt="card3"
                                />
                                <VideoChatMessage />
                            </div>
                        </div>
                    </div>
                    <Gradient />
                </div>
            </div>
        </Section >
    )
}

export default Services
