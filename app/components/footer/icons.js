import Image from "next/image"

export const Icon = ({ path }) => {
    return (
        <Image
            height={32}
            width={32}
            alt="icon"
            src={path}
        />
    )
}
