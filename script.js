document.addEventListener("DOMContentLoaded", function() {
    const videoPlayer = document.getElementById("videoPlayer");
    
    const timelineData = [
      {
        LAYER: "VIDEO_2",
        START_TIME: "00:00:02.000",
        END_TIME: "00:00:04.000",
        INSTRUCTION: "EFFECT",
        PROPERTIES: {
          OPACITY: [0, 100]
        }
      }
    ];
    
    function convertTimeStringToSeconds(timeString) {
      const [hours, minutes, seconds] = timeString.split(':').map(Number);
      return hours * 3600 + minutes * 60 + parseFloat(seconds);
    }
  
    videoPlayer.addEventListener("timeupdate", function() {
      const currentTime = videoPlayer.currentTime;
      
      timelineData.forEach(entry => {
        const layer = entry.LAYER;
        const startTime = convertTimeStringToSeconds(entry.START_TIME);
        const endTime = convertTimeStringToSeconds(entry.END_TIME);
        const instruction = entry.INSTRUCTION;
        const properties = entry.PROPERTIES;
  
        if (layer === "VIDEO_2" && instruction === "EFFECT") {
          if (currentTime >= startTime && currentTime <= endTime) {
            const opacityStart = properties.OPACITY[0];
            const opacityEnd = properties.OPACITY[1];
            const factor = (currentTime - startTime) / (endTime - startTime);
            const opacity = opacityStart + (opacityEnd - opacityStart) * factor;
            videoPlayer.style.opacity = opacity / 100;
          }
        }
      });
    });
  });
  

  //https://github.com/zz85/timeliner
  //https://github.com/vorg/timeline.js
  //https://github.com/mrdoob/frame.js/
  //https://github.com/idflood/TweenTime/