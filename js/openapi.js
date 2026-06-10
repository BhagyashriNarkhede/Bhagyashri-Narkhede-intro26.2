const API_KEY = "Your-API-Key-Here"; // Replace with your actual API key

const content = document.getElementById("content");

const imageButton = document.getElementById("dogImageBtn");

const breedButton = document.getElementById("breedBtn");

imageButton.addEventListener("click", getDogImage);

breedButton.addEventListener("click", getBreedInfo);


function getDogImage()
{
    fetch("https://api.thedogapi.com/v1/images/search")

    .then(response => response.json())
    .then(data =>{
        content.innerHTML = '<h2>Random Dog</h2>'
        + `<img src="${data[0].url}">`;


    })

    .catch(error => {
        console.log(error);
        content.innerHTML ="Something went wrong";
    });
    }


    //second ApI call
function getBreedInfo()
{

    fetch("https://api.thedogapi.com/v1/breeds",{
        headers: {
            "x-api-key": API_KEY
     }
    })

    .then(response => response.json())
    .then(data => {

        console.log(data);

       let dog = data[Math.floor(Math.random()*data.length)];
         
       content.innerHTML = `<h2>${dog.name}</h2>
         <p><b>Life Span:</b> ${dog.life_span || "N/A"}</p>
         <p><b>Temperament:</b> ${dog.temperament || "No data available"}</p>
            `;
    })
    .catch(error => {
        console.log(error);
        content.innerHTML ="Something went wrong";
    });        
}
