import { Inter } from "next/font/google"
import "./globals.css"
import { ToastProvider } from "@/providers/toast-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Portfólio JP",
    description: "Portfólio de João Pedro",
}

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <body className={inter.className}>
                <ToastProvider />
                {children}
            </body>
        </html>
    )
}
