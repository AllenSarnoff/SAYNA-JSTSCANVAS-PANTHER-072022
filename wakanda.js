let logoBP = document.querySelector("#image_suit_souris");
document.onmousemove = follow;
    function follow(e){
        var x =  e.pageX;
        var y =  e.pageY;
                        
        logoBP.style.left = (x+1)+'px';
        logoBP.style.top  = (y+1)+'px';
    }