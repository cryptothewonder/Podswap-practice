const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const comedian = {
    'paul f. thompkins':{
        'occupation': 'comedian',
        'price': 300,
        'guest': true,
        'host': true,
    },
    'robert evans':{
        'occupation': 'reporter',
        'price': 250,
        'guest': false,
        'host': true,
    },
    'unknown':{
        'occupation': 'unknown',
        'price': 0,
        'guest': false,
        'host': false,
    }
}

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
    
})

app.get('/api/:name', (request, response) =>{
    const guestName = request.params.name.toLowerCase()
    if(  comedian[guestName]  ){
        response.json(comedian[guestName])
    }else{
        response.json(comedian['unknown'])
    }
    // response.json(comedian)
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on ${PORT}, you better go catch it.`)
})