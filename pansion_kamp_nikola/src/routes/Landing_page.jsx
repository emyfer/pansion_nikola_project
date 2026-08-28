import React from 'react'
import './Landing_page.css'
import { useTranslation } from 'react-i18next'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useParallax } from '../hooks/useParallax'



const Landing_page = () => {
  const { t } = useTranslation();

  const [pansionRef, pansionVisible] = useScrollAnimation();
  const [campRef, campVisible] = useScrollAnimation();
  const [discoverRef, discoverVisible] = useScrollAnimation();

  const [heroRef, heroOffset] = useParallax(0.5);


  return (
    <div className="landing_page">
      <div className="landing_page_hero_wrapper" ref={heroRef}>
        <img src="/landing_page/main.png" className='landing_page_hero' alt="" style={{transform:`translateY(${heroOffset}px)`}}/>
        <div className="landing_page_hero_text">
            <p>"{t('landing_page.main_text1')}</p>
            <p>{t('landing_page.main_text2')}"</p>
        </div>
      </div>
      <div className="landing_page_text">
        <p className="landing_page_text_p">-{t('landing_page.text')}-</p>
      </div>

    <div
        ref={pansionRef}
        className={`landing_page_part ${pansionVisible ? 'is_visible' : ''}`}
      >
        <img src="/pansion/main.jpg" alt="" />

        <div className="landing_page_container">
          <h2>{t('landing_page.pansion.title')}</h2>
          <p className="landing_page_p">{t('landing_page.pansion.text')}</p>

          <a href="/pansion" className="landing_page_buttons">
            <button className="landing_page_button">{t('landing_page.pansion.button')}</button>
          </a>
        </div>
      </div>

      <div
        ref={campRef}
        id="reverse"
        className={`landing_page_part ${campVisible ? 'is_visible' : ''}`}
      >
        <div className="landing_page_container">
          <h2>{t('landing_page.camp.title')}</h2>
          <p className="landing_page_p">{t('landing_page.camp.text')}</p>

          <a href="/camp" className="landing_page_buttons">
            <button className="landing_page_button">{t('landing_page.camp.button')}</button>
          </a>
        </div>

        <img src="./camp/main.jpg" alt="" />
      </div>

      <div
        ref={discoverRef}
        className={`landing_page_part ${discoverVisible ? 'is_visible' : ''}`}
      >
        <img src="./discover_page/tisno.jpg" alt="" />

        <div className="landing_page_container">
          <h2>{t('landing_page.discover.title')}</h2>
          <p className="landing_page_p">{t('landing_page.discover.text')}</p>

          <a href="/discover" className="landing_page_buttons">
            <button className="landing_page_button">{t('landing_page.discover.button')}</button>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Landing_page