require("dotenv").config();
const express = require("express");
const app = express();
const axios = require("axios").create();

app.listen(process.env.PORT, () => {
 console.log("Server running on port 4000");
});

//Send Sample message
app.get("/", (req, res, next) => {
  res.json({"message":"Successfully Connected Server. Port:4000"});
 });

 //Send post respose
 app.get("/post", async (req, res) => {
  axios.get(process.env.API_ENDPOINT)
  .then(response => {
    res.end( JSON.stringify(response.data));
  }, error => {
    console.log(error);
  });
	
});