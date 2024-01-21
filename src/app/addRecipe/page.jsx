"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddRecipe(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!title || !description){
            alert("Title & Description are required.");
            return;
        }
        try {
            const res = await fetch("http://localhost:3000/api/topics/", {
                method:"POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({title, description}),
            });
            if(res.ok){
                router.push('/');
            }
            else{
                throw new Error("Failed to create Topic");
            }
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input type="text" className="border border-slate-500 px-8 py-2" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Recipes Title"/>
                    <input type="text" className="border border-slate-500 px-8 py-2" onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Recipes Description"/>
                    <button type="submit" className="bg-green-600 text-white py-3 px-6 w-fit">Add Recipes</button>
                </form>
            </div>
        </>
    )
}