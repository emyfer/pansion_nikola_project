import React, { useState, useEffect, useRef } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer = () => {

      const { t, i18n } = useTranslation();

  return (
    <footer className="footer">
        <div className="footer_content">
            <div className="footer_links">
                <Link to="/pansion" className="footer_link">{t('header.nav.pansion')}</Link>
                <Link to="/camp" className="footer_link">{t('header.nav.camp')}</Link>
                <Link to="/discover_Tisno" className="footer_link">{t('header.nav.discoverTisno')}</Link>
            </div>

            <div className="footer_contact">
                <p className="footer_text">Email: nikolapansion@gmail.com</p>
                <p className="footer_text">{t('footer.phone')}: +385 (0)22 438 239</p>
            </div>
        </div>
        <div className="footer_copyright">
            <p className="footer_text">© 2026 {t('footer.copyright')}</p>
        </div>
    </footer>
  )
}

export default Footer