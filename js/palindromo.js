
// Buscamos las id


const cajaResultado = document.getElementById("resultado");
  const inputTexto = document.getElementById("texto");
const botonMostrar = document.getElementById("mostrar");

 const palindromo = () => {


   let input = inputTexto.value;

   // 1. Limpiamos el texto exactamente igual que antes

   let textoLimpio = input
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "");
        
    if (textoLimpio === "") {
        cajaResultado.innerHTML = "Por favor, escribe una frase primero.";
        return;
    }    

    // 2. Usamos un bucle FOR para verificar si es palíndromo
    let esPalindromo = true; // Asumimos que sí lo es hasta que se demuestre lo contrario
    let largo = textoLimpio.length;
// Recorremos solo hasta la mitad de la palabra
    for (let i = 0; i < largo / 2; i++) {
        // Comparamos la letra de la izquierda con su gemela de la derecha
        if (textoLimpio[i] !== textoLimpio[largo - 1 - i]) {
            esPalindromo = false; // ¡Encontramos una diferencia!
            break;                // Rompemos el bucle, ya no hace falta seguir buscando
        }
    }

    // 3. Mostramos el resultado según lo que haya determinado el bucle
    if (esPalindromo) {
        cajaResultado.innerHTML = `¡Sí! "${input}" es un palíndromo.`;
    } else {
        cajaResultado.innerHTML = `No, "${input}" no es un palíndromo.`;
    }


};


    botonMostrar.addEventListener("click",palindromo);



    
   



  

   





