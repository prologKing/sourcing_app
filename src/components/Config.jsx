const DoLogin = (formItems) => verifyOTP(formItems)
         
const verifyOTP = (formItems) => {
    setUser(formItems);
    window.location.replace("/home");
}          
const Logout = () => {
    sessionStorage.removeItem("kotage_user");
    window.location.replace("/");
};

const SessionTimeout = () => {
    sessionStorage.removeItem("kotage_user");
    window.location.replace("/session-timeout");
};

const LoggedIn = () => getUser() !== null;


const setUser = (user) => sessionStorage.setItem("kotage_user", JSON.stringify(user));
const getUser = () => JSON.parse(sessionStorage.getItem("kotage_user"));

const IsAuthenticated = () => LoggedIn();



const Config = () => { };

Config.DoLogin = DoLogin;
Config.Logout = Logout;
Config.SessionTimeout = SessionTimeout;
Config.LoggedIn = LoggedIn;
Config.setUser = setUser;
Config.getUser = getUser;
Config.IsAuthenticated = IsAuthenticated;


export default Config;
export {
    DoLogin,
    Logout,
    SessionTimeout,
    LoggedIn,
    setUser,
    getUser,
    IsAuthenticated
};
