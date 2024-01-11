// Code your solution in this file!
function distanceFromHqInBlocks(a){
    const x = 42;
    let blocks;
    blocks = Math.abs(a - x);
    return blocks;
    }
   
    function distanceFromHqInFeet(a){
      return distanceFromHqInBlocks(a) * 264;
    }
  
    function distanceTravelledInFeet(c, b){
      let disDiff;
      disDiff = Math.abs(b - c);
      return disDiff * 264;
    }
  
    function calculatesFarePrice(c, b){
      const d = distanceTravelledInFeet(c, b);
      if(d <= 400){
        return 0;
      }
      else if(d > 400 && d <= 2000){
        return (d - 400) * 0.02;
  
      } 
      else if(d > 2000 && d <= 2500){
        return 25;
      }
      else {
        return "cannot travel that far";
      }
      }
    
