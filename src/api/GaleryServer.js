export async function mostrarImagenes() {

    const galeria = document.getElementById("galeria");
    galeria.innerHTML = 'Cargado imagenes...';

    const buscador = document.getElementById("buscador").value;
    const per_page = document.getElementById("cantidad").value;

    try{
        const responce = await fetch('http://localhost:5000/api/auth/galeri', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                query: buscador || null,
                per_page: parseInt(per_page) || null
            })
        });

        const data = await responce.json();
        console.log(data);
        

        galeria.innerHTML = ' ';

        if(data.photos && data.photos.length>0){
            data.photos.forEach(photos => {
                const img = document.createElement('img');
                img.src = photos.src.medium;
                img.alt = photos.photographer;
                img.style.margin = '10px';
                img.style.maxWidth = '300px';
                galeria.appendChild(img)
            });
        }else {
            galeria.innerHTML = 'No se encontro imagenes.';
        }
    } catch (error){
        galeria.innerHTML = 'Error al cargar imagenes.'
        console.log(`Error al cargar imagenes`, error);
        
    }
}