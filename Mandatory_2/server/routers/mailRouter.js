import { Router } from 'express'
import nodemailer from 'nodemailer'

const mailRouter = Router()

mailRouter.post("/api/forgot", async (req, res) => {
    console.log(req.body.email)
    const email = req.body.email

    handleEmail(email)
})

async function handleEmail(email) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'ernesto.morar@ethereal.email',
            pass: 'YF5FN6gvKPuyhWxgr2'
        }
    });

    let info = await transporter.sendMail({
        from: '"Ernesto Morar :O" <ernesto.morar@ethereal.email>',
        to: email,
        subject: "Hello ✔",
        text: "Jeg kunne godt bruge en Croissant",
        html: "<b>Hello world?</b>",
    });

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}

export default mailRouter