var readline = require("readline-sync");

var prompt = readline.createInterface(process.stdin, process.stdout);

var quest = "What would you like to do?";

var quest1 = "Put hand in hole?";

var quest2 = "Find the Key?";

var quest3 = "Open the door?";

prompt.question(`"${quest} + ${quest1} + ${quest2} + ${quest3}"`, function(){})


// var quest = readline.question([query'What would you like to do "\n1. Put hand in hole?" "\n2. Find the key, or" "\n3.Open the door?" ');

// console.log(quest);