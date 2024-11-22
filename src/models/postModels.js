import conectarAoBanco from "../config/dbconfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO) // executa a função que conecta com o db, e armazena as informações dessa conexão numa variável

export async function getAllPosts() { // função para pegar todos os posts do db 
    try{
        const db = conexao.db("instabytes");// conecta com o banco de dados instabytes dentro do mongoDB
        const colecao = db.collection("posts");// acessa a coleção posts dentro do db

        return colecao.find().toArray();
    } catch (error) {
        console.error("Erro ao buscar posts", error);// se ele não conseguir acessar o dara base ou os posts da erro
        throw new Error("Erro ao buscar posts");
    }
};