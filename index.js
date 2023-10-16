const endpoint = "http://10.199.13.243:81/currency.json";

const getData = async (str) => {
    const res = await fetch(endpoint, {mode:'no-cors'});
    const data = await res.json();
    return data.rates[str]; 
}

console.log(getData("EURUSD"));