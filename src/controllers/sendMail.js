const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const {OAuth2} = google.auth;
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground'

const {
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    SENDER_EMAIL_ADDRESS
} = process.env

const oauth2Client = new OAuth2(
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    OAUTH_PLAYGROUND
)

const sendEmail = (to, url, txt) => {
    oauth2Client.setCredentials({
        refresh_token: MAILING_SERVICE_REFRESH_TOKEN
    })

    const accessToken = oauth2Client.getAccessToken()
    const smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: SENDER_EMAIL_ADDRESS,
            clientId: MAILING_SERVICE_CLIENT_ID,
            clientSecret: MAILING_SERVICE_CLIENT_SECRET,
            refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
            accessToken
        }
    })

    const mailOptions = {
        from: SENDER_EMAIL_ADDRESS,
        to: to,
        subject: "Ai Amu",
        html: `<div style="max-width: 100%; margin: auto; padding: 100px 20px; font-size: 110%; background-image:url(https://contents.potofu.me/images/sTxM8oilzL3z.jpg); font-family: Merriweather,Georgia,sans-serif; display: flex; align-items: center; justify-content: center;">
        <div style="max-width: 730px; width: 100%; background-color: rgba(255,255,255,.9); padding: 0 85px 60px; min-height: 300px; box-shadow: 0 0 10px rgba(0,0,0,0.016); margin-left: auto; margin-right: auto;">
           <div style="text-align: center;">
              <p style="margin-bottom: 16px; margin-top: 60px; font-size: 24px; font-weight: 700; line-height: 1rem; font-family: Merriweather,Georgia,sans-serif;">Ai Amu</p>
              <p style="margin-bottom: 50px; color: #9f9f9f; font-size: 10px; line-height: 1rem;">Aiamiam</p>
              <p style="margin-bottom: 60px; font-size: 16px; text-align: left; line-height: 2.5em; word-break: break-all; white-space: pre-wrap;">Congratulations! You are about to start using Ai Amu's services Just click the button below to verify your email address.</p>
              <div style="margin: 0 auto 50px; padding: 20px 10px; width: 350px; position: relative; text-align: center; background-color: #fff; border-radius: 6px; box-shadow: 0 0 10px rgb(0 0 0 / 16%)">
                 <!-- svg  -->
                 <svg width="16" height="16" viewBox="0 0 16 11.204" style="margin-bottom: 10px;"><path id="パス_3677" data-name="パス 3677" d="M609.241,322.348H598.4a2.583,2.583,0,0,0-2.58,2.58v6.045a2.583,2.583,0,0,0,2.58,2.58h10.841a2.583,2.583,0,0,0,2.58-2.58v-6.045A2.583,2.583,0,0,0,609.241,322.348Zm-.018,1.407-4.577,3.45a1.379,1.379,0,0,1-1.65,0l-4.577-3.45Zm1.191,7.218a1.174,1.174,0,0,1-1.173,1.173H598.4a1.174,1.174,0,0,1-1.173-1.173v-6.045a1.162,1.162,0,0,1,.246-.71l4.957,3.737a2.318,2.318,0,0,0,2.78,0l4.957-3.737a1.161,1.161,0,0,1,.246.71Z" transform="translate(-595.821 -322.348)"></path></svg>
                 <!-- end svg -->
                 <p style="margin-bottom: 18px; color: #383838; font-size: 14px; line-height: 1.5em; word-break: break-all;">Please contact us via email or Twitter DM</p>
                 <a href=${url} style="color: #1b65cb; font-size: 12px; text-decoration: none;">${txt}</a>
              </div>
              <p style="text-align: left;">${url}</p>
           </div>
           <!-- activity -->
           <div>
              <div style="margin-bottom: 30px; display: flex; align-items: center;">
                 <hr style="width: 100%; border-top: 1px dashed #707070;">
                 <h2 style="margin: 0 45px; width: fit-content; text-align: center; font-size: 18px; font-weight: 700;">Activity</h2>
                 <hr style="width: 100%; border-top: 1px dashed #707070;">
              </div>
              <!-- img -->
              <div>
                 <div style="display: flex; flex-wrap: wrap; margin: 0 -12px 30px;">
                    <!-- item -->
                    <div style="margin: 7.5px 5px; width: 175px; min-height: 200px; border: none; border-radius: 6px; background-color: #fff; box-shadow: 0 0 6px rgb(0 0 0 / 16%); cursor: pointer; transition: all .2s ease-in-out;">
                       <div>
                          <div style="height: 100%;">
                             <img style="width: 100%; height: 100%; object-fit: cover;" src="https://scontent-itm1-1.cdninstagram.com/v/t51.29350-15/285423286_3360389784192395_508061256566598203_n.jpg?_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=5L_dG_KnE0cAX-dno1S&amp;_nc_ht=scontent-itm1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT_malN_QQ08Ld6wbKs0-gZkP1lEx7VVzhlX3S0ZxZ76Mw&amp;oe=62A23AEB" class="" alt="">                        </div>
                       </div>
                    </div>
                    <!-- item -->
                    <div style="margin: 7.5px 5px; width: 175px; min-height: 200px; border: none; border-radius: 6px; background-color: #fff; box-shadow: 0 0 6px rgb(0 0 0 / 16%); cursor: pointer; transition: all .2s ease-in-out;">
                       <div>
                          <div style="height: 100%;">
                             <img style="width: 100%; height: 100%; object-fit: cover;" src="https://scontent-itm1-1.cdninstagram.com/v/t51.29350-15/286243124_1738089249861303_8938746376486563800_n.jpg?_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=kBO4sKlKxHkAX-WpWXP&amp;_nc_ht=scontent-itm1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT_fMLuULBuFoqKoRIIzLkObjdrbzTuCWtI1DZKX07W1xg&amp;oe=62A1BEF4" alt="">
                          </div>
                       </div>
                    </div>
                    <!-- item -->
                    <div style="margin: 7.5px 5px; width: 175px; min-height: 200px; border: none; border-radius: 6px; background-color: #fff; box-shadow: 0 0 6px rgb(0 0 0 / 16%); cursor: pointer; transition: all .2s ease-in-out;">
                       <div>
                          <div style="height: 100%;">
                             <img style="width: 100%; height: 100%; object-fit: cover;" src="https://scontent-itm1-1.cdninstagram.com/v/t51.29350-15/285527336_1184048505723765_7309927983415497766_n.jpg?_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=vpRF99Eh_TAAX-hF1fz&amp;_nc_ht=scontent-itm1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT8bFIfO7NsF5YVs52Lkl9q-ZRYhZAee7uv4aBLSrzMX6Q&amp;oe=62A2FF4A" class="" alt="">                        
                          </div>
                       </div>
                    </div>
                    <!-- item -->
                    <div style="margin: 7.5px 5px; width: 175px; min-height: 200px; border: none; border-radius: 6px; background-color: #fff; box-shadow: 0 0 6px rgb(0 0 0 / 16%); cursor: pointer; transition: all .2s ease-in-out;">
                       <div>
                          <div style="height: 100%;">
                             <img style="width: 100%; height: 100%; object-fit: cover;" src="https://scontent-itm1-1.cdninstagram.com/v/t51.29350-15/280659255_974668909891766_7151218778915302006_n.jpg?_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=WtdzBoCfklQAX-4orfb&amp;_nc_ht=scontent-itm1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT9bv2rYCz7lZrQbRx6E2ssDOm8PNLZNRwle41ggNKrJnQ&amp;oe=62A37591" class="" alt="">                        </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>`
    }

    smtpTransport.sendMail(mailOptions, (err, infor) => {
        if(err) return err;
        return infor
    })
}

module.exports = sendEmail