import Express  from "express";
import cors from "cors";
import bodyParser from 'body-parser';

const app = Express();

app.use(cors());
app.use(bodyParser.json());

app.get("/api/hello/", (req, res) => {
    res.json({
        message: "Hello World"
    });
});

app.post("/api/hello/", (req, res) => {
    console.log(req?.body)
    res.json({
        message: `Hello ${req?.body?.name || 'World'}`
    });
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
})