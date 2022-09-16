    function clock() {
      var clock = new Date();
      var hour = clock.getHours();
      var min = clock.getMinutes();
      var sec = clock.getSeconds();
      var month = clock.getMonth() + 1;
      var day = clock.getDay();
      var year = clock.getFullYear();
      var timeOfDay = (hour < 12) ? "AM" : "PM"

      var liveTime = hour + ":" + min + ":" + sec + timeOfDay;
      var date = "Date: " + month + "/" + day + "/" + year;
        
    // if (document.getElementByid("alarm") === liveTime)
       
       document.getElementById("clock").innerHTML = liveTime;
       document.getElementById("date").innerHTML = date;
       
       
       console.log(clock);
        
    }
    
   setInterval(clock, 1000);
  