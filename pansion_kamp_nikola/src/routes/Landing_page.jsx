import React from 'react'
import './Landing_page.css'
import { useTranslation } from 'react-i18next'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useParallax } from '../hooks/useParallax'
import { Link } from 'react-router-dom'



const Landing_page = () => {
  const { t } = useTranslation();

  const [pansionRef, pansionVisible] = useScrollAnimation();
  const [campRef, campVisible] = useScrollAnimation();
  const [discoverRef, discoverVisible] = useScrollAnimation();
  const [reviewsRef, reviewsVisible] = useScrollAnimation();


  const [heroRef, heroOffset] = useParallax(0.5);

  const reviews = [
  { id: 'review1', rating: 5 },
  { id: 'review2', rating: 5 },
  { id: 'review3',rating: 5 },
];


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

          <Link to="/pansion" className="landing_page_buttons">
            <button className="landing_page_button">{t('landing_page.pansion.button')}</button>
        </Link>
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


          <Link to="/camp" className="landing_page_buttons">
              <button className="landing_page_button">{t('landing_page.camp.button')}</button>
          </Link>
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
          <Link to="/discover_Tisno" className="landing_page_buttons">
            <button className="landing_page_button">{t('landing_page.discover.button')}</button>
          </Link>

        </div>
      </div>

      <div className={`reviews_section ${reviewsVisible ? 'is_visible' : ''}`} ref={reviewsRef}>
          <h2 className="reviews_title">{t('landing_page.reviews.title')}</h2>
          <div className="reviews_grid">
              {reviews.map((review, index) => (
                  <div
                      key={review.id}
                      className={`review_card ${index % 2 === 1 ? 'review_card_white' : 'review_card_blue'}`}
                  >
                      <div className="review_stars">{'★'.repeat(review.rating)}</div>
                      <p className="review_text">{t(`landing_page.reviews.items.${review.id}`)}</p>
                  </div>
              ))}
          </div>
      </div>

    </div>
  )
}

export default Landing_page