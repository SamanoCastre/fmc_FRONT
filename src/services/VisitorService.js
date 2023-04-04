import Service from './Service';

export default class VisitorService extends Service {

    list = () => {
        
        const dataArr = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
              {
                id:"visitors-activities",
                label: "Activités de la clinique",
                data: [0, 20, 25, 41, 54, 65,79,75,85,86,90,100],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
              },
              {
                label: "Actualités de la clinique",
                id:"visitors-news",
                data: [33, 45, 46, 51, 54, 65,70,75,85,70,80,90],
                fill: true,
                backgroundColor: "rgba(116,39,116,0.2)",
                borderColor: "#742774"
                
              },
              {
                label: "Nos publications",
                id:"visitors-posts",
                data: [13, 18, 25, 35, 40, 40,38,45,56,50,55,60],
                fill: true,
                backgroundColor: "rgba(232,151,100,0.2)",
                borderColor: "#e3722e"
              }
              ,
              {
                label: "Nos projets",
                id:"visitors-projects",
                data: [0, 5, 20, 30, 36, 45,40,50,56,50,60,70],
                fill: true,
                backgroundColor: "rgba(232,151,100,0.2)",
                borderColor: "blue"
              }
            ]
          };
          return dataArr;
    }
}


