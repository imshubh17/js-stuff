const express = require('express');

const router = express.Router();

module.exports =()=>{
    router.get('/', (request,response)=>{
        return response.send('feedback page');
    });
    router.post('/', (request,response)=>{
        return response.send('feedback-form posted');
    });
   
    return router;
}

