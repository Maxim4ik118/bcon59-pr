import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const instance = axios.create({ baseURL: BASE_URL });

 // ф-ція сервіс
export const requestPosts = async () => {
    const { data } = await instance.get(`/posts`); 
//   throw new Error("Ми сьогодні не працюємо");
    return data;
}