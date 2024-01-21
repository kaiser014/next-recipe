import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from 'react-icons/hi';



const getRecipes = async() => {
    try {
        const res = await fetch('http://localhost:3000/api/topics',{
            cache: "no-store",
        });
        if(!res.ok){
            throw new Error("Failed to fetch Topics")
        }
        return res.json();
    } catch (error) {
        console.log("Error loading topics: ", error);
    }
}

export default async function RecipeList(){
    const {topics} = await getRecipes();
    return(
        <>
        {
            topics.map((t) => (
            <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <div>
                    <h2 className="font-bold text-2xl">{t.title}</h2>
                    <div>
                        <p>{t.description}</p>
                    </div>
                </div>

                <div className="flex gap-2">
                  <RemoveBtn id={t._id} />
                  <Link href={`editRecipe/${t._id}`}>
                    <HiPencilAlt size={24} />
                  </Link>
                </div>
            </div>
            ))}
        </>
    );
}