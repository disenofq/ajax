const APIURL =" https://pokeapi.co/api/v2/pokemon/";
const pokeid = $(`#pokemonid`)

const renderData = (pokemon) => {
    const pokedex = $('#pokedex');
    pokedex.prepend(`
            <div class="card" style="width: 18rem;">
                <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${pokemon.name}</h5>
                    <ul>
                        <li>Pokemon Id:${pokemon.id} </li>
                        <li>Height: ${pokemon.height}</li>
                        <li>Weight: ${pokemon.weight}</li>
                    </ul>
                </div>
            </div>
            `);
}

const getData = (valorIdPokemon) => {
    $.ajax({
        method: "GET",
        url: APIURL+ `${valorIdPokemon}`,
        success: (respuesta) => {
            console.log(respuesta);
        renderData(respuesta);
        },
        error: () => {
            alert('Algo ha salido mal');
        }
    })    
}


// $(document).ready(function() {
//     getData();
// });


$('#renderPokemon').click(()=>{
    let valorIdPokemon = Number(pokeid[0].value);
    console.log(valorIdPokemon);
    if(Number.isInteger(valorIdPokemon) && valorIdPokemon >0 && valorIdPokemon <899 ){
        getData(valorIdPokemon);
    }
   else {
       alert('Debe ser un número entero entre 1 y 898');
   }
})