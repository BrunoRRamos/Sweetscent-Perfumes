import { Perfumery } from "@prisma/client";
import { prisma } from "../../middleware/prisma";
import { verifyParfum, verifyPerfumery } from "../../utils/validations";

type PerfumeryInput = Omit<Perfumery, "id" >;

export async function createPerfumery(perfumery: PerfumeryInput): Promise<Perfumery> {
    const newPerfumery = await prisma.perfumery.create({
        data: {
            name: perfumery.name,
        },
    });

    return newPerfumery;
}

export async function getAllPerfumeries(): Promise<Perfumery[]> {
    const allPerfumeries = await prisma.perfumery.findMany({
        orderBy: {
            name: 'asc',
        },
    });

    return allPerfumeries;
}

export async function getPerfumeryByName(name: string): Promise<Perfumery[]> {
    const matchedPerfumeries = await prisma.perfumery.findMany({
        where: {
            name: {
                contains: name,
                mode: 'insensitive',
            },
        },
        orderBy: {
            name: 'asc',
        },
    });

    return matchedPerfumeries;
}

export async function putPerfumery(id: string, data: PerfumeryInput): Promise<Perfumery> {
    verifyPerfumery(id);
    
    const updatedPerfumery = await prisma.perfumery.update({
        where: {
            id: id,
        },
        data
    });

    return updatedPerfumery;
}

export async function deletePerfumery(id: string): Promise<Perfumery> {
    verifyPerfumery(id);

    const deletedPerfumery = await prisma.perfumery.delete({
        where: {
            id: id,
        },
        include: {
            parfums: true,
        },
    });

    return deletedPerfumery;
}

export async function addParfumToPerfumery(perfumeryId: string, parfumId: string): Promise<Perfumery> {
    verifyPerfumery(perfumeryId);
    verifyParfum(parfumId);

    const updatedPerfumery = await prisma.perfumery.update({
        where: {
            id: perfumeryId,
        },
        data: {
            parfums: {
                connect: {
                    id: parfumId,
                },
            },
        },
    });

    return updatedPerfumery;
}