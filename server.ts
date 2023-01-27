import express from "express"
const PORT = 8080
const server = express()

async function start() {

    try {
        
        server.listen(PORT, () => {
            console.log(`Server ${PORT}`)
        })

    } catch (error: any) {
        console.log(error)
    }

}
start()