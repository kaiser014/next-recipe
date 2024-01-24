import connectMongoDB from "@/lib/db";
import Recipe from "@/models/recipe";
// import Topic from "@/models/recipe";
import { NextResponse } from "next/server";

export async function POST(request){
    const {title, instruction, ingredients} = await request.json();
    await connectMongoDB();
    await Recipe.create({title, instruction, ingredients});
    return NextResponse.json({message: "Recipe Successfully Created"}, {status: 201});
}

export async function GET(){
    await connectMongoDB();
    const recipes = await Recipe.find();
    return NextResponse.json({recipes})
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Recipe.findByIdAndDelete(id);
    return NextResponse.json({message: "Deleted Your Recipe"}, {status: 200});
}