"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import IngredientsData from "../../../ingredients.json";

export default function AddRecipe(){
    const [title, setTitle] = useState("");
    const [instruction, setInstruction] = useState("");
    const [selectIngredients, setSelectIngredients] = useState("");
    // console.log(selectIngredients);
    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!title || !instruction || !selectIngredients){
            alert("Title, Description & Ingrediants are required.");
            return;
        }
        try {
            const res = await fetch("http://localhost:3000/api/recipes/", {
                method:"POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({title, instruction, selectIngredients}),
            });
            if(res.ok){
                router.push('/');
            }
            else{
                throw new Error("Failed to create Recipes");
            }
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input type="text" className="border border-slate-300 rounded-md px-8 py-3" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Recipes Title"/>
                    <select id="ingredients" value={selectIngredients} onChange={(e)=> setSelectIngredients(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40">
                        <option>Select Ingredients</option>
                        {
                            IngredientsData.map((data) => (
                                <option key={data.id} value={data.label}>{data.label}</option>
                            ))
                        }
                    </select>
                    <textarea type="text" className="border border-slate-300 rounded-md px-8 py-3" onChange={(e) => setInstruction(e.target.value)} value={instruction} placeholder="Recipes Instruction"></textarea>
                    <button type="submit" className="bg-green-600 text-white rounded-md py-3 px-6 w-fit">Add Recipes</button>
                </form>
            </div>
        </>
    )
}