const anchors = document.querySelectorAll(".seeMore");
anchors.forEach(elem => elem.addEventListener("click", smoothing));

function smoothing(event){
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")
    window.scrollTo({
        top: document.querySelector(targetId).offsetTop,
        behavior: "smooth"
    })
}

let logoBP = document.querySelector("#image_suit_souris");
document.onmousemove = follow;
    function follow(e){
        var x =  e.pageX;
        var y =  e.pageY;
                        
        logoBP.style.left = (x+1)+'px';
        logoBP.style.top  = (y+1)+'px';
    }


document.body.addEventListener("load", carroussel());

function carroussel(){
    let nbr = 10;
    let p = 0;
    let container = document.querySelector(".container");
    let g = document.querySelector("#g");
    let d = document.querySelector("#d");

    container.style.width = (300*nbr)+"px";
    const titles = ["KILLMONGER", "OKOYE", "SHURI", "NAKIA", "RAMONDA", "W’KABI", "M’BAKU", "ZURI", "EVERETT KENNETH ROSS", "ULYSSE KLAUE"];
    const description = [
        "La sauvagerie de N'Jadaka alors qu'il servait dans une unité d'opérations noires de l'armée américaine lui a valu le surnom de Killmonger. D’origine Wakandaise, et se sentant abandoné par sa nation, il cherche à détroner T’Challa dans une quête vers le pourvoir.",
        "Okoye est le général des Dora Milaje (groupe d’élite de femmes guerrières) et le chef des forces armées et des renseignements wakandais. Témoin du couronnement de T'Challa, elle se joint à lui dans de nombreuses aventures.",
        "Shuri est la Princesse du Wakanda, la fille de T'Chaka et de Ramonda, la sœur de T'Challa et la leader du Groupe de Design du Wakanda. Innovatrice, elle est chargée de créer une grande partie de la technologie moderne du Wakanda ainsi que les Habits de la Panthère.",
        "Nakia est une membre des Chiens de Guerre et l'amoureuse de T'Challa. Elle est souvent en mission à travers le monde, assistant aux grandes détresses de nombreux peuples et commence à croire avec force que le Wakanda pourrait activement les aider",
        "Ramonda est la Reine Mère du Wakanda, épouse de T'Chaka et mère de T'Challa et Shuri. Elle se tenait aux côtés de son fils quand il devint le Roi du Wakanda, mais fut forcée de partir en exil lorsque Erik Killmonger vainquit T'Challa et prit le contrôle du trône.",
        "W'Kabi est l'ancien chef de la sécurité pour la Tribu de la Porte du Wakanda ainsi que l'ancien meilleur ami de T'Challa. Ayant perdu la foi en son roi pour avoir échouer à capturer Ulysses Klaue, l'homme responsable de la mort de ses parents, W'Kabi apporta son soutien à Erik Killmonger et lui permit de prendre le trône du Wakanda",
        "M'Baku est le chef de la Tribu Jabari, un groupe de Wakandais qui s'étaient écartés de la société principale du Wakanda et un fervant opposant du pouvoir de T'Challa, mais échoua à le vaincre lors de l'affrontement rituel pour le trône, avant de l'aider à défendre le Wakanda face à Erik Killmonger.",
        "Zuri était un ancien membre des Chiens de Guerre et un shaman Wakandais, loyal conseiller de son Roi. Après avoir gardé les secrets de T'Chaka à propos de sa gestion de la mort de N'Jobu dans le passé, Zuri continua à soutenir le Roi du Wakanda alors que T'Challa reprenait le trône.",
        "L'Agent Everett Ross est un agent de la CIA et un ancien Commissaire Exécutif à l'Antiterrorisme pour la Force Conjointe AntiTerroriste. Après avoir quitté la Force Conjointe AntiTerroriste, Ross fut chargé de traquer et neutraliser Ulysses Klaue, ce qui plaça Ross sur le chemin de Black Panther, qui cherchait à capturer de nouveau Klaue pour ses crimes passés.",
        "Ulysses Klaue est un criminel international, gangster et vendeur d'armes sur le marché noir. En 1992, il collabora avec N'Jobu afin de voler une quantité importante de vibranium au Wakanda. Bien qu'il soit parvenu à voler et à s'échapper avec un stock important, il reçut une marque sur le cou de la part des Wakandais."
    ]

    for (let i = 1; i <= nbr; i++) {
        div = document.createElement("div");
        div.className = "div";
        div.style.display = "inline-block";
        div.style.backgroundImage = "url('Illustrations + Logo/Accueil/Pantherhome_slider_"+i+".png')";
        container.appendChild(div);        

    }
    hideButton();

    
    d.addEventListener("click", toRight)
    function toRight(){
        if(p>-nbr+1)
            p--;
        container.style.transform = "translate("+p*9+"%)";
        container.style.transition = "all 0.5s ease";
        hideButton();

    }

    g.addEventListener("click", toLeft)
    function toLeft(){
        if(p<0)
            p++;
        container.style.transform = "translate("+p*10+"%)";
        container.style.transition = "all 0.5s ease";
        hideButton();
    }

function hideButton() {
    if (p==-nbr+1) 
        d.style.visibility = "hidden";
    
    else
        d.style.visibility = "visible";
    
    if (p==0)
        g.style.visibility = "hidden";
    
    else
        g.style.visibility = "visible";
    
}
}


