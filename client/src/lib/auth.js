import jwt from "jsonwebtoken"
const SECRET = 'dbeccd6ede6aad3ce1617b03a36377dd8f2a6981' 
export const verifyAuth = async (token) => {
    try {
        const verifiedToken = jwt.verify(token,SECRET )
        return verifiedToken 
    } catch (error) {
       throw new Error('You are not authorized') 
    }
}