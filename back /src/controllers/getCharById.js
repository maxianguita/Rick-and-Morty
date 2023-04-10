
const axios = require ('axios');

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(result => result.data)
    .then (data =>{
        let character = {
            id: data.id,
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species
        }
        res
        .writeHead(200, { "content-type": "aplication/json"})
        .end(JSON.stringify(character))
    })
    .catch(err =>
        res
        .writeHead(500, {  "content-type": "text/plain"})
        .end(`el personaje con id:${id} no existe`)
    )
}

module.exports = getCharById;
