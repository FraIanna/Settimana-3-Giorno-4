const loadButton = document.getElementById("load-button");
const url = "https://api.pexels.com/v1/search";

const replaceImg = function (array) {
  const cardImage = document.querySelectorAll("img");
  cardImage.forEach((img, i) => {
    if (i < array.photos.length) {
      img.src = array.photos[i].src.large;
    }
  });
};

const replaceTitle = function (array) {
  const title = document.querySelectorAll(".card-title");
  title.forEach((card, i) => {
    if (i < array.photos.length) {
      card.textContent = array.photos[i].alt;
    }
  });
};

const replaceSmallText = function (array) {
  const smallText = document.getElementsByTagName("small");
  for (let i = 0; i < buttonGroup.length; i++) {
    smallText[i].innerHTML = array.photos[i].id;
  }
};

const getImage = function () {
  fetch(url + "?query=nature", {
    headers: {
      Authorization: "X8F6Y49baOxejmQ1inFDdVyDVle4uBx5il6kb8fSQ0zzcDTsmyAjQC5M",
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log("ce la puoi fare!");
        return response.json();
      } else {
        throw new Error("Errore nella risposta del server");
      }
    })
    .then((imagesArray) => {
      console.log("insomma", imagesArray);
      replaceSmallText(imagesArray);
      replaceTitle(imagesArray);
      replaceImg(imagesArray);
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
};

loadButton.addEventListener("click", getImage);

const loadSecondaryButton = document.getElementById("secondary-button");

const getSecondaryImage = function () {
  fetch(url + "?query=portrait", {
    headers: {
      Authorization: "X8F6Y49baOxejmQ1inFDdVyDVle4uBx5il6kb8fSQ0zzcDTsmyAjQC5M",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella risposta del server");
      }
    })
    .then((imagesArray2) => {
      console.log("insomma", imagesArray2);
      replaceSmallText(imagesArray2);
      replaceImg(imagesArray2);
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
};

loadSecondaryButton.addEventListener("click", getSecondaryImage);

const buttonGroup = document.getElementsByClassName("btn-group");
for (let i = 0; i < buttonGroup.length; i++) {
  const btnDiv = buttonGroup[i];
  const hideButton = btnDiv.getElementsByClassName("btn")[1];
  hideButton.innerHTML = "Hide";
  hideButton.addEventListener("click", function (e) {
    e.target.closest(".col-md-4").remove();
  });
}
