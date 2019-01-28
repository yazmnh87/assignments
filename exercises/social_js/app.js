var car = {
    model: "Audi",
    make: ["s4", "A4", "A8","R8", "RS4","A7"],
    color: ["dolphin grey","midnight black","pearl","race red","pacific blue"],
    parts: [
        {
            partname: "powersteering pump",
            replacementinterval: "80,000",
            Cost: "3,000",
            difficulty: "8",
            subparts : [
                {   subpartname: "spindel",
                    replacementneeded: "yes",
                },
                {   
                    subpartname: "spring",
                    replacementneeded: "yes",
                },
                {   
                    subpartname: "power steering fluid",
                    replacementneeded:"yes",
                } 
                ],
            partname: "AC pump",
            replacementinterval: "100,000",
            cost: "2,500",
            difficulty: "7",
            subparts: [
                {
                    subpartname: "o-ring",
                    replacementneeded: "yes",
                },
                {   subpartname: "seal",
                    replacementneeded: "yes",
                }
                ],
            partname: "fuel pump",
            replacementinterval: "50,000",
            cost: "1,500",
            difficulty: "5",
            subparts: [
                {
                    subpartname: "fuel filter",
                    replacementneeded: "yes",
                },
                {   subpartname: "o-ring",
                    replacementneeded: "yes",
                }
            ]    
            }
    ],
    changeoil: function (){
        console.log('Change your oil');
    }

}

car.changeoil();