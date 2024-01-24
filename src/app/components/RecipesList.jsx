import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from 'react-icons/hi';



const getRecipes = async() => {
    try {
        const res = await fetch('http://localhost:3000/api/recipes',{
            cache: "no-store",
        });
        if(!res.ok){
            throw new Error("Failed to fetch Recipes")
        }
        return res.json();
    } catch (error) {
        console.log("Error loading Recipes: ", error);
    }
}

export default async function RecipeList(){
    const {recipes} = await getRecipes();
    return(
        <>
        {
            recipes.map((r) => (
            <div className="p-4 border border-slate-300 shadow-md rounded-md my-3 flex justify-between gap-5 items-start">
                <div>
                    <h2 className="font-bold text-blue-600 text-2xl">{r.title}</h2>
                    <div>
                        <p><span className="text-slate-600 font-bold">Ingredient</span> - {r.ingredients}</p>
                        <p><span className="text-slate-600 font-bold">Instruction</span> - {r.instruction}</p>
                    </div>
                </div>

                <div className="flex gap-2">
                  <RemoveBtn id={r._id} />
                  <Link href={`editRecipe/${r._id}`}>
                    <HiPencilAlt size={24} />
                  </Link>
                </div>
            </div>
            ))}
        </>
    );
}