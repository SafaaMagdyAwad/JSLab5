// console.log(window.location.search.substring(1));//this is the querry string without ?
var querryString=window.location.search.substring(1);
var inputArray=querryString.split('&');
var finalArray=[];
for(var i=0;i<inputArray.length;i++){
    var keyValArray=inputArray[i].split('=');
    console.log(keyValArray);
    finalArray.push(keyValArray);
}


console.log(finalArray);
//save the final array in the local stors]age as json
if(localStorage.getItem("registrationInfo")){
    console.log("registrationInfo",localStorage.getItem("registrationInfo"))
}
localStorage.setItem("registrationInfo",JSON.stringify(finalArray));

console.log(localStorage.getItem("registrationInfo"));
