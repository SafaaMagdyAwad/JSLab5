var counter = 1;
var isObjectCreated = false;   // a flag to know if an object was created

function pauseSlider() {
    clearInterval(objChild);
    console.log("remove old object .....",);
}
function StartSLider() {
    var image = document.getElementById("myImg");

    // validation on the refrence
    console.log(isObjectCreated);
    if (isObjectCreated) {// if i  have a created object
        pauseSlider(); //remove that object to start a new one
        console.log("clearInterval(objChild)", clearInterval(objChild));
    }
    objChild = setInterval(function () {
        console.log("objChild is ", (objChild));//integer 1,2 , .....
        counter++;
        if (counter >= 8) {
            counter = 1;
        }
        image.src = "Images/" + counter + ".jpg";
        isObjectCreated = true;
        console.log(counter);
    }, 3000);
}

function next() {
    counter++;
    StartSLider();
    console.log(counter);
}
function prev() {
    counter--;
    StartSLider();
    console.log(counter);
}
