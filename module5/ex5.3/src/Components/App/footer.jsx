import React, { useContext } from 'react';
import '../../Footer.css';
import '../../index.css';
import { Context as ThemeContext } from '../../Context/themeCountext';

const Footer = () => {
  const { setDarkTheme, setLightTheme, toggleTheme, isDarkTheme } = useContext(ThemeContext);

  return (
    <footer>
      <div className="footer-content">
        {/* ... Contenu du footer ... */}
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Nom de votre entreprise. Tous droits réservés.</p>
      </div>
      <div>
        <p>Current Theme: {isDarkTheme ? 'Dark' : 'Light'}</p>
        <button onClick={setDarkTheme}>Set Dark Theme</button>
        <button onClick={setLightTheme}>Set Light Theme</button>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </footer>
  );
};

export default Footer;
