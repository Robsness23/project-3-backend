// ? A file containing our environment variables
import dotenv from 'dotenv'
dotenv.config()
// export const dbURL = 'mongodb://127.0.0.1:27017/plantsdb'
export const dbURI = process.env.DB_URI || 'mongodb://127.0.0.1:27017/plantsdb'

// export const dbURI = process.env.DB_URI || mongoURL === 'test' ?
//   `${mongoURL}/plantsdb-test` : 
//   `${mongoURL}/plantsdb`
export const port = process.env.PORT || 4000

// ! Create a secret for JWT verification
export const secret = process.env.SECRET || 'horsebatterycowstapleapple'
