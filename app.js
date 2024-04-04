// fetch("data.json")
// .then(res=> res.json())
// .then(data=> console.log(data))

const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5678f6afa2mshb5a0f610d57419ep135057jsnc3766216c080',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
};

fetch (url, options)
.then(res=> res.json())
.then(data => data.map(movie => console.log(movie.title)))


