

      const character = document.querySelector('.character');
      character.addEventListener('click', () => {
        character.style.backgroundColor = '#f00';
      });






//Fonctionnalité 1:
function showMessage() {
  alert("Bienvenue Anao Gasy🫵🏻🇲🇬!");
}

//Fonctionnalité 2:
function changeBackground() {
  document.body.style.backgroundColor = "lightblue";
}

//Fonctionnalité 3:
function showImage() {
  var img = document.createElement("img");
  img.src = "img/20230129110919.pngg";
  document.body.appendChild(img);
}

//Fonctionnalité 4:
function showText() {
  var text = document.createElement("p");
  text.innerHTML = "Ceci est un texte supplémentaire.";
  document.body.appendChild(text);
}

//Fonctionnalité 5:
function showLink() {
  var link = document.createElement("a");
  link.href = "https://www.example.com";
  link.innerHTML = "Cliquez ici pour visiter un site externe.";
  document.body.appendChild(link);
}

//Appeler les fonctionnalités
showMessage();
changeBackground();
showImage();
showText();
showLink();























  
