import { prisma } from "../middleware/prisma"

export const verifyPerfumery = async (id: string) => {
    try {
        const perfumery = await prisma.perfumery.findUnique({
            where: {
                id: id,
            },
        });
        if (!perfumery) {
            throw new Error('Perfumery not found');
        }
    } catch(err) {
        throw err;
    }
}

export const verifyParfum = async (id: string) => {
    try {
        const parfum = await prisma.parfum.findUnique({
            where: {
                id: id,
            },
        });
        if (!parfum) {
            throw new Error('Parfum not found');
        }
    } catch(err) {
        throw err;
    }
}