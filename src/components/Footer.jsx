import Section from "./section"

const Footer = () => {
    return (
        <Section crosses className="!px-0 !py-10">
            <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <p className="caption text-n-4 lg:block">
                    © {new Date().getFullYear()}.Made with love by YDY
                </p>
            </div>
        </Section>
    )
}

export default Footer
