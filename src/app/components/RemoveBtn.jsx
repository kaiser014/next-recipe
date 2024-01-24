"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn(props){
    const {id} = props;
    const router = useRouter();

    const removeRecipe = async() => {
        const confirmed = confirm('Are you Sure?');
        if(confirmed){
            const res = await fetch(`http://localhost:3000/api/recipes?id=${id}`, {
                method: "DELETE",
            });
            
            if(res.ok){
                router.refresh();
            }
        }
    }   
    return(
    <>
        <button onClick={removeRecipe} className="text-red-400">
            <HiOutlineTrash size={24}/>
        </button>
    </>
    );
}