import { Perfumery } from "@prisma/client";
import { createPerfumery, getAllPerfumeries } from "./service";
import { Request, Response } from "express";

type PerfumeryInput = Omit<Perfumery, "id" >;

export async function handleCreate(request: Request, response: Response): Promise<Response> {
    const { name }: PerfumeryInput = request.body;
    const perfumery = await createPerfumery({ name });
    
    return response.status(201).json(perfumery); 
}

export async function handleGetAllPerfumeries(request: Request, response: Response): Promise<Response> {
    const perfumeries = await getAllPerfumeries();

    return response.status(200).json(perfumeries);
}