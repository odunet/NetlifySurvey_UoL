//Initialize radio objects
var radio1 = document.getElementById("first");
var radio2 = document.getElementById("second");
var radio3 = document.getElementById("third");
var radio4= document.getElementById("forth");
var radio5 = document.getElementById("fifth");
var radio6 = document.getElementById("sixth");
var radio7 = document.getElementById("seventh");
var radio8 = document.getElementById("eight");
var radio9 = document.getElementById("ninth");

//Initialize table body
var tableBody = document.getElementById("tableBody");

//Pulls data from the DOM.
// for (const property in radio1.children) {
//         if (property != 0 && typeof(radio1.children[property]) != "function" && property != "length") { 
//         console.log(radio1.children[property].childNodes[0].checked);       
//     }
// }

tableBody.addEventListener("click", (e) => {
    if (e.target.tagName == "INPUT") {
        e.target.checked != e.target.checked;

        let clickedRadioId = e.target.id;
        let clickedRadioRow = Number(clickedRadioId.slice(0,1)) - 1;
        let clickedRadioColumn = Number(clickedRadioId.slice(2));    
    };
});