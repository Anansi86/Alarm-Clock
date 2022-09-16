var liveTime = "";
var x = "";
var alarmSound = new Audio("audio/KZQVUA6-alarm-fire-alarm-buzzer-02.mp3"); 


function clock() {
      var clock = new Date();
      var hour = clock.getHours();
      var min = clock.getMinutes();
      var sec = clock.getSeconds();
      var month = clock.getMonth() + 1;
      var day = clock.getUTCDate();
      var year = clock.getFullYear();
      var timeOfDay = (hour < 12) ? "AM" : "PM"

      liveTime = hour + ":" + min + ":" + sec + timeOfDay;
      var date = "Date: " + month + "/" + day + "/" + year;
        
      
 
       document.getElementById("clock").innerHTML = liveTime;
       document.getElementById("date").innerHTML = date;
       
       
      // console.log(clock);
          console.log(liveTime);
          console.log(x);

            alarmSound.loop = true;

       if (x == liveTime) {    
        document.getElementById("popup").style.display = "block"; alarmSound.play()
        }
    }
 
   setInterval(clock, 1000);
  
   function snooze() {
    
    
alarmSound.pause();
    
        
   }
  
   
   function alarm() {
    x = document.getElementById("alarmNumbers").value;
    document.getElementById("alarmDisplay").innerHTML = x;
    
  }
  

