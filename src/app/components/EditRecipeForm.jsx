"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import IngredientsData from "../../../ingredients.json";

export default function EditRecipeForm(props){
    const {id, title, instruction, ingredients} = props;
    const [newTitle, setNewTitle] = useState(title);
    const [newInstruction, setNewInstruction] = useState(instruction);
    const [newIngredients, setNewIngredients] = useState(ingredients);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           const res = await fetch(`http://localhost:3000/api/recipes/${id}`, {
            method: "PUT",
            headers:{
                "Content-type": "application/json",
            },
            body: JSON.stringify({ newTitle, newInstruction, newIngredients}),
           });

           if(!res.ok){
            throw new Error("Failed to Update Recipe");
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
                    <input type="text" onChange={(e)=> setNewTitle(e.target.value)} value={newTitle} className="border border-slate-300 rounded-md px-8 py-3"  placeholder="Recipes Title"/>
                    <select id="ingredients" value={newIngredients} onChange={(e)=> setNewIngredients(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40">
                        <option>Select Ingredients</option>
                        {
                            IngredientsData.map((data) => (
                                <option key={data.id} value={data.label}>{data.label}</option>
                            ))
                        }
                    </select>
                    <textarea type="text" onChange={(e)=> setNewInstruction(e.target.value)} value={newInstruction} className="border border-slate-300 rounded-md px-8 py-3" placeholder="Recipes Description"></textarea>
                    <button type="submit" className="bg-blue-600 rounded-md text-white py-3 px-6 w-fit">Update Recipes</button>
                </form>
            </div>
        </>
  )
};