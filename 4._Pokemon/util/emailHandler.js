//Create a util folder and in it create a file that exports a function for 
//sending emails. Don’t mix your route logic with sending emails. What if you wanted to send more emails. 

 //You can consider sending a response immediately or awaiting sending emails and sending a 
 //response that tells if it was sent sucessfully or not. The latter requires promises. 
import nodemailer from 'nodemailer'


export default async function handleEmail(){
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
        to: "frederic.gleason@ethereal.email",
        subject: "Hello ✔",
        text: "Jeg kunne godt bruge en Croissant",
        html: "<b>Hello world?</b>",
      });



console.log("Message sent: %s", info.messageId);

console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}