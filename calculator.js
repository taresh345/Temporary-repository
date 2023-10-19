import express from "express";
import bodyParser from "body-parser";
import https from 'node:https'

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 5173;
const __dirname = process.cwd();

app.get("/", (req, res) => {
  const url ="https://api.worldarchery.sport/?v=3&content=WORLDRANKINGS&CatCode=CM&Page=0"

  https.get(url,(response) => 
  
  response.on("data",(data)=>
{ const archerydata= JSON.parse(data)
console.log(archerydata.items[2].Athlete.GName + " " + archerydata.items[2].Athlete.FName)
}
 
 )
  
  )




  res.send(`server running`);
});




app.listen(port, () => console.log(`server starting on port ${port}...`));
 