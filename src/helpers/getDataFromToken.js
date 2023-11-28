import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
export const GetDataFromToken = (request) => {
    try {
        const token = request.cookies.get("token")?.value || '';
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        const {id,userRole}=decodedToken
        return {id,userRole};
    } catch (error) {
        throw new Error(error.message);
    }

}