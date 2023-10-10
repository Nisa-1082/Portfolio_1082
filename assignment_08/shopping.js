window.onload = pageLoad;

function pageLoad() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "cloth.json");
    xhr.onload = function(){
        var jsdata = JSON.parse(xhr.responseText);
        showData(jsdata);
    }
    xhr.onerror = function(){alert("Error");};
    xhr.send();
}

function showData(data) {
    var showdiv = document.querySelectorAll("#layer div");
    var keys = Object.keys(data);
    for (var i = 0; i < keys.length; i++) {
        var space = document.createElement("h1");
        space.innerHTML = " ";
        var image = document.createElement("img");
        image.src = "pic/" + data[keys[i]].pic;
        var name = document.createElement("h2");
        name.innerHTML = data[keys[i]].brandname;
        var price = document.createElement("p");
        price.innerHTML = data[keys[i]].price + " ฿";
        showdiv[i].appendChild(space);
        showdiv[i].appendChild(image);
        showdiv[i].appendChild(name);
        showdiv[i].appendChild(price);
    }
}
