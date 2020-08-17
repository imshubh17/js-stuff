import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;
    }
    async getResult(){
        try{
            const result = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            this.data = result.data.recipes;
            
        } catch(err) {
            alert(err);
        }
    }
}