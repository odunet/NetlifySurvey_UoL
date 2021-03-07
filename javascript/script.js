//Initialize name of survey participant
var surveyor = document.getElementById("surveyor");

//Initialize table body
var tableBody = document.getElementById("tableBody");

//Initialize survey submit button
var surveySubmit = document.getElementById("surveySubmit");

//Initialize empty list to take data
var radioResult = [];

//Add the header
radioResult.push(["Question", "V-Likely", "Likely", "Nueral", "Unlikely", "V-Unlikely"]);

//On click of a button, it takes the table and destructures in to rows
surveySubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    for (const property in tableBody.children) {
        if (typeof(tableBody.children[property]) != "function" && property != "length") { 
            var tableRow = tableBody.children[property];

            //Ater destructuring the tables into rowns, it destructures each row into the individual objects,
            //further selecting each radio button and checking if it is clicked. Final result is saved into 
            //a 2X2 array
            let tempArray = [];
            for (const innerP in tableRow.children) {
                if (innerP != 0 && innerP != "length" && typeof(tableRow.children[innerP]) != "function") {
                    tempArray.push(tableRow.children[innerP].children[0].checked);    
                } 
                //This will store the question which has object key 0, in the array
                if (innerP == 0) {
                    tempArray.push([(tableRow.children[innerP].innerHTML).toString()]);
                }
            };
            radioResult.push(tempArray);  
        };
    };

    // POST request using fetch() 
    fetch("https://api.jsonbin.io/v3/b", { 
    
        // Adding method type 
        method: "POST", 
        
        // Adding body or contents to send 
        body: JSON.stringify({ 
            data: "Ayokunle", 
            email: radioResult, 
        }), 
        
        // Adding headers to the request 
        headers: { 
            "Content-type": "application/json",
            "X-Master-Key": "$2b$10$QFZzyMSPBRMT8aYlYcqfdO0v/Pu3/rqH9.XV0R2pGiyFvtCK1Pc2G",
            "X-BIN-NAME": `${surveyor.value}`,
            "X-COLLECTION-ID": "60452abe5e29de07fced5945",
        }
    }) 

    // Converting to JSON 
    .then(response => response.json()) 

    // Displaying results to console 
    .then(json => {
        console.log(JSON.stringify(json));
        alert("Form submitted, thank you!")
    })
    .catch(err => console.log(err)); 
});