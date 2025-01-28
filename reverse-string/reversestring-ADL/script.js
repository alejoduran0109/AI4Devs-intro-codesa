function invertText() {
    // Obtener el valor del input
    const textInput = document.getElementById("textInput").value;

    // Invertir la cadena de texto
    const invertedText = textInput.split('').reverse().join('');

    // Mostrar el resultado
    document.getElementById("result").textContent = `Texto invertido: ${invertedText}`;
}
