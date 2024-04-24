// funcion agnostoca autoconvocada
// agnistica por que no tiene nombre
// autoconvocada por que ejecuta una funcion anonima


import {envs} from './config/env.js'

import { startServer } from './server/server.js';
function main(){
    startServer({
        port:envs.PORT,
        public_path:envs.PUBLIC_PATH
    })
}


( async()=>{
    main();
})()

