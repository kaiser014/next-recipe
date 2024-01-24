"use client";

import EditRecipeForm from "@/app/components/EditRecipeForm";


const getTopicById = async(id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/recipes/${id}`, {
            cache: "no-store",
        })
        if(!res.ok){
            throw new Error("Failed to fetch Recipe");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
}
export default async function EditRecipe({params}){
    const {id} = params;
    const {recipe} = await getTopicById(id);
    const {title, instruction, ingredients} = recipe;
    // console.log("here id", id);
    return(
        <>
            <EditRecipeForm id={id} title={title} instruction={instruction} ingredients={ingredients}/>
        </>
    );
}