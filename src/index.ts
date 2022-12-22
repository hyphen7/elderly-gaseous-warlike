import express from 'express';
const PORT: number = Number(process.env.PORT) || 3000;

const app: express.Express = express();
app.use(express.json());

app.listen(PORT, () => {
    console.log("Express is running.");
});

app.get("/", (req: express.Request, res: express.Response) => {
    //res.sendStatus(200);
    res.status(200).json({message:"OK"});
});

app.use((req: express.Request, res: express.Response) => {
    res.status(404).json({message:"Not Found"});
});