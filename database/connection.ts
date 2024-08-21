import { Pool } from "pg";

const pool = new Pool({
  host: process.env.POSTGRES_HOST as string,
  user: process.env.POSTGRES_USER as string,
  password: `${process.env.POSTGRES_PASSWORD}`,
  database: process.env.POSTGRES_DATABASE as string,
  port: process.env.POSTGRES_PORT as unknown as number
})

export default pool
