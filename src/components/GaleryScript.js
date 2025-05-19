import { mostrarImagenes } from "../api/GaleryServer";

const buscador = document.getElementById("buscador");

buscador.addEventListener('keydown', async (event) =>{
    if(event.key === 'Enter'){
        event.preventDefault();

        const busqueda = buscador.value.trim();
        if(busqueda.length > 0){
            const imagenes = await mostrarImagenes()
        }
    }
})