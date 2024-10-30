import Section from "./Section"
import { collabContent, } from "../constants";
import { check } from "../assets";
import law from "../assets/law.png";
import { LeftCurve, RightCurve } from "./design/Collaboration";
const Documents = () => {
    return (
        <Section crosses id="documents">
            <div className="container lg:flex">
                <div className="max-w-[50rem]">
                    <h2 className="h3 mb-4 md:mb-8">
                        Diverse Document Offerings
                    </h2>
                    <ul className="max-w-[35rem] mb-10 md:mb-14">
                        {collabContent.map((item) => (
                            <li className="mb-3 py-3" key={item.id}>
                                <div className="flex items-center">
                                    <img src={check} width={24} height={24} alt="check" />
                                    <h6 className="body-2 ml-5">{item.title}</h6>
                                </div>
                                {item.text && (
                                    <p className="body-2 mt-3 text-n-4">{item.text}</p>
                                )}
                            </li>
                        ))}
                    </ul>

                </div>
                <div className="lg:ml-auto xl:w-[38rem] mt-4">

                    <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
                        <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                            <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                                <img
                                    src={law}
                                    width={550}
                                    height={550}
                                    alt="law"
                                />
                            </div>

                        </div>
                        <LeftCurve />
                        <RightCurve />
                    </div>

                </div>
            </div>
        </Section >
    )
}

export default Documents