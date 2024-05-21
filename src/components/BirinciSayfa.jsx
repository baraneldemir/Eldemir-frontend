
// import tercuman from '../assets/tercuman.jpeg'
import eelogo from '../assets/eelogo.png'
import React, { useState, useEffect } from 'react';
import '../App.css'
import paper2 from '../assets/paper2.png'
import './BirinciSayfa.css'

export default function BirinciSayfa() {
  const [logoWidth, setLogoWidth] = useState('200px');

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 768) {
        setLogoWidth('150px');
      } else if (screenWidth <= 576) {
        setLogoWidth('100px');
      } else {
        setLogoWidth('200px');
      }
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize once to set initial values
    handleResize();

    // Remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    <img src={eelogo} alt='logo' style={{ position: 'absolute', zIndex: '999', left: '50%', top: '30%', transform: 'translate(-50%, -50%)', width: logoWidth }}/>
    <div style={{ textAlign: 'center', color: 'black', position: 'absolute', zIndex: '999', left: '50%', top: '44%', transform: 'translate(-50%, -50%)', width: logoWidth }}>Onemli Duyuru</div>
    <section >
      <img className='d-block w-100'
        src={paper2}
        alt='tercuman'
      />
    </section>
  </>
  )
}
