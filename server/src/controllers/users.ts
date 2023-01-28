import { genSalt, hash } from 'bcrypt'
import { Request, Response } from "express"
import { QueryResult } from "pg"
import { pool } from "../db/pool"

type Account = {
  user_id: string;
  username: string;
  password: string;
  salt: string;
  email: string;
  created_on: string;
  last_login: string
}

export const addUser = async (request: Request<Pick<Account, "username" | "password" | "email">>, response: Response) => {
  const { username, password, email } = request.body
  console.log({username, password, email})
  const salt = await genSalt();
  const hashedPw = await hash(password, salt);
  const query = `INSERT INTO accounts
  (username, password, salt, email) VALUES($1, $2, $3, $4) RETURNING *`
  const values = [username, hashedPw, salt, email];
  const result: QueryResult = await pool.query(query, values)
  console.log({ result });
  response.status(200).send();
}
export const getUsers = async (request: unknown, response: Response) => {
  try {
    const result: QueryResult<Omit<Account, 'password' | 'salt'>> = await pool.query(`
    SELECT
      user_id,
      username,
      email,
      created_on,
      last_login
    FROM
      accounts;`)
    response.status(200).send(result.rows)
  } catch (e) {
    console.log('Something went wrong with the DB query', e)
    response.status(500).send('Internal Server Error')
  }
}
export const getUser = () => { }
export const removeUser = () => { }