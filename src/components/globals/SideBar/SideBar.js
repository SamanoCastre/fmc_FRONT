import React from 'react';
import './SideBar.css';

const SideBar = (props) => {
  
    return (
      <div className="SideBar">
          <h1><i className="fa fa-home"> Tableau de bord</i></h1>
          <ul>
            <li className={props.item === 'visitors' ? 'active' :''}>Statistique visiteurs</li>
            <li>Coordonnées et réseaux</li>
            <li>Menu principal</li>
            <li>Carousel de présentation</li>
            <li>
              Notre organisation
              <ul>
                <li>Relais France-Europe</li>
                <li>Notre équipe en France</li>
                <li>Fondation MAX CADET D'HAITI</li>
                <li>Activités de la clinique</li>
                <li>The MAX & THERESE CADET DENTAL FUND, INC. AUX USA</li>
              </ul>
            </li>
            <li>Faire un don</li>
            <li>Nos partenaires</li>
            <li>Nos publications</li>
            <li>Nous contacter</li>
            <li>Actualités de la clinique</li>
            <li>Action de l'association en France (projets)</li>
            <li>Authentification</li>
          </ul>
      </div>
    )
  }

export default SideBar;
