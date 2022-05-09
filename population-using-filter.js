const getCountries = () => {
    const xhr =new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType="json";
    
    xhr.onload=()=>{
        const countries=xhr.response;
        const population=countries.filter((element)=>{
            return element.population<200000;
        })
        console.log(population)
    }

    };
    getCountries();