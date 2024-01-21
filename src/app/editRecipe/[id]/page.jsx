"use client";

import EditRecipeForm from "@/app/components/EditRecipeForm";


const getTopicById = async(id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache: "no-store",
        })
        if(!res.ok){
            throw new Error("Failed to fetch Topic");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
}
export default async function EditRecipe({params}){
    const {id} = params;
    const {topic} = await getTopicById(id);
    const {title, description} = topic;
    // console.log("here id", id);
    return(
        <>
            <EditRecipeForm id={id} title={title} description={description}/>
        </>
    );
}