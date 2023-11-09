import { ItemRecentes } from "./item-recentes"

export const Recentes = () => {
    const projetos = [
        {
            link: "https://github.com/jpc963/expo-social-app",
            titulo: "Ifood Stats",
            data: "10/2023",
            tecs: "React Native - Node.js - Firebase",
            descricao:
                "Aplicativo para controlar os receitas/gastos feitos por entregadores do Ifood - Em desenvolvimento",
        },
        {
            link: "https://github.com/jpc963/expo-social-app",
            titulo: "Social App",
            data: "09/2023",
            tecs: "React Native - Node.js - ExpoGO",
            descricao: "Aplicativo teste de rede social - Concluído",
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
                    {projetos.map((projeto) => (
                        <ItemRecentes {...projeto} />
                    ))}
                </div>
            </div>
        </div>
    )
}
