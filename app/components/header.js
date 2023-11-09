export const Header = () => {
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
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-jpc.appspot.com/o/imgs%2Fperfil.jpg?alt=media&token=b25e7583-137c-416f-8ceb-e590cf87ed7d"
                    alt="Profile picture"
                    className="rounded-full object-cover w-[243px] h-[243px]"
                />

                <button className="bg-red-400 rounded-sm py-2 px-6 text-white">
                    <a
                        href="https://firebasestorage.googleapis.com/v0/b/portfolio-jpc.appspot.com/o/pdfs%2Fcurriculo.pdf?alt=media&token=7902ec4f-e91a-4c19-8a77-5f89ea76efdf"
                        target="_blank"
                    >
                        Currículo
                    </a>
                </button>
            </div>
        </div>
    )
}
