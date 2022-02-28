
const dataLoadingBlock =() => {
    const getLoading = document.getElementById("loading");
    getLoading.style.display = "block";
    const getData = document.getElementById("data")
    getData.style.display = "none";
}


const dataLoadingNone =() => {
    const getLoading = document.getElementById("loading");
    getLoading.style.display = "none";
    const getData = document.getElementById("data")
    getData.style.display = "block";
}

 //Fucntion for showing data from api dynamically
const paraText =(country, count) => `
 <p style="text-align: right; background: #0D6EFD; float: right; padding: 10px; border-radius: 50px; line-height: 10px;">${count}</p>        
 <p><img style="width: 30px; height: auto" src="${country.flags.svg}"> <span>${country.name.common} (${country.altSpellings[0]})</span></p>
 <ul>
     <li>Capital: ${country.capital}</li>
     <li>Continent: ${country.continents}</li>
     <li>Timezone: ${country.timezones[0]}</li>
 </ul>
 
<button class="bg-primary" onclick="showMore('${country.name.common}')">Show More</button>
 `;

const showMore = countryName =>{
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(res =>res.json())
    .then(data => showSingleCountryDetails(data));
}


const showSingleCountryDetails = country =>{
    const details = `
        More Details of ${country[0].name.common}:        
        -Population: ${country[0].population}
        -Total Area: ${country[0].area} Square Kilometers
        -Official Name: ${country[0].name.official}
        -Region: ${country[0].region}
        -Subregion: ${country[0].subregion}
        -Independent: ${country[0].independent}
        -Google Maps: ${country[0].maps.googleMaps}        `

        alert(details);
    // console.log(country[0]);
}

//Show all countires
const getAllCountries = () =>{
    dataLoadingBlock();
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showAllCountries(data));
}

const showAllCountries = countries =>{
    let allCountiresDiv = document.getElementById('countries');
    allCountiresDiv.innerHTML = '';
    let count = 1;
    for(const country of countries){
        const createCountryDiv = document.createElement('div');
        createCountryDiv.innerHTML = paraText(country, count);
        allCountiresDiv.appendChild(createCountryDiv);
        count++
    }

    const getCountPara = document.getElementById('country-count');
    getCountPara.innerHTML = `Total Countries: <span style="color: red;">${count-1}</span>`;
    dataLoadingNone();
}


getAllCountries()



//Search by Country Name
document.getElementById('search').addEventListener('click', function(){
     
    const searchInput =document.getElementById("search-input");
    const searchInputValue = searchInput.value;
    searchInput.value = "";    
    const searchLower = searchInputValue.toLowerCase();
    const searchCapitalized =searchLower.charAt(0).toUpperCase() +searchLower.slice(1);
   console.log(searchCapitalized);
    function getSearchCountries(){
        dataLoadingBlock();  
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => showSearchCountries(data));
    }
    
    function showSearchCountries(countries){
        const CountiresDiv = document.getElementById('countries');
        CountiresDiv.innerHTML = '';
        let count = 1;
        for(const country of countries){
            const countryLower = country.name.common.toLowerCase();
            const countryShortFormLower = country.altSpellings[0].toLowerCase();
            if(countryLower.includes(searchLower) || countryShortFormLower.includes(searchLower) || country.capital == searchCapitalized){
                const createCountryDiv = document.createElement('div');
                createCountryDiv.innerHTML = paraText(country, count);
            CountiresDiv.appendChild(createCountryDiv);
            count++
            }
        }
        const getCountPara = document.getElementById('country-count');
        getCountPara.innerHTML = `Showing Result containing: <span style="color: red;">${searchInputValue}</span> <br>Search Result Found: <span style="color: red;">${count-1}</span>`;
        dataLoadingNone();
    }

    getSearchCountries();
    
})


   
    

//Show Asia countires
function getAsiaCountries(){
    dataLoadingBlock();
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showasiaCountries(data));
}

function showasiaCountries(countries){
    const CountiresDiv = document.getElementById('countries');
    CountiresDiv.innerHTML = '';
    let count = 1;
    for(const country of countries){
        if(country.continents == 'Asia'){
            const createCountryDiv = document.createElement('div');
            createCountryDiv.innerHTML = paraText(country, count);
        CountiresDiv.appendChild(createCountryDiv);
        count++
        }
    }
    const getCountPara = document.getElementById('country-count');
    getCountPara.innerHTML = `Total Countries in Asia: <span style="color: red;">${count-1}</span>`;
    dataLoadingNone();
}


