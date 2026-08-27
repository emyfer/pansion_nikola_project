import React, { useState } from 'react'
import './apartments.css'
import { useTranslation } from 'react-i18next'

const rooms = [
  {
    id: 'balcony',
    key: 'roomWithBalcony',
    images: [
        './rooms/with_balcony/image1.webp',
        './rooms/with_balcony/image2.webp',
        './rooms/with_balcony/image3.webp',
        './rooms/with_balcony/image4.webp',
        './rooms/with_balcony/image5.webp',
        './rooms/with_balcony/image6.webp',


    ],
  },
  {
    id: 'noBalcony',
    key: 'roomWithoutBalcony',
    images: [
      './rooms/without_balcony/image1.webp',
      './rooms/without_balcony/image6.webp',
      './rooms/without_balcony/image3.webp',
      './rooms/without_balcony/image4.webp',
      './rooms/without_balcony/image5.webp',
    ],
  },
];

const apartments = [
  {
    id: 'app1',
    key: 'app1',
    images: [
      './rooms/app1/image1.webp',
      './rooms/app1/image2.webp',
      './rooms/app1/image3.webp',
      './rooms/app1/image4.webp',
      './rooms/app1/image5.webp',
      './rooms/app1/image6.webp',
      './rooms/app1/image7.webp'
    ],
  },
  {
    id: 'app2',
    key: 'app2',
    images: [
      './rooms/app2/image1.webp',
      './rooms/app2/image2.webp',
      './rooms/app2/image3.webp',
      './rooms/app2/image4.webp',
      './rooms/app2/image5.webp',
    ],
  },
  {
    id: 'app3',
    key: 'app3',
    images: [
      '/apartments/app3/photo_1.jpg',
      '/apartments/app3/photo_2.jpg',
      '/apartments/app3/photo_3.jpg',
      '/apartments/app3/photo_4.jpg',
    ],
  },
  {
    id: 'app4',
    key: 'app4',
    images: [
      '/apartments/app4/photo_1.jpg',
    ],
  },
];

const AccordionSection = ({ title, items, namespace, openId, onToggle, t }) => (
  <div className="apartments_accordion">
    {items.map((item) => (
      <div key={item.id} className="apartments_accordion_item">
        <button
          className="apartments_accordion_header"
          onClick={() => onToggle(item.id)}
        >
          <span>{t(`apartments_page.${namespace}.${item.key}.title`)}</span>
          <span className={`apartments_accordion_arrow ${openId === item.id ? 'open' : ''}`}>
            ⌄
          </span>
        </button>

        {openId === item.id && (
          <div className="apartments_accordion_content">
            <div className="apartments_photo_row">
              {item.images.map((src, index) => (
                <img key={index} src={src} alt="" />
              ))}
            </div>

            <h4 className="apartments_amenities_title">{t('apartments_page.amenities')}</h4>
            <ul className="apartments_amenities_list">
              {t(`apartments_page.${namespace}.${item.key}.amenities`, { returnObjects: true }).map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ))}
  </div>
);

const Apartments = () => {
  const { t } = useTranslation();
  const [openRoom, setOpenRoom] = useState(null);
  const [openApartment, setOpenApartment] = useState(null);

  const toggleRoom = (id) => setOpenRoom(openRoom === id ? null : id);
  const toggleApartment = (id) => setOpenApartment(openApartment === id ? null : id);

  return (
    <div className="apartments_page">

      <h2 className="apartments_section_title">{t('apartments_page.rooms_title')}</h2>
      <AccordionSection
        items={rooms}
        namespace="rooms"
        openId={openRoom}
        onToggle={toggleRoom}
        t={t}
      />

      <h2 className="apartments_section_title apartments_section_title_spaced">
        {t('apartments_page.apartments_title')}
      </h2>
      <AccordionSection
        items={apartments}
        namespace="apartments"
        openId={openApartment}
        onToggle={toggleApartment}
        t={t}
      />

    </div>
  )
}

export default Apartments