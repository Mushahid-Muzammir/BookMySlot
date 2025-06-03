import api from "./api";

export const login = async (email : string, password : string) => {
    const res = await api.post("/auth/login", {email, password});
    return res.data.token;
}

export const register = async( name : string, email : string, password : string) => {
    const res = await api.post("/auth/register", { name, email, password});
    console.log("Results", res.data);
    return res.data.token;
}