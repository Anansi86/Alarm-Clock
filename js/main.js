    function clock() {
      var clock = new Date();
      var hour = clock.getHours();
      var min = clock.getMinutes();
      var sec = clock.getSeconds();
      var month = clock.getMonth() + 1;
      var day = clock.getDay();
      var year = clock.getFullYear();


      var liveTime = hour + ":" + min + ":" + sec + " Month - " + month + "/" + day + "/" + year;
    
        
    
    
       document.getElementById("clock").innerHTML = liveTime;
        console.log(clock);
        
    }
    
   setInterval(clock, 1000);
  