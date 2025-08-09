function showTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();  
    document.getElementById('localTime').textContent = timeString;
  }

  setInterval(showTime, 1000); 
  showTime();