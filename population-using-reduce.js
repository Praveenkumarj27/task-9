const getCountries = () => {
    const xhr =new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType="json";
    
    xhr.onload=()=>{
        const countryData=xhr.response;
        const population=countryData.reduce((acc,element)=>{
            return acc+element.population;
        },0)
        console.log(population);
    };
    };
    getCountries();