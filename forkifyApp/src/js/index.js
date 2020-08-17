import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements,renderLoader,clearLoader} from './views/base';
const state ={};

const controlSearch = async ()=>{
    // get query from view
    const query = searchView.getInput();
    if (query) {
        state.search = new Search(query);

        searchView.cleanInput();
        searchView.cleanResult();
        renderLoader(elements.searchRes);
        await state.search.getResult();
        clearLoader();
        searchView.renderResult(state.search.data);
        

    }
}

elements.searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    controlSearch();
});

const search = new Search('pizza');

