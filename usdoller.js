const getCountries = () => {
    const xhr =new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType="json";
    
    xhr.onload=()=>{
        var cur=[];
        const countries=xhr.response;
      
        //Print the country which uses US Dollars as currency
        for(let i=0;i<countries.length;i++){
            let isCurrency = countries[i].currencies !== undefined;
            if(isCurrency){
                 let currencyObj = countries[i].currencies;
                 let isUSD  = currencyObj.USD !== undefined;
                 if(isUSD){
                   console.log("Currency USD Country: ",countries[i].name);
                 }

            }
          }
        }
        };
    getCountries();




