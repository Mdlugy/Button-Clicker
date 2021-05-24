function pizzaRandom(){
    document.getElementById("cheesesOut").innerHTML = ""
var pizza = randomPizza()
pizzaPrint(pizza);
}

function pizzaSubmit(){
    console.log("pizzaSubmit")
    var crust = document.getElementById('crust').value
    var sauce = document.getElementById('sauce').value
    var cheese =[]
    var toppings = []
    for(var i=0; i<document.getElementById("cheesenum").value; i++){
        cheese[i]=prompt('what kind of cheese #'+(i+1))
        
    }
    for(var i=0; i<document.getElementById("toppingsnum").value; i++){
        toppings[i]=prompt('what kind of topping #'+(i+1))
            }
            console.log(toppings, cheese)
    pizza = pizzaOven(crust, sauce, cheese, toppings)
        pizzaPrint(pizza);
    
}



function pizzaPrint(pizza){
    var CheeseoutPutString = ''
    var toppingsOutputString = ''
    //Crust output
    document.getElementById("crustOut").innerHTML = pizza.crust;
    // sauce output
    document.getElementById("sauceOut").innerHTML = pizza.sauce;
    //cheese output
    if (pizza.cheese.length == 1){
        document.getElementById("cheesesOut").innerHTML = pizza.cheese[0] + " ";
        } 
    else {
        for (var i = 0; i < pizza.cheese.length; i++){
            if(i == pizza.cheese.length - 1){
                CheeseoutPutString += "and " + pizza.cheese[i]
            }
            else{
                CheeseoutPutString += pizza.cheese[i]+", "
            }
        }
        document.getElementById("cheesesOut").innerHTML = CheeseoutPutString+ " ";
    
    }
    // toppings output
    if (pizza.toppings.length == 0 ){
        document.getElementById("toppingsOut").innerHTML = "and no Toppings"
    }
    else{
        for (var i = 0; i < pizza.toppings.length; i++){
        if(i == pizza.toppings.length - 1){
            toppingsOutputString += "and " + pizza.toppings[i]
        }
        else{
            toppingsOutputString += pizza.toppings[i]+", "
        }
    }
    document.getElementById("toppingsOut").innerHTML = toppingsOutputString + " on top "
}
}











function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;
    return pizza;
}








function randomPizza(){
    var pizza = {};
    pizza.crust =  crustGet();
    pizza.sauce=  sauceGet();
    pizza.cheese= cheeseGet();
    pizza.toppings= toppingsGet();
    return pizza
}

console.log(randomPizza())


function crustGet(){
//random crust weighted 30% hand tossed  25%  neopolitan 20% deep dish 15% sourdough 8% pretzel 2% sourdough
var crustmath = Math.random()*100
if (crustmath <30)
{crust = "hand tossed";}
else if (crustmath < 55 )
{crust = "neopolitan";}
else if (crustmath < 75 )
{crust = "deep dish";}
else if (crustmath < 90 )
{crust = "sourdough";}
else if (crustmath < 98 )
{crust = "pretzel"}
else
{pizza.crustType =  "Sourdough"}
return crust;
}


function sauceGet(){
     //sauce weights [30%"traditional",30%"marinara", 25% 'vodka',5%"bbq",5% 'pesto' 5%'alfredo']
var sauceMath = Math.random()*100
if (sauceMath <30)
{sauce = "traditional"}

else if (sauceMath < 60 )
{sauce = "marinara"}

else if ( sauceMath < 85 )
{sauce = "vodka"}

else if (sauceMath < 90 )
{sauce = "bbq"}

else if ( sauceMath < 95 )
{sauce = "pesto"}
else 
{sauce =  "alfredo"}
return sauce 
}


