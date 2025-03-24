
var storedValues=JSON.parse(localStorage.getItem("registrationInfo"));
var imageElement=document.getElementById("image");
var textElement=document.getElementById("text");
// 
console.log(imageElement.src);
if(storedValues[2][1]=="male"){
    imageElement.src="images/male.jpg";
    console.log(imageElement.src);
}else if(storedValues[2][1]=="female"){
    imageElement.src="images/female.jpg";
    console.log(imageElement);
}else{
    imageElement.display="null";
    document.write("not valid data");
}
if("color is",storedValues[3][1]);

textElement.innerHTML=storedValues[0][1];
textElement.style.color=storedValues[3][1];
