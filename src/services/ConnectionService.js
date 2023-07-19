import {HttpService} from "./HttpService";
import {EAlertTypes} from "../Utils/Enums";
import {setOnlineUser, setPage, resetContacts, resetCommons} from "../redux/reducer";

const DELAY = 58 * 60 * 1000; //19mn
const LOGIN_ENDPOINT_CONNECTION = "right-anm/login";
const TOKEN_ENDPOINT_CONNECTION = "token";
const ADM_LOGOUT_ENDPOINT_CONNECTION = "right-adm/logout";
const USER_LOGOUT_ENDPOINT_CONNECTION = "right-usr/logout";

export class ConnectionService {
  data = {};

  setIntervalRefreshToken = () => {
    setInterval(async () => {
      this.generateToken();
    }, DELAY);
  };
  static newInstance() {
    return new ConnectionService();
  }
  generateToken = async () => {
    
    return new Promise((resolve, reject) => {
      HttpService.read(TOKEN_ENDPOINT_CONNECTION).then(response => {
        if(response.ok) {
          ConnectionService.setTokenToLocalStorage(response.data.token);
          this.data.dispatch(setOnlineUser(response.data.createBy));
          resolve()
        }
        else {
          console.error("Echec lors de la récupération du token");
          if(ConnectionService.getTokenFromLocalStorage() != null) {
            ConnectionService.clearLocalStorage();
            return this.generateToken();
          }
          reject();
        }
      });
    });
  };

  logIn = async formValues => {
    this.data.setResult(null);
    HttpService.create(
      JSON.stringify(formValues),
      LOGIN_ENDPOINT_CONNECTION,
      "JSON",
      true
    ).then(response => {
      this.data.setLoading(false);
      if (response.ok) {
        ConnectionService.setTokenToLocalStorage(response.data.token);
        this.data.setResult({
          type: EAlertTypes.SUCCESS,
          message: "Authentification réussie",
        });
        this.data.dispatch(setOnlineUser(response.data.createBy));
        setTimeout(() => {
          this.data.navigate("/dashboard");
        }, 500);
      } else {
        this.data.setResult({
          type: EAlertTypes.ERROR,
          message:
            "Vos identifiants sont incorrects. Merci de corriger, puis réessayer.",
        });
      }
    });
  };

  logOut = async userId => {
    HttpService.delete(
      userId ? ADM_LOGOUT_ENDPOINT_CONNECTION : USER_LOGOUT_ENDPOINT_CONNECTION,
      true
    ).then(response => {
      this.data.dispatch(resetContacts());
      this.data.dispatch(resetCommons());
      if (response.ok) {
        ConnectionService.setTokenToLocalStorage(response.data.token);
        this.data.dispatch(setOnlineUser(response.data.createBy));
      }
      this.data.navigate("/");
    });
  };

  dashboardGate = () => {
    if (ConnectionService.getTokenFromLocalStorage()) {
      this.data.dispatch(setPage("dashboard"));
    } else {
        this.generateToken();
        this.data.navigate("/");
    }
  };

  static getTokenFromLocalStorage = () => {
    let token = null;
    try {
      let fmcToken = localStorage.getItem("fmc-token");
      if (fmcToken) {
        fmcToken = JSON.parse(fmcToken);
        let createAt = new Date(fmcToken.createAt);
        if (createAt.getTime() + DELAY > new Date().getTime()) {
          token = fmcToken.token;
        }
        else {
          ConnectionService.clearLocalStorage();
        }
      }
    } catch (e) {
      console.error(e.message);
    } finally {
      return token;
    }
  };

  static setTokenToLocalStorage = token => {
    localStorage.setItem(
      "fmc-token",
      JSON.stringify({
        token: token,
        createAt: new Date().getTime(),
      })
    );
  };

  static clearLocalStorage = () => {
    localStorage.removeItem("fmc-token");
  };

  validateTextField = (e, formValues) => {
    this.data.setFormValues({...formValues, [e.target.id]: e.target.value});
  };

  submitForm = (e, formValues) => {
    e.preventDefault();
    this.data.setLoading(true);
    this.data.setResult(null);
    this.logIn(formValues);
  };
}
