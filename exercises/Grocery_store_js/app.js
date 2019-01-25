var shopper = {
    name: "Bills shopping cart",
    groceryCart: ['apples', 'beans', 'bread'],
    organic: true,
    cartFull: function (){
        if (shopper.groceryCart.length < 10){
            return "cart not full";
        }
    }

}

console.log(shopper.cartFull());