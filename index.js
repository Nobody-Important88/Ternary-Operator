const prompt= require('prompt-sync')()

//1
let tempature = parseInt(prompt("Pick a nummber for tempature "))
let answer = tempature > 30 ? "Its Hot ": "Its normal"
console.log(answer)

//2
let totalfee = parseInt(prompt("Whats the total price of your items "))
let discount = totalfee>=100? (totalfee*.9) : totalfee;
console.log("$"+discount)

//3
let age = parseInt(prompt("Whats your age "))
let ticketprice = age <12? 8: age>=12? 15:15
console.log("$"+ticketprice)

//4
let day = prompt("What day of the week is it")
let week = day="saturday"||"sunday"? "Weekday":"Weekday"
console.log(week)

//5
let age2 = parseInt(prompt("Whats your age "))
let finalanswer = age2 < 13 ? "kid" : age2 < 20 ? "teen":age2 <60? "Adult":"senior";
console.log(finalanswer)













//let  = parseInt(prompt(""))
