
var allproduct = document.querySelectorAll(".list .btn")
var content = document.querySelector("#content")
var btn1 = document.querySelector("#btn1")
var del = document.querySelector("#del")
var totalprice = 0 


allproduct.forEach( function(item) {
item.onclick = function(){
    totalprice += +(item.getAttribute("price"))
    item.style.backgroundColor = "green"
content.innerHTML += item.getAttribute("name") + "<br>"


if(content.innerHTML != ""){

    btn1.style.display = "block"
    btn1.style.backgroundColor = " dodgerblue"
    btn1.style.color = "white"
    btn1.style.width = "48%"
    btn1.style.height = "40px"
    btn1.style.marginTop = "20px"
    btn1.style.border = 0
    btn1.style.borderRadius = "15px"
    btn1.style.outline = 0




    del.style.backgroundColor = "red"
    del.style.color = "white"
    del.style.display = "block"
    del.style.width = "48%"
    del.style.height = "40px"
    del.style.marginTop = "20px"
    del.style.border = 0
    del.style.borderRadius = "15px"
    del.style.outline = 0




    content.style.backgroundColor = " teal"
    content.style.display = "block"
    content.style.color = "white"
    content.style.marginTop = "10px"
    content.style.width = "70%"
    content.style.textAlign = "center"
    content.style.borderRadius = "15px"

}
    }
})


btn1.onclick = function(){
    document.getElementById("plural").innerHTML = totalprice
    plural.style.marginTop = "30px"
    plural.style.width = "100%"
    plural.style.textAlign = "center"
    plural.style.marginBottom = "50px"



}


del.onclick = function(){
content.innerHTML = " "
del.style.display = "none"
    btn1.style.display = "none"
    document.getElementById("plural").innerHTML = totalprice = 0

}































