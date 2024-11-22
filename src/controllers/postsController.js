import { getAllPosts } from "../models/postModels.js";


export async function listarPosts(req, res) {//cria uma requisição /posts e seta um resposta a ela
    try{
        const posts = await getAllPosts();// executa a função que pega os posts e armazena as informações na variável posts
        res.status(200).json(posts);

    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar posts" })
    }
};