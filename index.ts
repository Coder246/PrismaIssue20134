import {PrismaClient} from "./prisma/client"

async function main() {
    global.prisma = new PrismaClient();
    console.log(await functions.getData("test"));
}

const functions = {

    async getData(id: string) {
        return await global.prisma.test.findUnique({
            where: {
                id: id
            },
            select: {
                testcon: {
                    select: {
                        id: true
                    }
                },
                a: true,
                b: true,
                c: true,
                d: true,
                e: true,
                f: true,
                g: true,
                h: true,

            }

        });
    }

};

void main();
