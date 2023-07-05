

var a =document.getElementById("btn")

var b =document.createElement("input");
	b.setAttribute("type","submit");
	b.setAttribute("class","px-4 py-2 text-light bg-primary border-0 rounded");	
	a.appendChild(b)
	
	
b.addEventListener("click", function (e){
			name()
	})



function name(){


var c =document.createElement("ul")
	a.appendChild(c)
	
	
var c1 =document.createElement("li")
	c.appendChild(c1)	
	c1.innerHTML="one"
	
var c2 =document.createElement("li")
	c.appendChild(c2)	
	c2.innerHTML="two"

var c3=document.createElement("li")
	c.appendChild(c3)	
	c3.innerHTML="three"
	
var c4 =document.createElement("li")
	c.appendChild(c4)	
	c4.innerHTML="four"

	}
