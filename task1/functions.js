function openchiled(){
    chiledobj=window.open("chiled.html","chiled page","width=500px,height=500px");
    setInterval(function(){
        chiledobj.scrollBy(0,10)
    },200);

}