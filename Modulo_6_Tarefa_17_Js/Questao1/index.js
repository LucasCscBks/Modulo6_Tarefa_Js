import { selectState } from "./modules/states.js";
import { city,createCity } from "./modules/citys.js";
import { time } from "./modules/weather.js";

const button = document.querySelector('#button');

// Função de criar o Select dos estados utilizando a API //
selectState()
// Função de criar o Select dos estados utilizando a API //

// Função de criar o Select das cidades com a API //
select.addEventListener('change', () => {
    city()
    setTimeout(createCity,500);
});
// Função de criar o Select das cidades com a API//

// Event listener de buscar a previsão e mostrar //
button.addEventListener('click', time);
// Event listener de buscar a previsão e mostrar //



