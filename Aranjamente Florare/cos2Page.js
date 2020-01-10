var myVar = setInterval(setColor, 300);
 
function setColor() {
	
  var x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "purple" ? "pink" : "purple";
}
 
function stopColor() {
  clearInterval(myVar);
}

var aranjamente = ["Cos cu flori de toamna","'Stropitoarea' de petale","Floarea Soarelui intr-un bustean"
,"Lilica la cos","Cuib cu trandafiri","Galbiori","Sophistique","Naturalmente","Alba ca zapada"];
var buchete = ["Vampiric","Naturalmente","Purella","Purplicious"];
document.getElementById("aranjamente").innerHTML = aranjamente.toString();
aranjamente.pop();
aranjamente.pop();
aranjamente.pop();
aranjamente.pop();
document.getElementById("oferte").innerHTML = aranjamente.toString();
aranjamente.pop();
aranjamente.pop();
aranjamente.pop();
aranjamente.pop();
aranjamente.pop();
aranjamente.push("Vampiric");
aranjamente.push("Naturalmente");
aranjamente.push("Purella");
aranjamente.push("Purplicious");
document.getElementById("buchete").innerHTML = aranjamente.toString();

var button=document.getElementById("input_galerie");
button.addEventListener("click", function(){
$.get("https://jsonplaceholder.typicode.com/photos")
    .done(function(response) {
        console.log( "s-a terminat cu bine",response);
       
        response.forEach(function(element){
		var imagine = document.createElement("img");
		imagine.src = element.url;
		imagine.title = element.title;
		// document.body.appendChild(imagine);
		 document.getElementById("div_ajax").appendChild(imagine);
	})

    })
    .fail(function(error) {
        console.log( "error",error);
    })
    .always(function() {
        console.log( "Cod-ul din .always se apeleaza de fiecare data, indiferent daca request-ul a fost cu success sau cu fail" );
    }); 
},false);