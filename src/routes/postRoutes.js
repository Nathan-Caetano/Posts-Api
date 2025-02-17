import express from "express";
import multer from "multer";
import { criarNovoPost, listarPosts, uploadImagem, atualizarNovoPost} from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    app.use(express.json());//converte texto para json

    app.get("/posts", listarPosts);// rota para listar todos os posts

    app.post("/posts", criarNovoPost)// rota que permite criar um novo post

    app.post("/upload", upload.single("imagem"), uploadImagem)

    app.put("/upload/:id", atualizarNovoPost)
}

export default routes;