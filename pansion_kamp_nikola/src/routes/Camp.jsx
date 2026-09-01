import React, { useState } from 'react'
import './camp.css'
import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { FaUmbrellaBeach, FaShower, FaBolt, FaPaw, FaHeart, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useParallax } from '../hooks/useParallax'



const galleryImages = [
  './camp/image1.jpg', './camp/image2.jpg', './camp/image3.jpg', './camp/image4.jpg',
  './camp/image5.jpg', './camp/image6.jpg', './camp/image7.jpg', './camp/image8.jpg',
  './camp/image9.jpg', './camp/image10.jpg', './camp/image11.jpg', './camp/image12.jpg',
  './camp/image13.jpg', './camp/main.jpg', './camp/image15.jpg', './camp/image14.jpg',
];

const Camp = () => {

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
  const [contactRef, contactVisible] = useScrollAnimation();
  const [galleryRef, galleryVisible] = useScrollAnimation();

  const [heroRef, heroOffset] = useParallax(0.5);

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const showNext = () => {
    setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="camp">
      <div className="camp_hero_wrapper" ref={heroRef}>
        <img
          src="./camp/main.jpg"
          className="camp_hero_image"
          style={{ transform: `translateY(${heroOffset}px)` }}
          alt=""
        />
      </div>
      <h2 className="camp_text">- {t('camp_page.text')} -</h2>

      <div className={`camp_grid ${gridVisible ? 'is_visible' : ''}`} ref={gridRef}>

        <img src="/slika.png" className="camp_grid_bg" alt="" />

        <div className="camp_grid_card_white">
          <span className="camp_grid_card_icon"><FaUmbrellaBeach /></span>
          <div className='camp_grid_card_text'>
            <h3>{t('camp_page.grid.title1')}</h3>
            <p>{t('camp_page.grid.text1')}</p>
          </div>
        </div>

        <div className="camp_grid_card_blue">
          <span className="camp_grid_card_icon"><FaShower /></span>
          <div className='camp_grid_card_text'>
            <h3>{t('camp_page.grid.title2')}</h3>
            <p>{t('camp_page.grid.text2')}</p>
          </div>
        </div>

        <div className="camp_grid_card" id='hidden'></div>
        <div className="camp_grid_card_white">
          <span className="camp_grid_card_icon"><FaBolt /></span>
          <div className='camp_grid_card_text'>
            <h3>{t('camp_page.grid.title4')}</h3>
            <p>{t('camp_page.grid.text4')}</p>
          </div>
        </div>

        <div className="camp_grid_card" id='hidden'></div>
        <div className="camp_grid_card_white">
          <span className="camp_grid_card_icon"><FaPaw /></span>
          <div className='camp_grid_card_text'>
            <h3>{t('camp_page.grid.title5')}</h3>
            <p>{t('camp_page.grid.text5')}</p>
          </div>
        </div>

        <div className="camp_grid_card_blue">
          <span className="camp_grid_card_icon"><FaHeart /></span>
          <div className='camp_grid_card_text'>
            <h3>{t('camp_page.grid.title6')}</h3>
            <p>{t('camp_page.grid.text6')}</p>
          </div>
        </div>

        <div className="camp_grid_card" id='hidden'></div>
      </div>

      <div className={`camp_contact ${contactVisible ? 'is_visible' : ''}`} ref={contactRef}>
        <h2 className="camp_contact_title">{t('pansion_page.info')}</h2>
        <div className="camp_contact_flex">
          <div className="camp_contact_information">
            <p>{t('camp_page.email')} nikolapansion@gmail.com</p>
            <p>{t('camp_page.phone')} +385 (0)22 438 239</p>
            <p>{t('camp_page.address')} Put Jazine 332, 22 240 Tisno, Hrvatska</p>
            <p>{t('camp_page.mobile')} +385 (0)98 739 260</p>

            <a href="https://www.tisno.in/pansionnikola" target="_blank" rel="noopener noreferrer">
              <p>tisno.in/pansionnikola</p>
            </a>
          </div>

          <div className="camp_contact_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11694.94822129241!2d15.609894554294025!3d43.81941026742962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1334d17ca072fcd9%3A0x699e4d92ad18bda1!2sAuto%20Kamp%20Nikola!5e1!3m2!1shr!2shr!4v1787835863277!5m2!1shr!2shr" 
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t('camp_page.map_title')}
            ></iframe>
          </div>
        </div>
        
      </div>

      <div className={`camp_gallery ${galleryVisible ? 'is_visible' : ''}`} ref={galleryRef}>
        <h2 className="camp_gallery_title">{t('camp_page.gallery')}</h2>
        <div className="camp_gallery_grid">
          {galleryImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt=""
              onClick={() => openLightbox(index)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox_overlay" onClick={closeLightbox}>
          <button className="lightbox_close" onClick={closeLightbox}>
            <FaTimes />
          </button>

          <button
            className="lightbox_arrow lightbox_arrow_left"
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
          >
            <FaChevronLeft />
          </button>

          <img
            src={galleryImages[lightboxIndex]}
            alt=""
            className="lightbox_image"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox_arrow lightbox_arrow_right"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
          >
            <FaChevronRight />
          </button>
        </div>
      )}

    </div>
  )
}

export default Camp;