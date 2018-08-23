function begroet(){
    console.log ("hoi");
    const elembegroet = document.getElementById('begroeting');
    const elemnaam = document.getElementById('naam');
    var newnaam = elemnaam.value;   
    begroeting.innerText="Hello"+" "+newnaam;
}
