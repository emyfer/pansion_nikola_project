import React, { useState, useEffect, useRef } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa"
import { useLocation } from 'react-router-dom'

const noHeroPages = ['/apartments'];


const languages = [
  { code: 'hr', label: 'HR' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'it', label: 'IT' },
];

const Header = () => {
    const location = useLocation();
    const forceScrolled = noHeroPages.includes(location.pathname);
    const { t, i18n } = useTranslation();
    const [showLangMenu, setShowLangMenu] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const langMenuRef = useRef(null);

    const handleSelectLang = (code) => {
        i18n.changeLanguage(code);
        setShowLangMenu(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target)) {
        setShowLangMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`header ${(isScrolled || forceScrolled) ? 'header_scrolled' : ''}`}>        <Link to="/" className="header_logo">
            <h1 className="header_title">
                {t('header.title')} <span className="accent_text">Nikola</span>
            </h1>
        </Link>

        <div className="header_nav">
            <Link to="/pansion" className="header_nav_link">{t('header.nav.pansion')}</Link>
            <Link to="/camp" className="header_nav_link">{t('header.nav.camp')}</Link>
            <Link to="/discover_tisno" className="header_nav_link">{t('header.nav.discoverTisno')}</Link>

            <div className="header_nav_language" ref={langMenuRef}>
                <FaGlobe
                    className="header_nav_language_icon"
                    onClick={() => setShowLangMenu(!showLangMenu)}
                />
                {showLangMenu && (
                    <ul className="header_nav_language_dropdown">
                        {languages.map((lang) => (
                            <li
                                key={lang.code}
                                className={`header_nav_language_option ${i18n.language === lang.code ? 'active' : ''}`}
                                onClick={() => handleSelectLang(lang.code)}
                            >
                                {lang.label}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>

        <button
            className="header_hamburger"
            onClick={() => {
                setShowMobileMenu(!showMobileMenu);
                setIsScrolled(true);
            }}
            aria-label="Menu"
        >
            {showMobileMenu ? <FaTimes /> : <FaBars />}
        </button>

        {showMobileMenu && (
            <div className="header_mobile_menu">
                <Link to="/pansion" className="header_mobile_link" onClick={() => setShowMobileMenu(false)}>
                    {t('header.nav.pansion')}
                </Link>
                <Link to="/camp" className="header_mobile_link" onClick={() => setShowMobileMenu(false)}>
                    {t('header.nav.camp')}
                </Link>
                <Link to="/discover_tisno" className="header_mobile_link" onClick={() => setShowMobileMenu(false)}>
                    {t('header.nav.discoverTisno')}
                </Link>
                <Link to="/dryMarina" className="header_mobile_link" onClick={() => setShowMobileMenu(false)}>
                    {t('header.nav.dryMarina')}
                </Link>

                <div className="header_mobile_languages">
                    {languages.map((lang) => (
                        <span
                            key={lang.code}
                            className={`header_mobile_language_option ${i18n.language === lang.code ? 'active' : ''}`}
                            onClick={() => handleSelectLang(lang.code)}
                        >
                            {lang.label}
                        </span>
                    ))}
                </div>
            </div>
        )}
    </nav>
  )
}

export default Header