

const countryData = ()=> {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response=>response.json())
    .then(data => country_all(data))
}


const country_all = data => {

 
   /* for(const one of data) {
        console.log(one)
    }

    */
    const container = document.getElementById('container');

    data.forEach(country => {

      const div = document.createElement('div');
      div.classList.add("one-container");
      div.innerHTML =`
        <h3>${country.name}</h3>
        <p>${country.demonym}</P> 
        <button onclick="countryOne('${country.name}')">Show here </button>
        `
        container.appendChild(div)


       // console.log(country);

  });


}
      
const countryOne = countryDatatWO =>  {

  const DataOne = `https://restcountries.eu/rest/v2/name/${countryDatatWO}`;
fetch(DataOne)
.then( res => res.json())
.then(data => FinalData(data[0]))

}

const FinalData = DataTwo =>{
  const sub_data = document.getElementById('sub-data');
  sub_data.innerHTML = `
  <h4> ${DataTwo.capital} </h4>
  <h4> ${DataTwo.region} </h4>
  <h4><img width="300px" height="auto"src="${DataTwo.flag}" alt=""></h4>
  `

}



countryData();