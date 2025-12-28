var dicenumber1 = Math.floor(Math.random()*6)+1;
var randomdiceno1 = "dice"+dicenumber1+".png";
var randomdiceimage1 = "images/"+randomdiceno1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdiceimage1);

var dicenumber2 = Math.floor(Math.random()*6)+1;
var randomdiceno2 = "dice"+dicenumber2+".png";
var randomdiceimage2 = "images/"+randomdiceno2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdiceimage2);

if(dicenumber1>dicenumber2){
    document.querySelector("h1").innerHTML="🚩Player Wins!!.."
}
else if(dicenumber1<dicenumber2){
   document.querySelector("h1").innerHTML="🚩Computer Wins!!.." 
}
else{
    document.querySelector("h1").innerHTML= "🚩Draw!!.."
}