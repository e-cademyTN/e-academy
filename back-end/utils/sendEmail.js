const nodemailer=require('nodemailer');
require('dotenv').config();

const sendConfirmation=async(name,email,confirmationCode,password)=>{
        const transporter=nodemailer.createTransport({
            service:'yahoo',
            auth: {
                user:  process.env.EMAIL,
                pass:  process.env.PASS
              }
        })
         transporter.sendMail({
            from:"rafikmhadhbi@yahoo.fr",
            to:email,
            subject:"Activate your account",
            html:
            `
            <div>
            <h1>Activation du compte </h1>
              <h2>Bonjour ${name}</h2>
              <p>Veuillez confirmer votre email en cliquant sur le lien suivant
      </p>
                 <h1>votre code de confirmation  ${confirmationCode}</h1>
      
      <ul>
      <li> votre nom d'utilisateur ${name}  </li>
      <li> votre mot de passe ${password}  </li>
      </ul>
              </div>`
      
})
}
module.exports={sendConfirmation}