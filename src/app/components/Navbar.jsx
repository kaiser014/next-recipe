import Link from "next/link";

export default function Navbar(){
return(
    <nav className="flex justify-between items-center bg-slate-700 py-3 px-5 rounded-md">
        <Link className="text-white text-xl font-bold" href={"/"}>Logo</Link>
        <Link className="bg-white rounded-md text-slate-900 p-2 px-4" href={"/addRecipe"}>Add Recipe</Link>
    </nav>
);
}