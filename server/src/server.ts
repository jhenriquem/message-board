import express, { Application } from "express"
import cors from "cors"
import bodyParser from "body-parser"
import morgan from "morgan"
import router from "../routes/messagesRoutes"

export default class Server { 
  private app: Application
  private port: number | string
  private paths = {
    messages: "/api/messages"
  }

  constructor() {
    this.app = express()
    this.port = process.env.PORT || 8080

    this.middlewares();
    this.routes()
  }

  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.paths.messages, router)
  }

  online() {
    try {
      this.app.listen(this.port, async () => {
        console.log(`Server is online on port ${this.port}`);
      })
    }
    catch (err: any) {
      console.error(`Error: ${err.message}`);
    }
  }
}
