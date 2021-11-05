const axios = require('axios')

function postChatApi(phone, body) {

    return new Promise(async (resolve, reject) => {

        try{
            const URL = process.env.URL_CHAT_API

            if(!URL){
                return reject(new Error("URL NO DEFINIDA. VER VARIABLE DE ENTORNO"))
            }

            let data = {
                phone: phone,
                body: body
            }


            //Request
            let result = await axios.post(URL, data)


            //console.log("Resultado", phone, result.data)
            resolve(result)
        }catch (e) {
            console.error("ERROR", phone, result)
            reject(e)
        }



    })

}

module.exports = postChatApi
