

const listaPokemon = document.querySelector("#listaPokemon");
const btnNav = document.querySelectorAll(".btn-header");

let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++){
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => mostrarPokemon(data));
}

function mostrarPokemon(data) {

    let tipos = data.types.map((type) => `<p class="${type.type.name} type">${type.type.name}</p>
        `);
    tipos = tipos.join('');



  const div = document.createElement("div");
  div.classList.add("pokemon");
  div.innerHTML = `
    <p class="pokemon-id-back">${data.id}</p>
    <div class="pokemon-img">
      <img src="${data.sprites.other["official-artwork"].front_default}" alt="pikachu">
    </div>
    <div class="pokemon-info">
      <div class="name-pokemon">
        <h2 class="name">${data.name}</h2>
      </div>
      <div class="type-pokemon">
            ${tipos}
      </div>
    </div>
    `;
    listaPokemon.append(div);
}

