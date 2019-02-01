document.getElementById("add1").addEventListener('click', add1)
document.getElementById("sub1").addEventListener('click', sub1)
document.getElementById("mul1").addEventListener('click', mul1)

    var form1 = document.add;
    // var form2 = form1.addval1.value;
    // var form2 = document.getElementById("addval1");
    // var form3 = document.getElementById("addval2");

    var formsub2 = document.getElementById("subval1");
    var formsub3 = document.getElementById("subval2");
    
    var formmul2 = document.getElementById("mulval1");
    var formmul3 = document.getElementById("mulval2");


function add1(e){
    e.preventDefault();
    document.getElementById("addresult").innerHTML = "<span>" +(parseInt(form1.addval1.value)+ parseInt(form1.addval2.value)) + "</span>" ;
}

function sub1(e){
    e.preventDefault();
    var form2val = parseInt(formsub2.value)
    var form3val = parseInt(formsub3.value)
    var tot = form2val - form3val;
    document.getElementById("subresult").innerHTML = tot;
}

function mul1(e){
    e.preventDefault();
    var form2val = parseInt(formmul2.value)
    var form3val = parseInt(formmul3.value)
    var tot = ((form2val)*(form3val ));
    document.getElementById("mulresult").innerHTML = tot;
}



// var form1 = document.add;
// var form2 = form1.addval1.value;
// var form3 = form1.addval2.value;
// // document.add.addEventListener('submit', add1)