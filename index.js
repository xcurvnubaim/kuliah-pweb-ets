const apikey = "3ee174543fc9524dcfc24ed884c07ecb"
const endpoint = `http://apilayer.net/api/live?access_key=${apikey}&pairs=EURUSD,EURGBP,GBPUSD,USDJPY,AUDUSD,USDCHF,NZDUSD,USDCAD,USDZAR`;

const ifUndefined = {
    "EURUSD": {
        "rate": 1.052216, "timestamp": 1697418604
    },
    "EURGBP": {
        "rate": 0.865748, "timestamp": 1697418604
    },
    "GBPUSD": {
        "rate": 1.215384, "timestamp": 1697418604
    },
    "USDJPY": {
        "rate": 149.479498, "timestamp": 1697418604
    },
    "USDCHF": {
        "rate": 0.9019, "timestamp": 1697418604
    },
    "USDCAD": {
        "rate": 1.364675, "timestamp": 1697418604
    },
    "USDZAR": {
        "rate": 18.99092, "timestamp": 1697418604
    },
    "AUDUSD": {
        "rate": 0.63109, "timestamp": 1697418604
    },
    "NZDUSD": {
        "rate": 0.591004, "timestamp": 1697418604
    }
}

const getData = async () => {
    const res = await fetch(endpoint);
    const data = await res.json();
    const rate = data.quotes;
    const input = ["EURUSD", "EURGBP", "GBPUSD", "USDJPY", "USDCHF", "USDCAD", "USDZAR", "AUDUSD", "NZDUSD"];
    input.map((curr) => {
        document.getElementById(curr).innerText = (rate[curr] ? rate[curr] : ifUndefined[curr].rate);
    })
}
getData();