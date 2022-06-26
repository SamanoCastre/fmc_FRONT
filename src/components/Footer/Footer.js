import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="Footer">
     <div className="copyright">Copyright @ FMC</div>
     <a className="mentions" href="/">Les mentions légales </a>
     <a className="gosommet" href="#home">
      <i className="fa fa-chevron-up"></i>
      <div className="sommet-text">Retour au sommet</div>
     </a>
  </footer>
);
export default Footer;
