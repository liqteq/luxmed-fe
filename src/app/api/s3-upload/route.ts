import { NextRequest, NextResponse } from "next/server";
// import fs from 'fs'


export async function POST(request: Request, response: Response) {
    try {

        if(request.method !== 'POST'){
            throw Error("This method is not allowed")
        }
        const text = await request.text()
        // fs.writeFileSync('./example.json', text)
        return NextResponse.json({ message: "Hello Next" })

    } catch (error) {
        console.log("ERROR GET REQUEST s3-upload", error)
        return NextResponse.json({ status: 500, message: "Internal Server Error" })
    }
}