//1.Solving problems using array functions on the rest countries' data 
       //a.Get all the countries from the Asia continent /region using the Filter function

var requset = new XMLHttpRequest();
requset.open("GET" ,"https://restcountries.com/v3.1/all");
requset.send();
requset.onload=function(){
    var result = JSON.parse(requset.response);
    result.filter((countries) => {
        return countries.region ==="Asia";
    })
    console.log(result);
}

//----------------//-----------------//-----------------------//--------------------//

       //b.get all the countries with a population of less than 2 lakes useing filter function
   
   var requset1 = new XMLHttpRequest();
   requset1.open ("GET" ,"https://restcountries.com/v3.1/all");
   requset1.send();
   requset1.onload = function(){
    var result1 = JSON.parse(requset1.response);
     var pop=result1.filter((Element) => {
        return Element.population <200000;
    })
    console.log(pop);
   }

//--------------//---------------//-----------------//-----------------------------//

     //c. print the following details name , capital , flags using function

   var request2 = new XMLHttpRequest();
   request2.open("GET" , "https://restcountries.com/v3.1/all");
   request2.send();
   request2.onload = function(){
    var result2 = JSON.parse(request2 .response);
    result2.forEach(element => {
        console.log(element.name);
        console.log(element.capital);
        console.log(element.flag);
        
    });
    }
   
//--------------//-----------------//-----------------//--------------//
      //d. print the total population of countries useing reduce function 

    
 
var requs = new XMLHttpRequest();
requs.open("GET" ,"https://restcountries.com/v3.1/all" );
requs.send();
requs.onload = function(){
    var resul = JSON.parse(requs.response);
    var total = resul.reduce((acc,curr) => {
        return acc+curr . population;
    } , 0 );
    console.log(total);
}

//------------------//-------------//-------------//---------------//
  //e.prtint the country which uses US Dollours as currency

       var req = new XMLHttpRequest();
         req.open("GET","https://restcountries.com/v3.1/all");
           req.send();
             req.onload=function(){
               var res=JSON.parse(req.response);
                  var currency = res.filter((element) => {
             for(let key in element.currencies){
           if(element.currencies[key].code === "USD"){
      return element;
                }
            }
       })
            console.log(currency);
  }
//-------------------------------------------------------------------------------

        