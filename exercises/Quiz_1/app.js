var str = "Hello my name is Albert";

function stringSplit (str) {
   return (str.split(" ").splice(4,1, "bill"));
}

console.log(stringSplit(str));