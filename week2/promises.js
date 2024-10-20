let myPromise = new Promise(function(myResolve, myReject) {
    let a= Math.random();
    if(a<0.5)
    {
      myReject("No random no for you today");  // when error
    }
    else{
      myResolve("random no is" + a); // when successful
    }
    
      
      
    });
    
    //fetch google.com
    //fetch pictures from server
    //fetch data from data api
    //you will not wait untill each task alone is completed
    //console.log(myPromise);
    

   //notify or do another task when promise is fullfilled
   //use .then
   myPromise.then((value)=>
  {
    console.log(value)
  }).catch((err)=>{
console.log(err)
  })
