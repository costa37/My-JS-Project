/* 
    This code will get json file that contain 2 sections:
        - People list
        - Family list
    This code will perform the below validations on the json file:
        - General format check (check that all the sections/data exists in the json)
*/
/*
$.getJSON('/Users/constanting/Documents/My-JS-Project/Task.json', function(obj) {
    console.log(obj.details.ProductID);
});
const myObj = JSON.parse(obj);
function generalValidation(){
  console.log(myObj);  
}
*/

//loading json start
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var rawFile = new XMLHttpRequest();
var temp = JSON.stringify(rawFile.open("GET", 'https://replit.com/@ConstantinG2/My-JS-Project#Task.json'));
console.log(temp);
console.log('Finished');