function cheeseGet(){
//cheese amount 
var cheeseAmountWeight = Math.random()*100
var cheese = []
if (cheeseAmountWeight<50){cheeseAmount = 1}
else if (cheeseAmountWeight < 80){cheeseAmount = 2}
else if (cheeseAmountWeight < 95){cheeseAmount = 3}
else{cheeseAmount = 4}

// this is my code and In my house pizza has some mozzerella on it. I don't care what other exotic cheeses you want to throw in the first one is Mozz
cheese[0] ="mozerrella"
for (var i = 1; i < cheeseAmount; i ++){
    cheese [i] = cheesepicker()
}
// write a dupechecker 
for (var i = 0; i < cheese.length; i++)  
    { 
        for (var j = i + 1 ; j < cheese.length; j++)
        { 
            if (cheese[i] == (cheese[j])){ 
            cheese[j] = cheesepicker()
            } 
        }      
    }

return cheese
}
function cheesepicker(){
//now that sanity's been restored, you can get wild with it with the following weights
// 30% fresh mozzarella 20% granna padano 15% ricotta 10% pepper jack 10% provalone 10% gorgunzolla (this is a coding challenge not a spelling challenge) 4% gouda 1% feta (why we putting feta on pizza?)
var cheeseMath = Math.random()*100
    if (cheeseMath < 30 )
    {cheeseChoice = "fresh mozzarella"}
    else if (cheeseMath < 50 )
    {cheeseChoice = "granna padano"}
    else if (cheeseMath < 65 )
    {cheeseChoice = "ricotta"}
    else if (cheeseMath < 75 )
    {cheeseChoice = "pepper jack"}
    else if (cheeseMath < 85 )
    {cheeseChoice = "provalone"}
    else if (cheeseMath < 95 )
    {cheeseChoice = "gorgunzolla"}
    else if (cheeseMath < 99 )
    {cheeseChoice = "gouda"}   
    else
    {cheeseChoice = "feta"}  
    return cheeseChoice;

}
function toppingsGet(){

var toppingsAmountWeight = Math.random()*100
var toppings = []
if (toppingsAmountWeight<20){toppingsAmount = 0}
else if (toppingsAmountWeight < 50){toppingsAmount = 1}
else if (toppingsAmountWeight < 70){toppingsAmount = 2}
else if (toppingsAmountWeight < 80){toppingsAmount = 3}
else if (toppingsAmountWeight < 90){toppingsAmount = 4}
else if (toppingsAmountWeight < 95){toppingsAmount = 5}
else if (toppingsAmountWeight < 96){toppingsAmount = 6}
else if (toppingsAmountWeight < 97){toppingsAmount = 7}
else if (toppingsAmountWeight < 98){toppingsAmount = 8}
else if (toppingsAmountWeight < 99){toppingsAmount = 9}
else{toppingsAmount = 10}

if (toppingsAmount == 0)
{
    toppings = ''
}
else{
    for (var i = 0; i < toppingsAmount; i++)
    {
        toppings[i] =  toppingspicker()
    }
}
for (var i = 0; i < toppings.length; i++)  
    { 
        for (var j = i + 1 ; j < toppings.length; j++)
        { 
            if (toppings[i] == (toppings[j])){ 
                toppings[j] = toppingspicker()
            } 
        }      
    }

return toppings
}
function toppingspicker (){
    var toppingsMath = Math.random()*100
    var topping = ''
    if (toppingsMath < 10 )
    {topping = "mushrooms"}
    else if (toppingsMath < 20 )
    {topping = "pepperoni"}
    else if (toppingsMath < 30 )
    {topping = "sausage"}
    else if (toppingsMath < 35 )
    {topping = "olives"}
    else if (toppingsMath < 45 )
    {topping = "onions"}
    else if (toppingsMath < 55 )
    {topping = "fried chicken"}
    else if (toppingsMath < 65 )
    {topping = "jalapenos"}   
    else if (toppingsMath < 75 )
    {topping = "bacon"} 
    else if (toppingsMath < 80 )
    {topping = "anchovies"} 
    else if (toppingsMath < 90 )
    {topping = "peppers"} 
    else
    {topping = "pineapple"}  
    return topping;
}