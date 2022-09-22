import React, {useState, useEffect} from 'react';
import { Button } from '../layout/Button';
import { Link } from 'react-router-dom'
import '../styles/HeroSection.css';
import '../styles/Game.css';
import video from '../../videos/video5.mp4'
import bgimg from '../../photos/bgimg.png'
import {Coordonees} from './Coordonees'

function HeroSection() {
  const [variable, setVariable] = useState('no');

  const scroll = () => {
    window.scrollTo({
      top: 800,
      behavior: 'smooth'})
  }

	useEffect(() => {
    if(window.innerWidth > 480) {
      setVariable('yes')
    }
	},[])




  return (
    <div className='hero-container'>
      {variable === 'yes' ?
        <video className='mainvideo' src ={video} autoPlay loop muted />
      :
      <img className='mainvideo' src ={bgimg} alt='' />
      }
      <h1>Fatiha Boudyaf </h1>
      <h3>Developeuse Full Stack</h3>
      <div className='thegame'>
        <div className= 'girl-forward'></div>
      </div>
      <div className='tech'>
        <p className='p1'> ReactJs |</p>
        <p className='p2'> NodeJS |</p>
        <p className='p3'> Express |</p>
        <p className='p4'> Bootstrap |</p>
        <p className='p5'> JavaScript |</p>
        <p className='p6'> PHP |</p>
        <p className='p7'> C |</p>
        <p className='p8'> HTML |</p>
        <p className='p9'> CSS </p>
      </div>
      <div className='hero-btns'>
        <Link to='/contact' className='btn2'>
          <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'
          >Contactez moi <i className='far' /></Button>
        </Link>
        <Link onClick={scroll} className='btn2'>
          <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'
          >Accédez à mon profil <i className='far fa-play-circle' /></Button>
        </Link>
      </div>
      <Coordonees/>
      <br/>
    </div>
  );
}

export default HeroSection;
