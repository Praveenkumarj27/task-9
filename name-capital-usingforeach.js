const getCountries = () => {
    const xhr =new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType="json";
    
    xhr.onload=()=>{
        const countryData=xhr.response;
        countryData.forEach((element)=>{
            console.log(element.name,element.capital,element.flag);
        })
    };
    };
    getCountries();



