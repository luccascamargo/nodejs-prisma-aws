import { PrismaClient } from "@prisma/client";
import express, { Express, Request, Response } from "express";

const app: Express = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/products", async (req: Request, res: Response) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

app.post("/product", async (req: Request, res: Response) => {
  const { codigo, descricao } = req.body;

  const product = await prisma.product.create({
    data: {
      codigo,
      descricao,
    },
  });

  res.json(product);
});

app.listen(3000, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:3000`);
});
