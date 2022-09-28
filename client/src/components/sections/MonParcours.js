import React, {useState} from 'react';
import '../styles/MonParcours.css';


function MonParcours() {
		console.log(window.innerWidth)
		const [visibility1, setVisibility1] = useState('hidden');
		const [visibility2, setVisibility2] = useState('hidden');
		const [animation, setAnimation] = useState('paused');
		const [animationName, setAnimationName] = useState('forward');

		const foxtons = (e) => {
			if(window.innerWidth > 500) {
				setVisibility1('visible')
				setAnimation('running')
				setAnimationName('forward')
			}
		}
		const equal = (e) => {
			if(window.innerWidth > 500) {
				setVisibility2('visible')
				setAnimation('running')
				setAnimationName('forward')
			}
		}

		const leaveFoxtons = (e) => {
			if(window.innerWidth > 500) {
				setAnimationName('backward')
				setAnimation('running')
				setTimeout(function(){ setVisibility1('hidden'); }, 500);
			}
		}
		const leaveEqual = (e) => {
			if(window.innerWidth > 500) {
				setAnimationName('backward')
				setAnimation('running')
				setTimeout(function(){ setVisibility2('hidden') }, 500);
			}
		}

		return (
			<div className = 'parcours'>
					<h1>Mon Parcours</h1>
				<div className= 'all'>
					<div className= 'body-parcours'>
						<div className= 'part'>
							<h4>Préparation Bac+3/4 Développeur Full Stack en alternance</h4>
							<p>Cloud Campus - 2022/2024</p>
						</div>
						<div className= 'part'>
							<h4>Formation concepteurs développeurs de solutions informatiques</h4>
							<p>Ecole 42 - 2019/2022</p>
						</div>
						<div className= 'part'>
							<h4>Licence Langues et Communications</h4>
							<p>2012-2015 | Université Paris X</p>
						</div>
					</div>
					<div className= 'body-parcours'>
						<div className= 'part' onMouseEnter={equal} onMouseLeave={leaveEqual}>
							<h4>Responsable d'Unite Opérationnel</h4>
							<p>2016-2019 | Equal Esto | Villejuif, France</p>
						</div>
						<div className= 'part' onMouseEnter={foxtons} onMouseLeave={leaveFoxtons}>
							<h4>Agent Immobilier</h4>
							<p>2015-2016 | Foxtons | Londres, Royaume unis</p>
						</div>
					</div>
				</div>

				<div className='details'
				style={{visibility: visibility1, animationPlayState: animation, animationName: animationName}}>
					<h3>Tâches effectuées</h3>
					<p> - Prospection, acquisitions de nouveaux clients.</p>
					<p> - Réalisation d’études de marché et estimations de biens immobiliers</p>
					<p> - Organisation et réalisation de visites, et négociation des offres</p>
				</div>
				<div className='details'
				  style={{visibility: visibility2, animationPlayState: animation, animationName: animationName}}>
					<h3>Tâches effectuées</h3>
					<p> - Analyse du positionnement stratégique multidimensionnel de l’entreprise</p>
					<p> - Definition et gestion de projets</p>
					<p> - Suivi budgétaire</p>
					<p> - Analyse de performance globale et rentabilité des activités et projets</p>
				</div>

			</div>
		)
}

export default MonParcours