//Show Europe countires
function getEuropeCountries(){
    dataLoadingBlock();
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showEuropeCountries(data));
}

function showEuropeCountries(countries){
    const CountiresDiv = document.getElementById('countries');
    CountiresDiv.innerHTML = '';
    let count = 1;
    for(const country of countries){
        if(country.continents == 'Europe'){
            const createCountryDiv = document.createElement('div');
            createCountryDiv.innerHTML = paraText(country, count);
        CountiresDiv.appendChild(createCountryDiv);
        count++
        }
    }
    const getCountPara = document.getElementById('country-count');
    getCountPara.innerHTML = `Total Countries in Europe: <span style="color: red;">${count-1}</span>`;
    dataLoadingNone();
}


//Show North America countires
function getNorthAmericaCountries(){
    dataLoadingBlock();
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showNorthAmericaCountries(data));
}

function showNorthAmericaCountries(countries){
    const CountiresDiv = document.getElementById('countries');
    CountiresDiv.innerHTML = '';
    let count = 1;
    for(const country of countries){
        if(country.continents == 'North America'){
            const createCountryDiv = document.createElement('div');
            createCountryDiv.innerHTML = paraText(country, count);
        CountiresDiv.appendChild(createCountryDiv);
        count++
        }
    }
    const getCountPara = document.getElementById('country-count');
    getCountPara.innerHTML = `Total Countries in North America: <span style="color: red;">${count-1}</span>`;
    dataLoadingNone();
}

//Show South America countires
function getSouthAmericaCountries(){
    dataLoadingBlock();
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showSouthAmericaCountries(data));
}

function showSouthAmericaCountries(countries){
    const CountiresDiv = document.getElementById('countries');
    CountiresDiv.innerHTML = '';
    let count = 1;
    for(const country of countries){
        if(country.continents == 'South America'){
            const createCountryDiv = document.createElement('div');
            createCountryDiv.innerHTML = paraText(country, count);
        CountiresDiv.appendChild(createCountryDiv);
        count++
        }
    }
    const getCountPara = document.getElementById('country-count');
    getCountPara.innerHTML = `Total Countries in South America: <span style="color: red;">${count-1}</span>`;
    dataLoadingNone();
}


//Show Oceania countires
function getOceaniaCountries(){
    dataLoadingBlock();
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showOceaniaCountries(data));
}

function showOceaniaCountries(countries){
    const CountiresDiv = document.getElementById('countries');
    CountiresDiv.innerHTML = '';
    let count = 1;
    for(const country of countries){
        if(country.continents == 'Oceania'){
            const createCountryDiv = document.createElement('div');
            createCountryDiv.innerHTML = paraText(country, count);
        CountiresDiv.appendChild(createCountryDiv);
        count++
        }
    }
    const getCountPara = document.getElementById('country-count');
    getCountPara.innerHTML = `Total Countries in Oceania: <span style="color: red;">${count-1}</span>`;
    dataLoadingNone();
}

//Show Africa countires
function getAfricaCountries(){
    dataLoadingBlock();
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showAfricaCountries(data));
}

function showAfricaCountries(countries){
    const CountiresDiv = document.getElementById('countries');
    CountiresDiv.innerHTML = '';
    let count = 1;
    for(const country of countries){
        if(country.continents == 'Africa'){
            const createCountryDiv = document.createElement('div');
            createCountryDiv.innerHTML = paraText(country, count);
        CountiresDiv.appendChild(createCountryDiv);
        count++
        }
    }
    const getCountPara = document.getElementById('country-count');
    getCountPara.innerHTML = `Total Countries in Africa: <span style="color: red;">${count-1}</span>`;
    dataLoadingNone();
}


//Show Antarctica countires
function getAntarcticaCountries(){
    dataLoadingBlock();
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showAntarcticaCountries(data));
}

function showAntarcticaCountries(countries){
    const CountiresDiv = document.getElementById('countries');
    CountiresDiv.innerHTML = '';
    let count = 1;
    for(const country of countries){
        if(country.continents == 'Antarctica'){
            const createCountryDiv = document.createElement('div');
            createCountryDiv.innerHTML = paraText(country, count);
        CountiresDiv.appendChild(createCountryDiv);
        count++
        }
    }
    const getCountPara = document.getElementById('country-count');
    getCountPara.innerHTML = `Total Countries in Antarctica: <span style="color: red;">${count-1}</span>`;
    dataLoadingNone();
}

