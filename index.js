const apikey = "3ee174543fc9524dcfc24ed884c07ecb"
const endpoint = `http://apilayer.net/api/live?access_key=${apikey}&pairs=EURUSD,EURGBP,GBPUSD,USDJPY,AUDUSD,USDCHF,NZDUSD,USDCAD,USDZAR`;

const getData = async () => {
    const res = await fetch(endpoint);
    const data = await res.json();
    const rate = data.quotes;
    const input = ["EURUSD","EURGBP", "GBPUSD", "USDJPY","USDCHF", "USDCAD", "USDZAR","AUDUSD","NZDUSD"];
    input.map((curr)=>{
        document.getElementById(curr).innerText = rate[curr];
    })
}
getData();