function printcity(){
    const city = document.querySelector(".cityname").value;

    document.querySelector(".city").innerHTML = city;
    checkweather(city);    
}
async function checkweather(city){
    const apikey = "baf782078fe4d941c90ebde28551b51b";
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const response = await fetch(apiurl+city+`&appid=${apikey}`);
    const data = await response.json();
    
    console.log(data);
    const temper = data.main.temp;
    const humidi = data.main.humidity;
    const windi = data.wind.deg;
    const image = data.weather[0].main;
    const image2 = document.querySelector(".weather-icon");
    console.log(image);
    if(image == "Mist"){
        image2.src = "images/mist.png";
    }
    else if(image == "Clouds"){
        image2.src = "images/clouds.png";
    }
    else if(image == "Clear"){
        image2.src = "images/clear.png";
    }
    else if(image == "Rain"){
        image2.src = "images/rain.png";
    }
    else if(image == "Drizzle"){
        image2.src = "images/drizzle.png";
    }

    temp(temper);
    humid(humidi);
    wind(windi);
}
function temp(temp){
     document.querySelector(".temp").innerHTML = temp;
     
}
function humid(humid){
    document.querySelector(".humidity").innerHTML = humid;
}
function wind(wind){
    document.querySelector(".Wind").innerHTML = wind;
}
