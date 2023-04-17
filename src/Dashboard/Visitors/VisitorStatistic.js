/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
import Alert from "../../Common/Alert/Alert";
import Loading from "../../Common/Loading/Loading";
import "./VisitorStatistic.css";
import {VisitorService} from "../../services/VisitorService";
import VisitorChart from "../Charts/VisitorChart/VisitorChart";
import {useSelector} from "react-redux";
import {FmcValuesService} from "../../services/FmcValuesService";

const visitorService = VisitorService.newInstance();
const VisitorStatistic = () => {
  const fmcValues = useSelector(state => state.fmc_value_state.fmcValues);

  const [data, setData] = useState([]);
  const [activeItems, setActiveItems] = useState(null);
  const [activePeriod, setActivePeriod] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [result, setResult] = useState(null);

  useEffect(() => {
    visitorService.data = {
      setData: setData,
      setActiveItems: setActiveItems,
      setLoading: setLoading,
      setResult: setResult,
      setActivePeriod : setActivePeriod
    };
    visitorService.init(fmcValues, activeItems, activePeriod);
  }, [activeItems, fmcValues]);

  return (
    <div className="VisitorStatistic">
      <h1>{FmcValuesService.getByKey(fmcValues, "statistic-title-key")}</h1>
      {result && <Alert result={result} />}
      {!isLoading && data && activeItems && (
        <div className="wrapper">
          {data && data.length > 0 && (
            <>
              <ul className="visitors-period-toggle">
                <li
                  className="visitors-home"
                  onClick={e =>
                    visitorService.togglePeriod("today")
                  }
                >
                  <i
                    className={
                      activePeriod === "today"
                        ? "fa fa-check-square-o"
                        : "fa fa-square-o"
                    }
                  ></i>
                  <div className="visitors-text">
                    {FmcValuesService.getByKey(fmcValues, "today-period-key")}
                  </div>
                </li>
                <li
                  className="visitors-activities"
                  onClick={e => visitorService.togglePeriod("week")}
                >
                  <i
                    className={
                      activePeriod === "week"
                        ? "fa fa-check-square-o"
                        : "fa fa-square-o"
                    }
                  ></i>
                  <div className="visitors-text">
                    {FmcValuesService.getByKey(fmcValues, "week-period-key")}
                  </div>
                </li>
                <li
                  className="visitors-news"
                  onClick={e =>
                    visitorService.togglePeriod("month")
                  }
                >
                  <i
                    className={
                      activePeriod === "month"
                        ? "fa fa-check-square-o"
                        : "fa fa-square-o"
                    }
                  ></i>
                  <div className="visitors-text">
                    {FmcValuesService.getByKey(fmcValues, "month-period-key")}
                  </div>
                </li>
                <li
                  className="visitors-posts"
                  onClick={e => visitorService.togglePeriod("year")}
                >
                  <i
                    className={
                      activePeriod === "year"
                        ? "fa fa-check-square-o"
                        : "fa fa-square-o"
                    }
                  ></i>
                  <div className="visitors-text">
                    {FmcValuesService.getByKey(fmcValues, "year-period-key")}
                  </div>
                </li>
              </ul>
              <VisitorChart dataArr={data} activeItems={activeItems} />
              <ul className="visitors-content-toggle">
                <li
                  className="visitors-home"
                  onClick={e => visitorService.toggleGraph("home", activeItems)}
                >
                  <i
                    className={
                      VisitorService.isActive("home", activeItems)
                        ? "fa fa-check-square-o"
                        : "fa fa-square-o"
                    }
                  ></i>
                  <div className="visitors-text">
                    {FmcValuesService.getByKey(fmcValues, "home-page-key")}
                  </div>
                </li>
                <li
                  className="visitors-activities"
                  onClick={e =>
                    visitorService.toggleGraph("activity", activeItems)
                  }
                >
                  <i
                    className={
                      VisitorService.isActive("activity", activeItems)
                        ? "fa fa-check-square-o"
                        : "fa fa-square-o"
                    }
                  ></i>
                  <div className="visitors-text">
                    {FmcValuesService.getByKey(
                      fmcValues,
                      "activity-clinique-key"
                    )}
                  </div>
                </li>
                <li
                  className="visitors-news"
                  onClick={e => visitorService.toggleGraph("news", activeItems)}
                >
                  <i
                    className={
                      VisitorService.isActive("news", activeItems)
                        ? "fa fa-check-square-o"
                        : "fa fa-square-o"
                    }
                  ></i>
                  <div className="visitors-text">
                    {FmcValuesService.getByKey(fmcValues, "news-clinique-key")}
                  </div>
                </li>
                <li
                  className="visitors-posts"
                  onClick={e => visitorService.toggleGraph("post", activeItems)}
                >
                  <i
                    className={
                      VisitorService.isActive("post", activeItems)
                        ? "fa fa-check-square-o"
                        : "fa fa-square-o"
                    }
                  ></i>
                  <div className="visitors-text">
                    {FmcValuesService.getByKey(fmcValues, "our-post-key")}
                  </div>
                </li>
                <li
                  className="visitors-projects"
                  onClick={e =>
                    visitorService.toggleGraph("project", activeItems)
                  }
                >
                  <i
                    className={
                      VisitorService.isActive("project", activeItems)
                        ? "fa fa-check-square-o"
                        : "fa fa-square-o"
                    }
                  ></i>
                  <div className="visitors-text">
                    {FmcValuesService.getByKey(fmcValues, "our-project-key")}
                  </div>
                </li>
                <li
                  className="visitors-donations"
                  onClick={e =>
                    visitorService.toggleGraph("donation", activeItems)
                  }
                >
                  <i
                    className={
                      VisitorService.isActive("donation", activeItems)
                        ? "fa fa-check-square-o"
                        : "fa fa-square-o"
                    }
                  ></i>
                  <div className="visitors-text">
                    {" "}
                    {FmcValuesService.getByKey(fmcValues, "donate-key")}
                  </div>
                </li>
              </ul>
            </>
          )}
        </div>
      )}
      {isLoading && <Loading text="Chargement en cours..." />}
    </div>
  );
};

export default VisitorStatistic;
