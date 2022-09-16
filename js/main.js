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
        
      
      
//        let alarm = prompt("Set Alarm", "");
  //      if (alarm == null || alarm == "") {
    //      text = "User cancelled the prompt.";
      //  } else {
        //  text = "Hello " + alarm + "! How are you today?";
        //}
       // document.getElementById("alarm").innerHTML = text;
      
        
    // if (document.getElementByid("alarm") === liveTime)
       
       document.getElementById("clock").innerHTML = liveTime;
       document.getElementById("date").innerHTML = date;
       
       
       console.log(clock);
        
    }
  
   setInterval(clock, 1000);
  
   function alarm() {
    var x = document.getElementById("alarmNumbers").value;
    document.getElementById("alarmDisplay").innerHTML = x;
  }