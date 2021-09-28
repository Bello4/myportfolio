//https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=API_KEY
/***
async getResult() {
        const API_KEY = 'fb847cdc6649438aadd475852e6d3ee6';
        try {
		const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${API_KEY}`);
          const data = await res.json();   
		  console.log(data);
          //this.result = await res.data.recipe;
        } catch(error) {
          alert(error)
        }

}****/
//getResult();

var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=fb847cdc6649438aadd475852e6d3ee6';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })