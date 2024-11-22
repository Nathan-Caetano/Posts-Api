import express, { json } from "express";
import routes from "./src/routes/postRoutes.js";


const app = express();//chama a função express para iniciar o servidor
routes(app)

app.listen(3000, () => {//inicia o servidor na porta 3000, e avisa que o servidor esta escutando
    console.log("Servidor escutando. . .");
});