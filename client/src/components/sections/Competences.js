import React from 'react';
import '../styles/Competences.css';

function Competences() {
	return (
		<div className = 'competences'>
			<div className='titre'>
				<h1>Compétences</h1>
			</div>
			<div className= 'bodyy'>
				<div className= 'technique1'>
					<div className='titre'><h3>Languages de programmation</h3></div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '85%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">HTML/CSS</div>
					</div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '85%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Javascript</div>
					</div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">PHP</div>
					</div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Language C</div>
					</div>
					<br/>
					<div className='titre'><h3>Framework et Environnement d'execution</h3></div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '85%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">NodeJs</div>
					</div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '85%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">React</div>
					</div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Express</div>
					</div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '85%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Bootstrap</div>
					</div>

				</div>
				<div className='technique2'>
					<div className='titre'><h3>Gestion de base de données</h3></div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">MYSQL</div>
					</div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '30%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">MongoDB</div>
					</div>
					<div className='titre'><h3>Service conteneur et cloud</h3></div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '20%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Amazon AWS</div>
					</div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '30%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Docker</div>
					</div>
					<div className='titre'><h3>Traitement d'images et montages vidéos</h3></div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Photoshop</div>
					</div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">After Effect</div>
					</div>

					<div className='titre'><h3>Langues</h3></div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Anglais et espagnol courant</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Competences
