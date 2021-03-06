import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements,renderLoader,clearLoader} from './views/base';
const state ={};

const controlSearch = async ()=>{
    // get query from view
    const query = searchView.getInput();
    if (query) {
        state.search = new Search(query);

        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        await state.search.getResult();
        clearLoader();
        searchView.renderResults(state.search.data);
        

    }
}

elements.searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.data, goToPage);
    }
});

