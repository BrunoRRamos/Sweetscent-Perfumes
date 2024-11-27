import { Perfumery } from "@prisma/client";
import { createPerfumery, deletePerfumery, getAllPerfumeries, getPerfumeryByName, putPerfumery } from "./service";
import { Request, Response } from "express";
import { HttpCodes } from './../../utils/httpCodes';

type PerfumeryInput = Omit<Perfumery, "id" >;

export async function handleCreate(request: Request, response: Response): Promise<Response> {
    const { name }: PerfumeryInput = request.body;
    const perfumery = await createPerfumery({ name });
    
    return response.status(HttpCodes.CREATED).json(perfumery); 
}

export async function handleGetAllPerfumeries(request: Request, response: Response): Promise<Response> {
    const perfumeries = await getAllPerfumeries();

    return response.status(HttpCodes.OK).json(perfumeries);
}

export async function handleGetPerfumeryByName(request: Request, response: Response): Promise<Response> {
    const { name }: PerfumeryInput = request.body;
    const matchedPerfumeries = await getPerfumeryByName(name);

    return response.status(HttpCodes.OK).json(matchedPerfumeries);
}

export async function handlePutPerfumery(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data: PerfumeryInput = request.body;
    const updatedPerfumery = await putPerfumery(id, data);

    return response.status(HttpCodes.OK).json(updatedPerfumery);
}

export async function handleDeletePerfumery(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deletedPerfumery = await deletePerfumery(id);

    return response.status(HttpCodes.NO_CONTENT).json(deletedPerfumery);
}
