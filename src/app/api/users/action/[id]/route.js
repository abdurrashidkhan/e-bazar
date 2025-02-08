import connectMongodb from "@/lib/mongodb";
import users from "@/models/usersSchema";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const { id } = params
  await connectMongodb();
  const user = await users.deleteOne({ _id: id }).exec();
  return NextResponse.json({status:true,message:'user deleted'});
}