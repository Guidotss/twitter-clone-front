import { NextRequest, NextResponse } from "next/server";


export const middleware = (req: NextRequest) => {
    if(req.nextUrl.pathname == "/") { 
        const token = req.cookies.get("token");
        console.log(token); 
       if(!token) {
        NextResponse.redirect(new URL("/auth", req.nextUrl).href); 
       }
    }
    return NextResponse.next(); 
}