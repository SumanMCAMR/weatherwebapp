function getData(){
    var cityName= document.getElementById('cityName').value;
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units=metric&appid=e037f1d8e135b031338b081babfe64e5')
.then((response) => {
  return response.json();
})
.then((myJson) => {
  console.log(myJson.main.temp);
  document.getElementById('result').innerHTML=myJson.main.temp +"°C";
}).catch(function(){
  console.log("error");
  document.getElementById("result").innerHTML = "Please Enter Valid City name.";
});
}