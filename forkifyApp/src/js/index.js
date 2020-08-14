import axios from 'axios';

async function getResult(query){
    try{
        const result = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${query}`);
        console.log(result);
    } catch(err) {
        alert(err);
    }
}

getResult('pizza');