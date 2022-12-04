var quantidade = document.getElementById("quantidade")
quantidade.addEventListener("keyup", () => {
  // keyup = evento para saber se apertou alguma tecla!
  catchPokemons(quantidade.value)
})

function catchPokemons(quantidade) {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=10" + quantidade)
    .then((response) => response.json())
    .then((allpokemon) => {
      pokemons = []

      allpokemon.results.map((val) => {
        fetch(val.url)
          .then((response) => response.json())
          .then((pokemonSingle) => {
            pokemons.push({
              nome: val.name,
              image: pokemonSingle.sprites.front_default,
            })

            if (pokemons.length == quantidade) {
              // DONE

              var pokemonBoxes = document.querySelector(".pokemon-boxes")
              pokemonBoxes.innerHTML = ""

              pokemons.map((val) => {
                pokemonBoxes.innerHTML +=
                  `
              
                              <div class="pokemon-box">
                              <img
                                src="` +
                  val.image +
                  `"
                                alt="pokemon ditto"
                              />
                              <p>` +
                  val.nome +
                  `</p>
                            </div>
              
              `
              })
            }
          })
      })

      pokemons.map((val) => {
        console.log(val.nome)
      })
    })
}
catchPokemons(15)
