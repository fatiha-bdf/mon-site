import React from 'react';
import '../styles/AboutMe.css';
import me from '../../photos/me.jpeg'

function AboutMe() {
	return (
		<div className = 'main'>
			{/* <div className='titr'><h1>À propos de moi.</h1></div> */}
			<div className = 'tout'>
				<div className = 'avatar'>
					<img className='avatar' src ={me} alt='' style={{width: 150, height: 140, borderRadius: 150/2}} />
				</div>
				<div className = 'about'>
				<br/>
				<h5>Bienvenue. Ce site a été concus avec les technologies ReactJS et NodeJS. Vous pourrez consulter le code source sur mon github.</h5>
				<h5>N'hésitez pas à me contacter en cliquant sur le bouton "Contactez moi" qui se trouve ci-dessus.</h5>
				<br/>
				<h4><strong>À propos de moi</strong></h4>
				<h5>Développeuse <strong>curieuse et remplie d'energie.</strong></h5>
				<h5>Passionnée par l’innovation, j'aime relever les <strong>challenges en équipe</strong>, et penser au delà des <strong>limites</strong> fixées.</h5>
				<h5>Je désire aujourd'hui mettre mon savoir en pratique dans un projet stimulant au sein d'une équipe motivée par le challenge.</h5>
				</div>
			</div>
		</div>
	)
}
export default AboutMe
