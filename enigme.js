let game = {
    description : [
    "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de chiffrement par décalage . L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase ", 
    "Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film "
    ],
    crypted : [
    "Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt aioqb lm ti dqttm lwvb mab wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza",
    "01001100 01000101 00100000 01010010 01001111 01001001 00100000 01001100 01001001 01001111 01001110 00001101 0000101" 
    ],
    informationTitle : "Le savais tu ?",
    informationContent : [
    "Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans une phrase. Et si tu regardais quel symbole revient le plus souvent pour en déduire son décalage dans l’alphabet ? ",
    "Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. C'est en quelque sorte l'ancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1"
    ]
}

let title = document.querySelector(".title");
let description = document.querySelector(".description");
let crypted = document.querySelector(".crypted");
let submit = document.querySelector(".submit");

let informationTitle = document.querySelector(".informationTitle");
let informationContent = document.querySelector(".informationContent");
let i = 0;

submit.addEventListener("click", gaming);
function gaming(){

        title.textContent = 'ENIGME NUMERO '+ (i+2);
        description.textContent =  game.description[i];
        crypted.textContent = game.crypted[i];
        crypted.style.fontFamily = "Cantarell";
        crypted.style.fontSize = "85%";
        crypted.style.letterSpacing = "normal";
        crypted.style.wordSpacing = "10px";
        informationTitle.textContent = game.informationTitle;
        informationContent.textContent = game.informationContent[i];

        if (i>=2) {
                const conf = document.querySelector(".submit");
                const overlay = document.querySelector(".overlay");
                const popUpMessage = document.querySelector(".popUpMessage");
        
                let mail = document.querySelector("#mail");
                let acceptNewsletter;
                let frequency = document.querySelector("#frequence");
                let message = document.querySelector("#comments");
                overlay.style.display="block";
    } 
    i++;
}
       
let logoBP = document.querySelector("#image_suit_souris");
document.onmousemove = follow;
    function follow(e){
        var x =  e.pageX;
        var y =  e.pageY;
                        
        logoBP.style.left = (x+1)+'px';
        logoBP.style.top  = (y+1)+'px';
    }


let now = new Date();//Pour eviter le decalage horaire
const dateOffsetInMinutes = now.getTimezoneOffset();

const millisecondsInMinute = 60*1000;
const millisecondsInHour = 60*millisecondsInMinute;
const millisecondsInDay = 24*millisecondsInHour;

const newYear = new Date("2023-06-29T00:01:00+0000");

const getCountdown = () =>{
    let nowDate = Date.now(); //A partir du 1janvier 1970

    let tempsRestantEnMs = newYear - nowDate + dateOffsetInMinutes*millisecondsInMinute;

    //Jours: 
    let nbJours = Math.floor(tempsRestantEnMs/millisecondsInDay); 

    //Heures
    let resteTempsSansJoursMs = tempsRestantEnMs - nbJours * millisecondsInDay;
    let nbHeures = Math.floor(resteTempsSansJoursMs/millisecondsInHour);

    //Minutes: 
    let resteTempsSansHeuresMs = resteTempsSansJoursMs - nbHeures * millisecondsInHour;
    let nbMinutes = Math.floor(resteTempsSansHeuresMs/millisecondsInMinute);

    //Secondes:
    let resteTempsSansMinutes = resteTempsSansHeuresMs - nbMinutes * millisecondsInMinute;
    let nbSecondes = Math.floor(resteTempsSansMinutes/1000);

    document.querySelector("#hours").textContent = nbHeures;
    document.querySelector("#minutes").textContent = nbHeures;
    document.querySelector("#seconds").textContent = nbSecondes;
    window.setTimeout(getCountdown, 1000);
}
 
getCountdown();