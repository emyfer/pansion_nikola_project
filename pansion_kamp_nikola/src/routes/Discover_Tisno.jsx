import React from 'react'
import './discover_tisno.css'
import { useTranslation } from 'react-i18next'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useParallax } from '../hooks/useParallax'


const Discover_Tisno = () => {
  const { t } = useTranslation();

  const [sibenikRef, sibenikVisible] = useScrollAnimation();
  const [zadarRef, zadarVisible] = useScrollAnimation();
  const [krkaRef, krkaVisible] = useScrollAnimation();
  const [kornatiRef, kornatiVisible] = useScrollAnimation();
  const [heroRef, heroOffset] = useParallax(0.5);

  
  return (
    <div className="discover_page">
       <div className="discover_page_hero_wrapper" ref={heroRef}>
        <img
          src="./discover_page/tisno.jpg"
          className="discover_page_hero_image"
          style={{ transform: `translateY(${heroOffset}px)` }}
          alt=""
        />
      </div>
      <div className="discover_page_text" >
        <h2>Discover Tisno</h2>
        <p className="discover_page_text_p">{t('discover_page.text')}</p>
      </div>

      <div
        ref={sibenikRef}
        className={`discover_page_part ${sibenikVisible ? 'is_visible' : ''}`}
      >
        <img src="./discover_page/sibenik.jpg" alt="" />

        <div className="discover_page_container">

            <h2>{t('discover_page.sibenik.title')}</h2>
            <p className="discover_page_p">{t('discover_page.sibenik.text')}</p>

            <a href="https://www.sibenik-tourism.hr/" target="_blank" rel="noopener noreferrer" className="discover_page_sibenik_buttons">
              <button className="discover_page_button">{t('discover_page.sibenik.button')}</button>
            </a>
        
        </div>
      </div>


      <div
        ref={zadarRef} id="reverse"
        className={`discover_page_part ${zadarVisible ? 'is_visible' : ''}`}
      >

        <div className="discover_page_container">

            <h2>{t('discover_page.zadar.title')}</h2>
            <p className="discover_page_p">{t('discover_page.zadar.text')}</p>

            <a href="https://zadar.travel/hr/" target="_blank" rel="noopener noreferrer" className="discover_page_zadar_buttons">
              <button className="discover_page_button">{t('discover_page.zadar.button')}</button>
            </a>
        
        </div>

        <img src="./discover_page/zadar.jpg" alt="" />
      </div>


      <div
        ref={krkaRef}
        className={`discover_page_part ${krkaVisible ? 'is_visible' : ''}`}
      >
        <img src="./discover_page/krka.jpg" alt="" />

        <div className="discover_page_container">

            <h2>{t('discover_page.krka.title')}</h2>
            <p className="discover_page_p">{t('discover_page.krka.text')}</p>

            <a href="http://np-krka.hr/" target="_blank" rel="noopener noreferrer" className="discover_page_krka_buttons">
              <button className="discover_page_button">{t('discover_page.krka.button')}</button>
            </a>
        
        </div>
      </div>


      <div
        ref={kornatiRef} id="reverse"
        className={`discover_page_part ${kornatiVisible ? 'is_visible' : ''}`}
      >

        <div className="discover_page_container">

            <h2>{t('discover_page.kornati.title')}</h2>
            <p className="discover_page_p">{t('discover_page.kornati.text')}</p>

            <a href="http://www.np-kornati.hr/hr/" target="_blank" rel="noopener noreferrer" className="discover_page_zadar_buttons">
              <button className="discover_page_button">{t('discover_page.kornati.button')}</button>
            </a>
        
        </div>

        <img src="./discover_page/kornati.jpg" alt="" />
      </div>

    </div>
  )
}

export default Discover_Tisno