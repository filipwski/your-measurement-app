//Moduły wymagane do połączenia z bazą Firebase/Firestore
var firebase = require("firebase");
var sensorLib = require("node-dht-sensor");
var admin = require('firebase-admin');
var serviceAccount = require('./key.json');
var deviceSerialNumber = new String();
var docSensorRef;
var db = admin.firestore();
var firebaseConfig = {
  databaseURL: "https://your-measurement.firebaseio.com"
};
require("firebase/auth");
require("firebase/firestore");
firebase.initializeApp(firebaseConfig);

//Metoda wywołująca komende systemową do pobrania numeru seryjnego urządzenia
const exec  = require("child_process").exec;
function getDeviceSerialNumber() {
  exec('cat /proc/cpuinfo | grep ^Serial | cut -d":" -f2' ,(error,stdout,stderr) => {
  deviceSerialNumber = stdout;
});
}

admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
databaseURL: firebaseConfig.databaseURL
});

getDeviceSerialNumber();

//Metoda tworząca w bazie Firestore obiekt z numerem seryjnym urządzenia
setTimeout(()=>{docDeviceRef = db.collection('devices').doc(deviceSerialNumber.trim()).set({
  device: deviceSerialNumber.trim()
})},5000);

//Główna metoda aplikacji. Odpowiada za tworzenie dla danego czujnika dokumentu w bazie.
//Wykonuje i przesyła pomiary do bazy w czasie rzeczywistym w odstępie 10 sekund
docSensorRef = db.collection('measurement').doc('DHT22');
function loop(){
  setTimeout(()=> {
    var date = new Date(Date.now());
          docSensorRef.set(
            {[date.toLocaleDateString("en", dateOptions)]:{
                device: deviceSerialNumber.trim(),
                day: date.getDate(),
                month:  (date.getMonth() + 1),
                year: date.getFullYear(),
                hour: date.getHours(),
                minutes: date.getMinutes(),
                second: date.getSeconds(),
                temperature: sensorLib.read(22,4).temperature.toFixed(1),
                humidity: sensorLib.read(22,4).humidity.toFixed(1)
            }},{ merge: true });
      if(i){
        loop();
      }    
    },10000);
}
loop();

// setTimeout(function (){console.log("Temperature: " + sensorLib.read(22,4).temperature.toFixed(1) + 
// "°  / Humidity: " +  sensorLib.read(22,4).humidity.toFixed(1) + "% "+ },3000);
// setTimeout(function(){console.log(serialNumber);},1000);