const axios = require('axios');


const getCharDetail = (res, id ) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(result => result.data)
    .then (data =>{
        let = character = {
            
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species,
            status: data.status,
            origin: data.origin.name
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


module.exports = getCharDetail;