import express from "express";
import morgan from "morgan";
import cors from "cors"; // Importa el middleware de CORS

// Routes
import languageRoutes from "./routers/language.routes";

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors()); // Configura CORS

// Routes
app.use("/api", languageRoutes);

export default app;
