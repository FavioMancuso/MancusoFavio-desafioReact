import { addDoc , collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { data } from "../components/data";

const algoritmoGuardarDataProgramatica = () => {
    const response = data

    response.forEach(data => {
        const docRef = addDoc(collection(db,'products'),{
            name: data.name,
            description: data.description,
            img: data.img,
            stock: data.stock,
            precio: data.precio,
            category: data.category
        })
        console.log('Document with ID', docRef.id)
    })
}

export default algoritmoGuardarDataProgramatica