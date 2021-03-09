import React from 'react';
import '../styles/Projets.css';
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'
import photo1 from '../../photos/match1.png'
import photo2 from '../../photos/match2.png'
import photo3 from '../../photos/match3.png'
import photo4 from '../../photos/match4.png'
import photo5 from '../../photos/match5.png'
import record from '../../videos/record.mp4'

import cam1 from '../../photos/signup.png'
import cam2 from '../../photos/login.png'
import cam3 from '../../photos/settings.png'
import cam4 from '../../photos/webcam.png'
import cam5 from '../../photos/commentlike.png'
import cam6 from '../../photos/gallery.png'

function Projets() {
	const github = () => {
		window.open('https://github.com/fatiha-bdf')
	}

	return (
		<div className = 'projets'>
			<div className = 'title'>
				<h1>Projets Web</h1>
				<h3>Site de rencontre</h3>
			</div>
			<div className = 'body'>
				<div className = 'caroussel'>
					<Carousel >
						<Carousel.Item>
						<figure>
							<img className="d-block w-100" src={photo1} alt= ''/>
							<figcaption>Page de connection</figcaption>
						</figure>
						</Carousel.Item>
						<Carousel.Item>
						<figure>
								<img className="d-block w-100" src={photo2} alt= ''/>
								<figcaption>Recherche avancée + liste des profils</figcaption>
						</figure>
						</Carousel.Item>
						<Carousel.Item>
						<figure>
							<img className="d-block w-100" src={photo3} alt= ''/>
							<figcaption>Personalisation du profil + ajouts de photos</figcaption>
						</figure>
						</Carousel.Item>
						<Carousel.Item>
						<figure>
							<img className="d-block w-100" src={photo4}  alt= ''/>
							<figcaption>Messagerie instantanée</figcaption>
						</figure>
						</Carousel.Item>
						<Carousel.Item>
							<figure>
								<img className="d-block w-100" src={photo5} alt= ''/>
								<figcaption>Notifications</figcaption>
							</figure>
						</Carousel.Item>
					</Carousel>
				</div>
				<div className = 'ref'>
				<ul>
					<li><p>Application permettant à deux potentielles âmes soeurs de se rencontrer, de l’inscription au contact final.</p></li>
					<li><p>L'utilisateur pourra s’inscrire, se connecter, compléter son profil, parcourir et rechercher d’autres utilisateurs, les liker, et chatter avec ceux qui auront liké en retour.</p></li>
					<li><p>Environnement technique: ReactJS, nodeJS, Express, MySQL, HTML/CSS</p></li>
				</ul>
				</div>
			</div>
			<div className = 'title'>
				<h3>Reseau social</h3>
			</div>
			<div className = 'body'>
				<div className = 'caroussel'>
					<Carousel >
						<Carousel.Item>
						<figure>
							<img className="d-block w-100" src={cam1} alt= ''/>
							<figcaption>Page d'inscription</figcaption>
						</figure>
						</Carousel.Item>
						<Carousel.Item>
						<figure>
								<img className="d-block w-100" src={cam2} alt= ''/>
								<figcaption>Page de connections</figcaption>
						</figure>
						</Carousel.Item>
						<Carousel.Item>
						<figure>
							<img className="d-block w-100" src={cam3} alt= ''/>
							<figcaption>Interface utilisateur</figcaption>
						</figure>
						</Carousel.Item>
						<Carousel.Item>
						<figure>
							<img className="d-block w-100" src={cam4}  alt= ''/>
							<figcaption>Webcam</figcaption>
						</figure>
						</Carousel.Item>
						<Carousel.Item>
							<figure>
								<img className="d-block w-100" src={cam5} alt= ''/>
								<figcaption>Gallery: commenter, liker</figcaption>
							</figure>
						</Carousel.Item>
					</Carousel>
					{/* <video className='record' src ={record} type="video/mp4" autoPlay loop muted playsinline/> */}
				</div>
				<div className = 'ref'>
					<ul>
						<li><p>Realisation d'un reseaux social et service de partage de photos dans lequel l'utilisateur peut realiser des montages photos avec la webcam ou images prédéfinies. </p></li>
						<li><p>Environnement technique: PHP, JavaScript, Ajax, MySQL, HTML/CSS</p></li>
					</ul>
				</div>
			</div>
			<div className = 'title'>
				<div className = 'bottomlink'>
					<a href="https://github.com/fatiha-bdf/" target="_blank" >accedez à mon Github <i className ='fab fa-github' /></a>
				</div>
			</div>
		</div>
	)
}

export default Projets
