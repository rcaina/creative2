document.getElementById("pokeSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("nameInput").value;
  if (value === "")
    return;
  console.log(value);
      

 /* global fetch */
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto/';

        fetch(url)

          .then(function(response) {

            return response.json();

          }).then(function(json) {

            console.log(json);

          });
//       let results = "";
//       results += '<h2>Weather in ' + json.name + "</h2>";
// //       for (let i=0; i < json.weather.length; i++) {
// 	results += '<img src="http://pokeapi.co/media/sprites/pokemon/shiny/12.png"/>';
// //       }
//     //   results += '<h2>' + json.abilities..name + " &deg;F</h2>";
//     //   results += "<p>";
// //       for (let i=0; i < json.weather.length; i++) {
// // 	results += json.weather[i].description;
// // 	if (i !== json.weather.length - 1)
// // 	  results += ", ";
// //       }
//     //   results += "</p>";
//       document.getElementById("pokeResults").innerHTML = results;
   
//    });
    
});