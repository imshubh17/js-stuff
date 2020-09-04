import express  from 'express';
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb';
import uri from '../config';

const app = express();
app.use(bodyParser.json());

const withDB = async (operation, res) => {
    try {
        const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
        const db = client.db('articles');
    
        await operation(db)
          
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error });
    }

}

app.get('/api/article/:name',(req, res) => {
    withDB(async (db)=> {
        const articleName = req.params.name;
        const articleInfo = await db.collection('articles').findOne({ name: articleName })
        res.status(200).json(articleInfo);  
    },res);    
});

app.post('/api/article/:name/upvote',(req,res)=>{
    withDB(async (db)=> {
        const articleName = req.params.name;
        const articleInfo = await db.collection('articles').findOne({ name: articleName })
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set':{
                upvote : articleInfo.upvote + 1,            
            }
        })
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(updatedArticleInfo); 
    },res); 
});

app.post('/api/article/:name/add-comment',(req,res)=>{    
    withDB(async (db)=> {
        const articleName = req.params.name;
        const {username, text} = req.body;
        const articleInfo = await db.collection('articles').findOne({ name: articleName })
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set':{
                comments : articleInfo.comments.concat({username,text}),            
            }
        })
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(updatedArticleInfo); 
    },res);       
});

app.listen(8000, ()=>console.log('server listnning...'));