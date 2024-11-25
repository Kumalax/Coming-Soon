const textElement = document.getElementById("text");
const text = "Gallery!";
let index = 0;

function typeText() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100); // Kecepatan mengetik
    }
}

// Mulai animasi
typeText();