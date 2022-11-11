import { nanoid } from "nanoid"
import prisma from "../../lib/prisma";

export default async function handler(req, res) {
    if(req.method=='POST'){
        let datajson = JSON.parse(req.body);
        console.log(datajson)
        const user = await prisma.user.findUnique({
            where: {
              email: datajson.email,
            },
          })

          if(user){
            if (datajson.password == user.password){
                res.status(200).json({ success: true, name:user.name , email :user.email});
            }
            else{
                res.status(400).json({ success: false, error: "Invalid Credentials" })
            }
          }
          else{
            res.status(400).json({ success: false, error: "User Not Found" })
          }
    }
    else
    {
        res.status(400).json({error:"Bad Request"})
    }
  }