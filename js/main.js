    function clock() {
      var clock = new Date();
    
        document.getElementById("clock").innerHTML = clock;
    
    }
    
    setTimeout(clock, 1000);
    console.log(clock);

    