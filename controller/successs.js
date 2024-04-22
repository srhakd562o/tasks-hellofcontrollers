const path = require('path');

exports.getSucess =('/success', (req, res, next)=>{
    //console.log('In  another the middlware')
    
    //res.send('<h1>Hello from Express</h1>');
    res.sendFile(path.join(__dirname,'..','views','success.html'));

});
