import { ItemRecentes } from "./item-recentes"

export const Recentes = () => {
    const projetos = [
        {
            link: "https://github.com/jpc963/expo-social-app",
            titulo: "Making a design system from scratch",
            data: "19/02/2020",
            tecs: "Django - React",
            descricao:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat nostrud amet.",
        },
        {
            link: "https://github.com/jpc963/expo-social-app",
            titulo: "Social App",
            data: "25/08/2023",
            tecs: "React Native - Node.js - ExpoGO",
            descricao:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit off.",
        },
    ]
    return (
        <div className="bg-slate-100 w-full p-6">
            <div className="md:mx-36 space-y-6">
                <div className="w-full flex justify-between items-center">
                    <h2 className="text-slate-800 text-lg">
                        Projetos recentes
                    </h2>

                    <a
                        href="https://github.com/jpc963?tab=repositories"
                        target="_blank"
                        className="text-cyan-500 text-base"
                    >
                        Ver todos
                    </a>
                </div>

                <div className="grid lg:grid-cols-2 space-y-4 lg:space-y-0 lg:space-x-4">
                    {projetos &&
                        projetos.map((projeto, index) => (
                            <ItemRecentes
                                key={index}
                                {...projeto}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}
