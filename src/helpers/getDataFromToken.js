import jwt from "jsonwebtoken";

export const getDataFromToken = async (request) => {
    try {
        const token = await request.cookies.get("token");
        console.log(token,"getData")

        if (!token) {
            throw new Error("No token found");
           
        }

        const decodedToken =  jwt.verify(token.value, process.env.TOKEN_SECRET);

        if (!decodedToken || !decodedToken.id) {
            throw new Error("Invalid or missing data in the token");
        }
        console.log(decodedToken.id)
        return decodedToken.id;
    } catch (error) {
        console.error("Error in getDataFromToken:", error);
        return null;
    }
};
