
/* 
    - Use JSON.parse() to convert recived data (in json format) into actual jsion (https://www.w3schools.com/js/js_json_parse.asp)
        const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
        
        const text = '["Ford", "BMW", "Audi", "Fiat"]';
        const myArr = JSON.parse(text);
    
    - Convert json to string (so it will be possible to send it over internet)  (https://www.w3schools.com/js/js_json_stringify.asp)
        const obj = {name: "John", age: 30, city: "New York"};
        const myJSON = JSON.stringify(obj);
    
    - Loop (https://www.w3schools.com/js/js_json_objects.asp)
        const myJSON = '{"name":"John", "age":30, "car":null}';
        const myObj = JSON.parse(myJSON);

        let text = "";
        for (const x in myObj) {
            text += x + ", ";
        }
    
    - Arrays in Objects (https://www.w3schools.com/js/js_json_arrays.asp)
        {
            "name":"John",
            "age":30,
            "cars":["Ford", "BMW", "Fiat"]
        }
        myObj.cars[0];

        // Looping
        for (let i in myObj.cars) {
            x += myObj.cars[i];
        }
        // Another loop
        for (let i = 0; i < myObj.cars.length; i++) {
             x += myObj.cars[i];
        }
*/


/* 
    This code will get json file that contain 2 sections:
        - People list
        - Family list
    This code will perform the below validations on the json file:
        - General format check (check that all the sections/data exists in the json)
*/

$.getJSON('/Users/constanting/Documents/My-JS-Project/Task.json', function(obj) {
    console.log(obj.details.ProductID);
});
const myObj = JSON.parse(obj);
function generalValidation(){
  console.log(myObj);  
}

