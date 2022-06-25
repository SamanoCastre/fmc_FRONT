import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => { 
  const [currentImage, setCurrentImage] = useState(null);
  const [imagesList, setImagesList] = useState(null);
  const[timeoutStatus, setTimeoutStatus] = useState(true);

  useEffect(() => {
       const images = [
        {
          'index': 0,
          'src':'images/carousel/banner01.jpg',
          'title':'Relais France-Europe FMC d\'Haïti',
          'description':'Soins dentaires pour le plus grand nombre'
         },
         {
          'index':1,
          'src':'images/carousel/banner02.jpg',
          'title':'Relais France-Europe FMC d\'Haïti',
          'description':'Soins dentaires pour le plus grand nombre'
         },
         {
          'index':2,
          'src':'images/carousel/banner03.jpg',
          'title':'Relais France-Europe FMC d\'Haïti',
          'description':'Soins dentaires pour le plus grand nombre'
         }
       ];
       setCurrentImage(images[0]);
       setImagesList(images);

  }, []);

  const timer = setTimeout(() => {
    if(timeoutStatus === false) {
      clearTimeout(timer);
    }
    else{
      if(currentImage != null) {
        let index = currentImage.index + 1;
        if(index >= imagesList.length) {
          index = 0;
        }
        setCurrentImage(imagesList[index]);
      }
    }

  },5000);

  const handleClick = (indice) => {
      setTimeoutStatus(false);
      let index = currentImage.index + indice;
      if(index < 0) {
        index = imagesList.length -1;
      }
      else if(index >= imagesList.length) {
        index = 0;
      }
      console.log(imagesList[index]);
      setCurrentImage(imagesList[index]);
  };

  
  return(
    <div className="Carousel">
        {currentImage &&
         <>
            <div className="direction previous" onClick={()=>handleClick(-1)}><i className="fa fa-chevron-left"></i></div>
            <div className="direction next" onClick={()=>handleClick(+1)}><i className="fa fa-chevron-right"></i></div>

            <div className="image-text">
                <div className="image-title">{currentImage.title}</div>

                <div className="image-dots">
                     {imagesList.map((image, index) => <i key={index} className= {index === currentImage.index ? "active fa fa-circle" : "fa fa-circle"}></i>)}
                </div>

                <div className="image-description">"{currentImage.description}"</div>
            </div>
            { imagesList.map((image, i) => <img key={i} className={ i === currentImage.index ? "active" : ""} src={image.src} alt={i + " et "+currentImage.index}/>) }
            </>
        }
    </div>
  );
}

export default Carousel;
