import fs from "fs"
import { getAllPosts, criarPost, atualizarPost } from "../models/postModels.js";


export async function listarPosts(req, res) {//cria uma requisição /posts e seta um resposta a ela
    try{
        const posts = await getAllPosts();// executa a função que pega os posts e armazena as informações na variável posts
        res.status(200).json(posts);

    } catch (error) {
        res.status(500).json({ "Erro" : "Erro ao buscar posts" });
    }
};

export async function criarNovoPost(req, res) {// função para criar novo post
    const novoPost = req.body;// pega o conteudo da requisição
    try{
        const postCriado = await criarPost(novoPost);// cria um post com base na variável novo post

        res.status(200).json(postCriado);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ "Erro" : "Erro ao criar novo post"})
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {// define como a informação deve ser salva no db
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(200).json(postCriado);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}

export async function atualizarNovoPost(req, res) {
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`

    const post = {
        imgUrl: urlImagem,
        descricao: req.body.descricao,
        alt: req.body.alt
    }

    try{
        const posrCriado = await atualizarPost(id,post);
        res.status(200).json(posrCriado);
    } catch (erro) {
        console.error(erro.message)
        res.status(500).json({"Erro": "Falha na requisição"})
    }
}