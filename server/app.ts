import "dotenv/config";
import Server from "./src/server";

import "./database/connection"

const server = new Server();
server.online()
