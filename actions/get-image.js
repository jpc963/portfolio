import { storage } from "@/firebaseConfig"
import { getDownloadURL, ref } from "firebase/storage"

export const getImage = async (name) => {
    try {
        const url = await getDownloadURL(ref(storage, `imgs/${name}`))

        return url
    } catch (error) {
        console.log("[GET_IMAGE]", error)
        return { url: "" }
    }
}
