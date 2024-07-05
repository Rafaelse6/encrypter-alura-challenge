function encryptText() {
  let inputText = document.getElementById("inputText").value;

  let encryptedText = inputText
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  updateTextDisplay(encryptedText);
}

function decryptText() {
  let decryptedText = document.getElementById("inputText").value;
  updateTextDisplay(decryptedText);
}

function updateTextDisplay(text) {
  let textDisplay = document.querySelector(".container__side__messages");
  textDisplay.innerHTML = `
      <div class="text-content">
        <p class="side_message" style="font-size: 1.5rem; margin-top: 0;">${text}</p>
      </div>
    `;

  let imageElement = document.querySelector(".interaction_character");
  if (imageElement) {
    imageElement.remove();
  }
}
