import prisma from "../../lib/prisma";

const { parse } = require("csv-parse");
const fs = require('fs')
export default async function handler(req, res) {
    let dataset = []
    await fs.createReadStream("data.csv")
        .pipe(parse({ delimiter: ",", from_line: 2 }))
        .on("data", async function (row) {
            console.log(typeof (row[4]))
            const data = {
                createdAt: row[0],
                Light: row[2],
                CO2: row[3],
                Temperature: row[4],
                Humidity: row[5],
                Soil: row[6]
            }
            dataset.push(data)
        }).on("end", async function () {
            console.log("finished");
            console.log(dataset)
            const createMan = await prisma.thingspeakdata.createMany({
                data: dataset,
                skipDuplicates: true
            })
        });

    res.status(200).json({ success: true })
}