// Module Boef

    // private code komt hier...

    const emitter = [];
    
    function plaatsEmitter(latitude, longitude) {
        emitter.push({ latitude:latitude, longitude:longitude })
    }
     
    function emitters() {
      return emitter;
    }
     
    const sensor = [];
    
    function plaatsSensor(latitude,longitude){
        sensor.push({ latitude:latitude, longitude:longitude, afstand:afstand, pulse:pulse, aantalMeterGrondstof:aantalMeterGrondstof})
    }

    function sensors(){
        return sensor;
    }

    function afstand(){
        let totaleAfstand = haversine(emitter[0],this);        
        return totaleAfstand;
    }

    function haversine(cordinaat1, cordinaat2){
        function toRad(x){
            return x*Math.PI/180
        }
        var R = 6371e3; //meters
        
        var dlatitude = cordinaat2.latitude - cordinaat1.latitude;
        var dlatidudeRad = toRad(dlatitude);
        var dlongitude = cordinaat2.longitude - cordinaat1.longitude;
        var dlongtudeRad = toRad(dlongitude);
        var a = Math.sin(dlatidudeRad / 2) * Math.sin(dlatidudeRad / 2) +
        Math.cos(toRad(cordinaat1.latitude)) * Math.cos(toRad( cordinaat2.latitude)) *
        Math.sin(dlongtudeRad / 2) * Math.sin(dlongtudeRad / 2);
        
        var c = 2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
        var distance = R*c;
        return distance;   
    } 

    let totaletijd = 0;
    
    function pulse (tijd){
        totaletijd = tijd;
    }

    function aantalMeterGrondstof(){
        let Vgrondstof = 1493;
        let Vnormale = 4176;
        let Xtot = this.afstand();
        let Ttot = totaletijd;
        console.log(Xtot);
        let Xgrondstof = (Ttot-Xtot/Vnormale)*Vgrondstof*Vnormale/(Vnormale-Vgrondstof)
        return Xgrondstof;
    }
    
    function rijen(){
        return RijenVar;
    }

    const RijenVar = []; 

    function plaatsSensoren(latitude,longitude,aantal){
        let sensorList = [];

        let deltalatitude = latitude -emitter[0].latitude;
        let deltalongtitude = longitude- emitter[0].longitude;

        for (let i=0; i<aantal; i++){
            sensorList.push({ latitude:latitude, longitude:longitude, afstand:afstand, pulse:pulse, aantalMeterGrondstof:aantalMeterGrondstof})
        
        latitude+=deltalatitude;
        longitude += deltalongtitude;
        }
        RijenVar.push (sensorList);
    }

    function verwijderSensorList(){
        RijenVar.length = 0;
    }

    
    function verwijderEmitter(){
        emitter.length = 0;
    }

    function verwijderSensoren(){
        sensor.length = 0;
    }

    export default{
        plaatsSensor,
        plaatsEmitter, 
        emitters,
        sensors,
        rijen,
        plaatsSensoren,
        verwijderEmitter,
        verwijderSensoren,
        verwijderSensorList
    }