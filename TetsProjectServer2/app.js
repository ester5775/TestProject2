const NodeGeocoder = require('node-geocoder');
const express = require('express');
const app = express();
const port = 3000;






app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    next();
});


app.get('/coor/:addressName', async(req, res) => {
   var horizentalLine=0
   var verticalLine=78

console.log("first horizentalLine:"+ horizentalLine);

   var options = {
    provider: 'google',    
    language:'iw',       
    apiKey: 'AIzaSyBxvqGxEvb6ZBnyRTM8isBU_6O-MAfuNiQ', // for Mapquest, OpenCage, Google Premier
    formatter: null // 'gpx', 'string', ...    
     };

     console.log("my api kay:"+ options.apiKey);

     let geoCoder = NodeGeocoder(options);
  
     await geoCoder.geocode(req.query.addressName)
     .then((res)=> {
        horizentalLine=res[0].latitude;
        verticalLine=res[0].longitude;
        
       console.log(res[0].latitude);
     })
     .catch((err)=> {
       console.log(err);
   });
  
   res.send(coordination={horizentalLine,verticalLine});
 
   // requestify.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%203%20%D7%94%D7%9E%D7%A8%D7%A4%D7%90%20%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D%20%D7%99%D7%A9%D7%A8%D7%90%D7%9C&inputtype=textquery&language=iw&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyBxvqGxEvb6ZBnyRTM8isBU_6O-MAfuNiQ').then(function(response) {
    
        // Get the response body
        //response.getBody();
   //});

    
});
//req.query.addressName

app.get('/5add', (req, res) => {
    res.send(address=[
    {addressId:8,addressName:"אליעזרוב 1 ירושלים",requestNum:1},
    {addressId:8,addressName:"ירמיהו 24 ירושלים",requestNum:6},
    {addressId:9,addressName:"הברזל 9 תל-אביב",requestNum:89},
    {addressId:10,addressName:"וואלנמברג 15 תל-אביב",requestNum:15},
    {addressId:11,addressName:"הנחושת 8 תל-אביב",requestNum:7}]);
});





app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});