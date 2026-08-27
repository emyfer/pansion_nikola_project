import React from 'react'
import './pansion.css'
import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { FaWater, FaBreadSlice, FaBed, FaAnchor, FaBicycle } from "react-icons/fa";

const Pansion = () => {

  const { t } = useTranslation();

  const trackRef = useRef(null);

  const handleWheel = (e) => {
    if (trackRef.current) {
      e.preventDefault();
      trackRef.current.scrollBy({
        left: e.deltaY,
        behavior: 'auto' 
      });
    }
  };

  const [gridRef, gridVisible] = useScrollAnimation();
  const [apartmentsRef, apartmentsVisible] = useScrollAnimation();
  const [contactRef, contactVisible] = useScrollAnimation();

  return (
    <div className="pansion">
      <img src="./pansion/pansion.webp" style={{ width: '100%', height: '100%', objectFit: 'cover', margin: 0 }} alt="" />
      <h2 className="pansion_text">{t('pansion_page.text')}</h2>
      <div className="pansion_photo_slider_track" ref={trackRef} onWheel={handleWheel}>
        <img src="/landing_page/camp.jpg" alt="" />
        <img src="/landing_page/discover.jpg" alt="" />
        <img src="/landing_page/pansion.jpg" alt="" />  
        <img src="slika.png" alt="" />  
      </div>


      <div className={`pansion_grid ${gridVisible ? 'is_visible' : ''}`} ref={gridRef}>

        <img src="/slika.png" className="pansion_grid_bg" alt="" />

        <div className="pansion_grid_card_white">
          <span className="camp_grid_card_icon"><FaWater/></span>
          <div className='pansion_grid_card_text'>
            <h3>{t('pansion_page.grid.title1')}</h3>
            <p>{t('pansion_page.grid.text1')}</p>
          </div>
        </div>

        <div className="pansion_grid_card_blue">
          <span className="camp_grid_card_icon"><FaBed /></span>
          <div className='pansion_grid_card_text'>
            <h3>{t('pansion_page.grid.title2')}</h3>
            <p>{t('pansion_page.grid.text2')}</p>
          </div>
        </div>

        <div className="pansion_grid_card"></div>
        <div className="pansion_grid_card_white">
          <span className="camp_grid_card_icon"><FaBreadSlice /></span>
          <div className='pansion_grid_card_text'>
            <h3>{t('pansion_page.grid.title3')}</h3>
            <p>{t('pansion_page.grid.text3')}</p>
          </div>
        </div>

        <div className="pansion_grid_card"></div>
        <div className="pansion_grid_card_white">
          <span className="camp_grid_card_icon"><FaBicycle /></span>
          <div className='pansion_grid_card_text'>
            <h3>{t('pansion_page.grid.title6')}</h3>
            <p>{t('pansion_page.grid.text6')}</p>
          </div>
        </div>

        <div className="pansion_grid_card_blue">
          <span className="camp_grid_card_icon"><FaAnchor /></span>
          <div className='pansion_grid_card_text'>
            <h3>{t('pansion_page.grid.title5')}</h3>
            <p>{t('pansion_page.grid.text5')}</p>
          </div>
        </div>

        <div className="pansion_grid_card"></div>
      </div>

      <div className={`pansion_apartments ${apartmentsVisible ? 'is_visible' : ''}`} ref={apartmentsRef}>
        <div style={{ width: '100%', height: '200px' }}></div>
        <div className='pansion_apartments_button'>
          <a href="/apartments">
            <button>{t('pansion_page.see_apartments')}</button>
          </a>
        </div>
      </div>

      <div className={`pansion_contact ${contactVisible ? 'is_visible' : ''}`} ref={contactRef}>
        <h2 className="pansion_contact_title">{t('pansion_page.info')}</h2>
        <div className="pansion_contact_flex">
          <div className="pansion_contact_information">
            <p>email@example.com</p>
            <p>{t('pansion_page.phone')} +385 (0)22 438 239</p>
            <p>{t('pansion_page.address')}: Put Jazine 192, 22 240 Tisno, Hrvatska</p>
            <p>{t('pansion_page.mobile')}: +385 (0)98 739 260, {t('pansion_page.mobile_alt')}: +385 (0)98 199 29 13</p>

            <a href="https://www.tisno.in/pansionnikola" target="_blank" rel="noopener noreferrer">
              <p>tisno.in/pansionnikola</p>
            </a>
          </div>

          <div className="pansion_contact_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.468562095595!2d15.633746999999998!3d43.80446979999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1334d053e705c971%3A0x2167c17f48f2b0ea!2sPansion%20Nikola!5e1!3m2!1shr!2shr!4v1785772566530!5m2!1shr!2shr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokacija pansiona"
            ></iframe>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Pansion;