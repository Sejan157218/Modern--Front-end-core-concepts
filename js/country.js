const getCountry = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data =>displayCountry(data))
}

getCountry();

const displayCountry = (countrys) =>{
    const countryDiv = document.getElementById('country');
    
   const countryArray=countrys.map(country=>getCountryHTML(country));
   countryDiv.innerHTML = countryArray.join(' ')
}
const getCountryHTML = country =>{
    return    `
    <div class="div">
    <img class="imgs" src="${country.flag}" alt="">
    <h3>Name : ${country.name}</h3>
    <p>Capital : ${country.capital}</p>
    <button class="button" onclick="countryDetils('${country.name}')">Details</button>
    </div>
        `
}

const countryDetils = countryname =>{
    const url = `https://restcountries.eu/rest/v2/name/${countryname}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data[0]))
}

const displayDetails = detail =>{
    const detailsDiv = document.getElementById('details');
    detailsDiv.innerHTML = `
    <img class="imgs" src="${detail.flag}" alt="">
    <h3>Name : ${detail.name}</h3>
    <p>Capital : ${detail.capital}</p>
    `
}