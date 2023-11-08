import { Icon } from "./icons"

export const Footer = () => {
    // const icons = ["/linkedin.svg", "/github.svg", "/instagram.svg"]
    const icons = [
        { link: "https://www.linkedin.com/in/jpc-dev/", path: "/linkedin.svg" },
        { link: "https://github.com/jpc963", path: "/github.svg" },
        { link: "https://www.instagram.com/inoshyyy/", path: "/instagram.svg" },
    ]

    return (
        <div className="flex items-center justify-center h-28 lg:h-40 gap-8 border-t">
            {icons.map((icon) => (
                <a
                    href={icon.link}
                    target="_blank"
                >
                    <Icon path={icon.path} />
                </a>
            ))}
        </div>
    )
}
