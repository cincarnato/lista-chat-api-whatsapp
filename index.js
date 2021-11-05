//Inicializa variables de entorno por archivo .env
const dotenv = require('dotenv')
dotenv.config()

//Importamos nuestra funcion post
const postChatApi = require('./post-chat-api')


//Lista
const fs = require('fs')
const parse = require('csv-parser')

//MENSAJE A ENVIAR => Modificar a gusto
const BODY = "Hola Querido 3"

async function procesarLista() {



    const CSV_PATH = './lista.csv'
    const fileReadStream = fs.createReadStream(CSV_PATH)
    const parser = parse({separator: ";"})
    let readable = fileReadStream.pipe(parser)

    for await (const fila of readable) {
        console.log("Procesando request Numero", fila.numero)
        let resultado = await postChatApi(fila.numero, BODY)
        console.log("Resultado", fila.numero, resultado.data)
    }

}

procesarLista().then(()=> process.exit())
