
import dotenv from 'dotenv'
import  envar  from 'env-var';
dotenv.config()

export const envs={
    PORT:envar.get('PORT').required().asIntPositive(),
    PUBLIC_PATH:envar.get('PUBLIC_PATH').default('public').asString()
}

