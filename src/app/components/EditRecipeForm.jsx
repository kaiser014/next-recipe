"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditRecipeForm(props){
    const {id, title, description} = props;
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            method: "PUT",
            headers:{
                "Content-type": "application/json",
            },
            body: JSON.stringify({ newTitle, newDescription }),
           });

           if(!res.ok){
            throw new Error("Failed to Update Topic");
           }
           router.push("/");
        } catch (error) {
            console.log(error);
        }
    }

  return (
        <>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input type="text" onChange={(e)=> setNewTitle(e.target.value)} value={newTitle} className="border border-slate-500 px-8 py-2"  placeholder="Recipes Title"/>
                    <input type="text" onChange={(e)=> setNewDescription(e.target.value)} value={newDescription} className="border border-slate-500 px-8 py-2" placeholder="Recipes Description"/>
                    <button type="submit" className="bg-green-600 text-white py-3 px-6 w-fit">Update Recipes</button>
                </form>
            </div>
        </>
  )
};