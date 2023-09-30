const pokemonDetail = document.getElementById('pokemonDetail')

function queryString(parameter) {  
    var loc = location.search.substring(1, location.search.length);   
    var param_value = false;   
    var params = loc.split("&");   
    for (i=0; i<params.length;i++) {   
        param_name = params[i].substring(0,params[i].indexOf('='));   
        if (param_name == parameter) {                                          
            param_value = params[i].substring(params[i].indexOf('=')+1)   
        }   
    }   
    if (param_value) {   
        return param_value;   
    }   
    else {   
        return undefined;   
    }   
}

const pokemonId = queryString("id");

function convertPokemon(pokemon){
    return `
                    
            <div class="pokemonDetail ${pokemon.type} ">
                <a href="index.html"> Voltar </a>
                            
                    <br><br><br>
                    <div class="linha">
                        <span class="name">${pokemon.name} </span>
                        <span class="number">${pokemon.number} </span>
                    </div>
                    <div class="detail">
                        
                            ${pokemon.types.map((type) => `<span class="type ${type}">${type}</span>`).join('')}
                        
                        <br>
                 
                    </div>
                    <br>
                    <div class="imagem">
                        <img src="${pokemon.photo}"
                        alt="${pokemon.name}"> 
                    </div>   
                    <div class="dados">

                        ${pokemon.stats.map((stat) => `<span class="hits">${stat[0]} : ${stat[1]}</span>`).join('')}

                    </div>
            </div>
        
            
    `
}

function loadPokemon() {

    pokeApi.getPokemon(pokemonId).then((pokemon) => {
        const newHtml = convertPokemon(pokemon)
        pokemonDetail.innerHTML += newHtml
    })
}

loadPokemon();