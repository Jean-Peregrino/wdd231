// Selecciona elementos HTML
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Define la URL de la API
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7499&lon=6.6371&units=metric&appid=43fbcab249dd7df0430bd7c33d6f700e';

// Función asincrónica para obtener datos de la API
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        // displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

// Función para mostrar resultados en la página
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;C`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const desc = data.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
}
