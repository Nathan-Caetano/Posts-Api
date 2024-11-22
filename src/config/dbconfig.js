import { MongoClient } from "mongodb";

export default async function conectarAoBanco(stringConexao) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConexao);
        console.log("Conectando ao cluster ao banco de dados. . .");
        await mongoClient.connect();
        console.log("Conectado ao MongoDB Atlas com sucesso!");

        return mongoClient;
    } catch (erro) {
        console.log("Falha na conexão com o banco!", erro);
        process.exit(1);
    }
}