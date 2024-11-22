import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    app.use(express.json());//converte texto para json

    app.get("/posts", listarPosts);
}

export default routes;