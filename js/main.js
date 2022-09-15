    function clock() {
      var clock = new Date();
      var hour = clock.getHours();
      var min = clock.getMinutes();
      var sec = clock.getSeconds();
      var month = clock.getMonth();
      
      var liveTime = hour + ":" + min + ":" + sec 
    
    
    
    
       document.getElementById("clock").innerHTML = liveTime;
        console.log(clock);
        
    }
    
   setInterval(clock, 1000);
  