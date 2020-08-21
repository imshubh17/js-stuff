const express = require('express');

const router = express.Router();

module.exports =()=>{
    router.get('/', (request,response)=>{
        return response.send('speakerslist-title');
    });
    router.get('/:shortname', (request,response)=>{
        return response.send(`detail page of ${request.params.shortname}`);
    });
   
    return router;
}

