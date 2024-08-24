export const queryAllMessages = `SELECT * FROM ${process.env.POSTGRES_TABLENAME}`;
export const insertNewMessage = `INSERT INTO ${process.env.POSTGRES_TABLENAME}(id,username,message,date) VALUES ($1,$2,$3,$4)`;
