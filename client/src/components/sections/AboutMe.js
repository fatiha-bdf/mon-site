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
				<p><strong>curieuse et remplie d'energie.</strong></p>
				<p>Passionnée par l’innovation et ce qu’elle représente, je suis constamment à l'affut de nouvelles idées et nouveautés technologiques.</p>
				<p> J'aime relever les <strong>challenges en equipe</strong>, et penser au delà des <strong>limites</strong> fixées.</p>
				</div>
			</div>
		</div>
	)
}

export default AboutMe
