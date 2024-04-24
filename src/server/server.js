import express from 'express'
import path from 'path';


export const startServer=(options)=>{
    const{port,public_path='public'}=options
    const app= express();
    //para poder usar middlewares  se usa la palbras 'use' (epress) que es propide de express
    app.use(express.static(public_path)) // sirve para publicar archivos estaticos

    app.get("*",(req,res)=>{
        const indexPath=path.join(__dirname+`../../../${public_path}/index.html`)
        res.sendFile(indexPath);// envia el archivo index.html
    })
    app.listen(port,()=>{
        console.log(`Servidor corriendo en el puerto ${port}`)
    })
}
