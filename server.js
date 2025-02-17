import express, { json } from "express";
import conectarAoBanco from "./src/config/dbConfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)


const app = express();//chama a função express para iniciar o servidor
app.use(express.json());//converte texto para json

app.listen(3000, () => {//inicia o servidor na porta 3000, e avisa que o servidor esta escutando
    console.log("Servidor escutando. . .");
});

async function getAllPosts() {
    // const db = conexao.db("instabytes")
    // const colecao = db.collection("posts")
    
    try{
        const db = conexao.db("instabytes");
        const colecao = db.collection("posts");

        return colecao.find().toArray();
    } catch (error) {
        console.error("Erro ao buscar posts", error);
        throw new Error("Erro ao buscar posts");
    }
};

app.get("/posts", async (req, res) => {//cria uma requisição /posts e seta um resposta a ela
    try{
        const posts = await getAllPosts();
        res.status(200).json(posts);

    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar posts" })
    }
});

// function buscar_post(id) {
//     return posts.findIndex((posts) => {// acessa o index de posts
//         return posts.id === Number(id);// procura na lista um objeto pelo id
//     });
// };

// app.get("/posts/:id", (req, res) => {
//     const index = buscar_post(req.params.id); // executa a função de buscar_posts passando o parametro id do request como parametro para a função

//     if (index === -1){// se o post não for encontrado da erro
//         res.status(404).json({ erro: "Post não encontrado"})
//     };

//     res.status(200).json(posts[index]);// retorna o post cosrespondente
// });

// app.get("/search", (req, res) => {
//     const { query } = req.query;

//     if (!query) {
//         return res.status(400).json({ mensagem: "Query é obrigatório" });
//     }

//     const resultado = posts.filter(post => 
//         post.descricao.toLowerCase().includes(query.toLowerCase())
//     );

//     if (resultado.length === 0) {
//         return res.status(404).json({ mensagem: "Nenhum post encontrado" });
//     }

//     res.status(200).json(resultado);
// });