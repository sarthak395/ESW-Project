import { nanoid } from "nanoid"
import prisma from "../../lib/prisma";

export default async function handler(req, res) {
    if(req.method=='POST'){
        let datajson = JSON.parse(req.body);
        console.log(datajson)
        const user = await prisma.user.create({
            data: {
              email: datajson.email,
              name: datajson.name,
              password:datajson.password
            },
          })
          res.status(200).json({success:true})
    }
    else
    {
        res.status(400).json({error:"Bad Request"})
    }
  }