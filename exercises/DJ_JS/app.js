var changeBoxcolor = document.getElementById("bigbox");

changeBoxcolor.addEventListener("mouseover",function(){changeBoxcolor.style.backgroundColor = "blue"});

changeBoxcolor.addEventListener("mouseout",function(){changeBoxcolor.style.backgroundColor = "black"});

changeBoxcolor.addEventListener("mousedown",function(){changeBoxcolor.style.backgroundColor = "red"});

changeBoxcolor.addEventListener("mouseup",function(){changeBoxcolor.style.backgroundColor = "green"});

document.addEventListener("wheel",function(){changeBoxcolor.style.backgroundColor = "orange"});

