import React,{ useState, useEffect} from 'react';
import './Visitors.css';
import LineChart from './LineChart/LineChart';
import VisitorService from '../../services/VisitorService';

const chartItems = ["visitors-activities","visitors-news","visitors-projects","visitors-posts"];

const Visitors = () => {
    const [data,setData] = useState(null);
    const [activeItem, setActiveItem] = useState(chartItems);
  

    useEffect(() => {
      const service = new VisitorService();
      let data = service.list();
      let dataSetsFiltered = [];

      if(activeItem.length>0) {
        data.datasets.forEach((item) => {
            if(activeItem.includes(item.id)) {
               dataSetsFiltered.push(item);
            }
        });
      }
      data.datasets = dataSetsFiltered;
      setData(data);
    },[activeItem]);

    const handleClick = (e) => {
      let element = e.target.tagName.toLowerCase() === "li" ? e.target : e.target.parentNode;
      activeItem.includes(element.classList[0]) ? 
      activeItem.splice(activeItem.indexOf(element.classList[0]),1) : 
      activeItem.push(element.classList[0]);
      setActiveItem(activeItem.concat([]));   
    }
    
    return (
      <div className="Visitors">
          {data && <LineChart dataArr={data} />}
          <ul className="visitors-toggle">
            <li className="visitors-activities" onClick={(e)=>handleClick(e)}>
              <i className={activeItem.includes("visitors-activities") === true ? "fa fa-check-square-o" : "fa fa-square-o"}></i>
              <div className="visitors-text">Activités de la clinique</div>
            </li>
            <li className="visitors-news" onClick={(e)=>handleClick(e)}>
              <i className={activeItem.includes("visitors-news") ? "fa fa-check-square-o" : "fa fa-square-o"}></i>
              <div className="visitors-text">Actualités de la clinique</div>
            </li>
            <li className="visitors-posts" onClick={(e)=>handleClick(e)}>
              <i className={activeItem.includes("visitors-posts") ? "fa fa-check-square-o" : "fa fa-square-o"}></i> 
              <div className="visitors-text">Nos publications</div>
            </li>
            <li className="visitors-projects"  onClick={(e)=>handleClick(e)}>
              <i className={activeItem.includes("visitors-projects") ? "fa fa-check-square-o" : "fa fa-square-o"}></i> 
              <div className="visitors-text">Nos projets</div>
            </li>
          </ul>
      </div>
    );
  }


export default Visitors;
