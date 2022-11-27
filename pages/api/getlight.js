import prisma from "../../lib/prisma";

// test for '2022-11-13T00:27:11+05:30'
export default async function handler(req, res) {
    // if (req.method == 'POST') {
    //     let datajson = JSON.parse(req.body);

    //     const data = await prisma.thingspeakdata.findMany({
    //         where: {
    //             createdAt: {
    //                 contains: datajson.backdate
    //             }
    //         },
    //         select: {
    //             Light: true,
    //             createdAt: true
    //         }
    //     })

    //     res.status(200).json(data)
    // }
    // else {
    //     var date = new Date()

    //     const data = await prisma.thingspeakdata.findMany({
    //         where: {
    //             createdAt: {
    //                 contains: '2022-11-13T00:27:11+05:30'// to be changed to date.toString()
    //             }
    //         },
    //         select: {
    //             Light: true,
    //             createdAt: true
    //         }
    //     })

    //     res.status(200).json(data)
    // }

    console.log(req.query)

    const data = await prisma.thingspeakdata.findMany({
        where: {
            createdAt: {
                contains: req.query.backdate
            }
        },
        select: {
            Light: true,
            createdAt: true
        }
    })

    res.status(200).json(data)
}