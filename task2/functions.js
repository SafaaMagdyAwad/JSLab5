function openchiled() {
    chiledobj = window.open("chiled.html", "chiled page", "width=500px,height=500px");
    counter = 0;
    text = " prent text in child char by char ";
    console.log(text.length);
    setInterval(function () {
        if (counter >= text.length) {
            counter = 0;
        }
        chiledobj.document.write(text[counter]);
        counter++;
    }, 200);

}
