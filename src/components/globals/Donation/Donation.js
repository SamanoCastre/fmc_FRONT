import React from 'react';
import './Donation.css';

const Donation = () => (
  <section className="Donation" id="donation">
          <div className="space"></div>
          <div className="login-header title">Faire un don</div>
          <div className="header-line"></div>
          <div className="donation-body">
            <div className="donation-reason">
              <h2>Pourquoi nous soutenir?</h2>
              <div>
                <p>
                Les ressources de la clinique dentaire - Fondation Max Cadet d'Haïti sont principalement issues des dons (matériels et financiers) 
                et parrainages reçus. Nous obtenons aussi parfois des subventions régionales pour des actions ciblées tel que les préventions bucco dentaires.
                </p>
                <p>C'est pourquoi vos dons et parrainages sont utiles car ils nous permettent de soigner les démunis en demande de soins dentaires d'urgence 
                qui viennent à la clinique dentaire - Fondation Max Cadet d'Haïti  chaque jour suite à un accident, 
                une infection, un soin dentaire de base ou autres et qui n'ont aucun moyen pour payer. 
                </p>       
              </div>
            </div>
            <iframe id="haWidget" allowtransparency="true" scrolling="auto" src="https://www.helloasso.com/associations/relais-france-europe-fondation-max-cadet-d-haiti/formulaires/2/widget"></iframe>
            <div className="donation-data">
              <h2>Gestion de vos coordonnées</h2>
              <div>
                  En nous laissant votre adresse mail, vous pourrez être tenu informé de la vie de notre association.
                  Vous recevrez aussi  des nouvelles de la clinique.
                  Vous saurez ainsi à quoi servent vos dons et parrainage.
                  A tout moment, vous pourrez décider de ne plus recevoir nos informations en nous en faisant part.        
              </div>
            </div>
          </div>
    </section>
);


export default Donation;
