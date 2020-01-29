document.write("<h2>The Lifetime Supply Calculator</h2><br/>");
var snacks = "Lays";
var age = 23;
var maxAge = 68;
var estimatedAmount = 2
var currentAge = maxAge - age ;
var totalSnacks = currentAge * estimatedAmount;
document.write("Favourite Snack: " + snacks + "<br/>");
document.write("Curent age: " + age + "<br/>");
document.write("Estimated Maximum Age: " + maxAge + "<br/>");
document.write("Amount of Snacks per day: " + estimatedAmount + "<br/>");
document.write("You will need " + totalSnacks + " Lays to last you until the ripe old age of " +maxAge);
