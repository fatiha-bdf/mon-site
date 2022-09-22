import React from 'react'
import { Link } from 'react-router-dom'
import PhoneNumber from 'react-phone-number';
import EmailShare from 'react-email-share-link'
import { MDBIcon } from "mdbreact"
import '../styles/Coordonees.css';


export const Coordonees = () => {
	const x = () => {
		window.open('https://github.com/fatiha-bdf')
	}
	return (
		<div className='contact'>
			<div className='mailnumsocial'>
				<div className='mail1'>
					<MDBIcon icon="envelope-open" />
					<EmailShare email="fatiha.boudyaf@gmail.com" subject="Your subject" >
						{link => (<a href={link} data-rel="external"> fatiha.boudyaf@gmail.com</a>)}
					</EmailShare>
				</div>
				<div className='mail1'>
					<MDBIcon icon="phone-alt" />
					<PhoneNumber  number="+33614011232" isLinked={true} />
				</div>
			</div>
			<div className='mailnumsocial'>
				<div className='mail2'>
					<a href="https://linkedin.com/in/fatiha-bdf" target="_blank" >Linkedin <i className ='fab fa-linkedin' /></a>
				</div>
				<div className='mail2'>
					<a href="https://github.com/fatiha-bdf/" target="_blank" >Github <i className ='fab fa-github' /></a>
				</div>
			</div>
		</div>
	)
}




