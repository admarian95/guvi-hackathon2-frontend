const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId; 
const dbUrl = 'mongodb://127.0.0.1:27017';
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json())
app.use(cors());
app.listen(PORT,()=>console.log(`Running on ${PORT}`));



app.get('/getAllTheaters',async (req,res)=>{
    try{
    let client = await mongoClient.connect(dbUrl , {useNewUrlParser:true , useUnifiedTopology : true});
    let db = client.db('movie-ticket');
    let data = await db.collection('theater').find().toArray() ; 
    res.status(200).json({'data':data});
    }catch(err){
        res.status(500).json({"error":err});
    }
})


app.get('/:theaterId/screen/:screen',async (req,res)=>{
    try{
    let { screen , theaterId } = req.params;
    let client = await mongoClient.connect(dbUrl , {useNewUrlParser:true , useUnifiedTopology : true});
    let db = client.db('movie-ticket');
    let data = await db.collection('theater').find({"_id":ObjectId(theaterId)}).toArray() ; 
    let screenData = await db.collection('screen').find({"name":screen}).toArray() ; 
    res.status(200).json({'data':data , 'screenData':screenData});
    }catch(err){
        res.status(500).json({"error":err});
    }
})


app.post('/createTheater',async (req,res)=>{
    try{
        console.log(req.body);
    let client = await mongoClient.connect(dbUrl , {useNewUrlParser:true , useUnifiedTopology : true});
    let db = client.db('movie-ticket');
    let data = await db.collection('theater').insertOne(req.body) ; 
    res.status(200).json({'data':data});
    }catch(err){
        res.status(500).json({"error":err});
    }
})

