export default function EditRecipe(){
    return(
        <>
            <div>
                <form className="flex flex-col gap-3">
                    <input type="text" className="border border-slate-500 px-8 py-2" placeholder="Recipes Title"/>
                    <input type="text" className="border border-slate-500 px-8 py-2" placeholder="Recipes Description"/>
                    <button className="bg-green-600 text-white py-3 px-6 w-fit">Add Recipes</button>
                </form>
            </div>
        </>
    );
}