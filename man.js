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

      const h3 = document.createElement('div');
      h3.classList.add('country')
      h3.innerText = country.name;
      container.appendChild(h3);

      const p = document.createElement('p');
      p.classList.add('countryTwo')
      p.innerText = country.capital;
      h3.appendChild(p);


        console.log(country)

  });


}
      




countryData()