"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import { getImage } from "@/actions/get-image"
import { getCurriculo } from "@/actions/get-curriculo"

export const Header = () => {
    const [image, setImage] = useState("")

    useEffect(() => {
        async function getImageFromFirebase() {
            const url = await getImage("perfil.jpg")

            console.log(url)
            setImage(url)
        }

        getImageFromFirebase()
    }, [])

    const downloadCurriculo = () => {
        getCurriculo()
            .then((url) => {
                window.open(url, "_blank")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="flex flex-col lg:flex-row items-center m-8 gap-6 md:mx-36 h-auto lg:h-[700px]">
            <div className="flex flex-col md:flex-1 items-center justify-center space-y-6 text-center">
                <h1 className="text-slate-800 font-bold text-2xl md:text-3xl lg:text-5xl">
                    Olá, eu sou o João Pedro,{" "}
                    <span className="text-3xl md:text-4xl lg:text-6xl">
                        Desenvolvedor Full Stack
                    </span>
                </h1>

                <p className="text-slate-800 text-base md:text-lg lg:text-xl font-normal">
                    Tenho experiência com Python, Django, React e JavaScript.
                    Trabalho no desenvolvimento de sites, APIs e aplicativos,
                    desde a concepção até a entrega final. Busco sempre aprender
                    novas formas de aperfeiçoar minhas habilidades e,
                    atualmente, estou expandindo meu conhecimento em Node.js e
                    React Native.
                </p>
            </div>

            <div className="md:flex-1 flex flex-col gap-6 items-center justify-center order-first lg:order-none">
                <img
                    src={image}
                    alt="Profile picture"
                    className="rounded-full object-cover w-[243px] h-[243px]"
                />

                <button
                    className="bg-red-400 rounded-sm py-2 px-6 text-white"
                    onClick={() => downloadCurriculo()}
                >
                    Currículo
                </button>
            </div>
        </div>
    )
}
