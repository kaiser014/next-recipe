import connectMongoDB from "@/lib/db";
import Recipe from "@/models/recipe";
// import Topic from "@/models/recipe";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    const {newTitle: title, newInstruction: instruction, newIngredients: ingredients} = await request.json();
    await connectMongoDB();
    await Recipe.findByIdAndUpdate(id, {title, instruction, ingredients});
    return NextResponse.json({message: "Updated Your Recipe"}, {status: 200});

}

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB();
    const recipe = await Recipe.findOne({_id: id});
    return NextResponse.json({recipe}, {status: 200})
}