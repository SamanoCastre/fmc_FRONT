import React from 'react';
import './Footer.css';
import { EContentTypes } from '../../Utils/Enums';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="copyright">Copyright @ FMC</div>
      <Link className="mentions" to={"/contents/" + EContentTypes.Mention}>Les mentions légales </Link>
      <a className="gosommet" href="#home">Retour au sommet</a>
    </footer>
  );
  }
export default Footer;
