document.getElementById("pokeSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("nameInput").value;
  if (value === "")
    return;
  console.log(value);
      

 /* global fetch */
    const url = 'https://pokeapi.co/api/v2/pokemon/' + value;

        fetch(url)

          .then(function(response) {
            console.log("hello");
            return response.json();

          }).then(function(json) {

            console.log(json);
            console.log(json.name);
            
            var pokeinfo='';
       let results = json;
      pokeinfo += '<h2 class="txt">Name:   ' + results.name + "<br></h2>";
      pokeinfo += '<h2 class="txt">Type:   ' + results.types[0].type.name + "<br></h2>";
      pokeinfo += '<h2 class="txt">Top Move(s):<br><br>'+ results.moves[0].move.name+'<br>';
      
        for (let i=1; i < results.moves.length; i++) {
          pokeinfo +=results.moves[i].move.name+'<br>';
          if(i == 3){
            i = results.moves.length;
          }
        }
        pokeinfo += '</h2>';
      
       pokeinfo += '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + results.id + '.png" height="400" width="400"/>';
    
       document.getElementById("pokeResults").innerHTML = pokeinfo;

  });

});