

function insertHeader(var1){
    var header1 = "JavaScript Made This!!";
    var whoWrote = "Bill";
    var wroteWhat = "Wrote The Javascript";
    document.getElementById("header").innerHTML = `<h1> ${header1} </h1>` + `<div><span class = name> ${whoWrote}</span> <span> ${wroteWhat}</span></div>`;

}

function betterConvo(){
    var replaceConvo = "Do you know any jokes?";
    var replaceConvo1 = "I do know a joke";
    var replaceConvo2 = "Tell...Me";
    var replaceConvo3 = "A guy walked into a bar...";

    document.getElementsByClassName("message left")[0].innerHTML = `<div>${replaceConvo}</div>`;
    document.getElementsByClassName("message right")[0].innerHTML = `<div>${replaceConvo1}</div>`;
    document.getElementsByClassName("message left")[1].innerHTML = `<div>${replaceConvo2}</div>`;
    document.getElementsByClassName("message right")[1].innerHTML = `<div>${replaceConvo3}</div>`;

}


insertHeader();
betterConvo();