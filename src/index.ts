import express, { Application } from "express";
import mongoose from 'mongoose';
import { RegisterRoutes } from "./routes";
import swaggerUi from "swagger-ui-express";

const PORT = process.env.PORT || 8000;
const MONGOOSE_URI = process.env.MONGOOSE_URI || "mongodb://localhost:27017/"

async function main() {
    const app: Application = express();

    app.use(express.json());
    app.use(express.static("public"));

    app.use(
        "/docs",
        swaggerUi.serve,
        swaggerUi.setup(undefined, {
            swaggerOptions: {
            url: "/swagger.json",
            },
        })
    );
    console.log("connecting to mongodb...");
    await mongoose.connect(MONGOOSE_URI);
    console.log("connected to mongodb.");
    console.log("registering routes...");    
    RegisterRoutes(app);
    console.log("routes registered.");
    app.listen(PORT, () => {
        console.log("Server is running on port", PORT);
    });
}
main();



