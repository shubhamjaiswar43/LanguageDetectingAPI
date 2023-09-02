const express = require('express')
const { PythonShell } = require('python-shell');
const path = require('path');
const app = express();
const port = 3000;
const host = 'http://127.0.0.1';

const runModel = async (file,options)=>{
    const response = await PythonShell.run(file,options);
    return response;
}

app.use(express.json());
app.get('/', (req, res) => {
    res.send("Hello User");
})
app.post('/detectlanguage', async(req, res) => {
    const options = {
        args:[req.body.text]
    }
    try{
        const response = await runModel(path.join(__dirname,'languageDetecting.py'),options);
        return res.json({response})
    }catch(err){
        res.send({success:false,msg:err.msg})
    }
    res.send({success:false,msg:"Can't Predict"})
})
app.listen(port, () => {
    console.log(`Server Is Running At ${host}:${port}`);
})