var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const config = require('config') // the conjig.json i created inside config dir
const nodemailer = require ('nodemailer')
const {google} = require ('googleapis')
// require('dotenv').config()

// @access: Public
router.post('/', [
	check('companie', 'companie is required').not().isEmpty(),
	check('email', `Votre email n'est pas valide`).isEmail(),
	check('message', 'message is required').not().isEmpty(),
	],
	async (req, res) => {
		const errors = validationResult(req)
		const CLIENT_ID = '452902884247-o2qncqb47c5h8u045tnp36nkrmtr3akk.apps.googleusercontent.com'
		const CLIENT_SECRET = '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'
		const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
		const REFRESH_TOKEN = '1//04IFMb_Woj_4VCgYIARAAGAQSNwF-L9IrAFQyTLlbVU1giZu5emT9v7ymRO7tveKgTqzlKhg2d23tK7mYuRObcBdNnjk2CN1D0rc'
		const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
		oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN})
		if (!errors.isEmpty()) {
			return res.status(400).json({ msg: errors.array()[0].msg })
		}
		const {email, message, companie} = req.body
		try {
			const accessToken =  await oAuth2Client.getAccessToken()
			let transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					type: 'OAuth2',
					user: 'portfolio59600@gmail.com',
					clientId: CLIENT_ID,
					clientSecret: CLIENT_SECRET,
					refreshToken: REFRESH_TOKEN,
					accessToken: accessToken, // generate access token
				}
			});
			// let transporter = nodemailer.createTransport({
			// 	service: 'gmail',
			// 	auth: {
			// 		user: 'fboudyaf.matcha@gmail.com',
			// 		pass: 'matcha@42'
			// 	}
			// });
			const mailOptions = {
				from: `from ${companie}` ,
				to: 'fatiha.boudyaf@gmail.com', // here has to be user email
				subject: "we are interested!",
				text: `${message}
				contact us ${email}`,
			};
			transporter.sendMail(mailOptions, function (err, info) {
				if(err){
					console.log(err)
					return res.status(500).json({ msg: `Une erreur semble s'être produite, merci de réessayer`})
				}
				else
				console.log(info);
				res.json({ msg: 'form sent' })
			});
		}
		catch(err) {
			console.log(err.message)
			return res.status(500).json({ msg: `Une erreur semble s'être produite, merci de réessayer`})

		}
	}
);

module.exports = router;
