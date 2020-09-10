var watermelonPoints = 0;

var smallRobotCount = 0;
var smallRobotBaseCost = 25;
var smallRobotCost = 25;
var smallRobotRate = 1;

var costMultiplier = 1.15;

function cut() {
  watermelonPoints++;
  document.getElementById('watermelonPoints').innerHTML = "Watermelon points: " + watermelonPoints;
}



function buySmallRobot() {
      if(watermelonPoints >= smallRobotCost) {
        smallRobotCount++;
        watermelonPoints = watermelonPoints - smallRobotCost;

        smallRobotCost = updateItemCost(smallRobotBaseCost, smallRobotCount)
        console.log()

        document.getElementById("smallRobotCost").innerHTML = smallRobotCost;
        document.getElementById("smallRobotCount").innerHTML = smallRobotCount
        document.getElementById("watermelonPoints").innerHTML = "Watermelon points" + watermelonPoints;
      }
   }

 window.setInterval(mainLoop, 1000);

 function mainLoop() {
   watermelonPoints = watermelonPoints + (smallRobotCount * smallRobotRate) + (smallRobotCount * smallRobotRate);
   document.getElementById('watermelonPoints').innerHTML = "Watermelon points: " + watermelonPoints.toLocaleString();
   }

   function updateItemCost(baseCost, numberOwned) {
    return Math.round(baseCost * Math.pow(costMultiplier, numberOwned));
   }
