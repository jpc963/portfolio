import { storage } from "@/firebaseConfig"
import { getDownloadURL, ref } from "firebase/storage"

export const getCurriculo = async () => {
    try {
        const url = await getDownloadURL(ref(storage, `pdfs/curriculo.pdf`))

        return url
    } catch (error) {
        console.log("[GET_CURRICULO]", error)
        return { url: "" }
    }
}
