// http://www.html5canvastutorials.com/advanced/html5-canvas-global-composite-operations-tutorial/
// http://jsfiddle.net/m1erickson/JGSJ5/
// http://stackoverflow.com/questions/16045224/marking-the-intersecting-area-between-two-circles-in-canvas
// also closures http://stackoverflow.com/questions/615907/how-is-a-closure-different-from-a-callback
// http://stackoverflow.com/questions/111102/how-do-javascript-closures-work
// nested functions http://stackoverflow.com/questions/9234769/returning-a-value-from-a-nested-function-to-its-parent-without-using-a-callback
// returning multiple values http://stackoverflow.com/questions/2917175/return-multiple-values-in-javascript


//get random numbers, so you can hide the treasure later
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

game = {
    mapWidthX: "700", //defaults here, should be able to set them up in game setup, or per level
    mapHeightY: "500",
    treasures: [],
    scanners: [],
    hideTreasure: function() {
        var treasure = {
            x: null,
            y: null,
            radius: 5,
        };
        treasure.x = getRandomIntInclusive(0, this.mapWidthX);
        treasure.y = getRandomIntInclusive(0, this.mapHeightY);
        this.treasures.push(treasure);
    },
    createScanner: function() {
        var scanner = {
                x: 0,
                y: 0,
                name: "scanner",
                radius: 100,
                active: false,
                treasureInRange: false,
                lookForTreasure: function() {
                  game.treasures.forEach(function(currentValue, index){
                    var distanceBetweenTreasureAndScanner = game.returnDistance(currentValue, this);
                    if (distanceBetweenTreasureAndScanner < this.radius) {
                      this.treasureInRange = true;
                      console.log("TreasureInRange");
                    }
                  }, this);
                }
            };
        scanner.name += this.scanners.length;
        this.scanners.push(scanner);
        view.printScanners();
    },
    returnDistance: function(obj1, obj2) { //expects two objects a and b that each have keys x and y

        var a = obj1.x - obj2.x;
        var b = obj1.y - obj2.y;
        var c = Math.sqrt(a * a + b * b);
        return c;
    },
    repositionScanner: function(scannerNumber,newX,newY){
      this.scanners[scannerNumber].x = newX;
      this.scanners[scannerNumber].y = newY;
      view.drawMap();
    },

};

view = {
    // The two functions below fix pixel ratio for canvas on HiDPI screens. IDK how. http://stackoverflow.com/questions/15661339/how-do-i-fix-blurry-text-in-my-html5-canvas
    PIXEL_RATIO: function() {
        var ctx = document.createElement("canvas").getContext("2d"),
            dpr = window.devicePixelRatio || 1,
            bsr = ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio || 1;
        return dpr / bsr;
    },
    createHiDPICanvas: function(w, h, ratio) {
        if (!ratio) {
            ratio = this.PIXEL_RATIO;
        }
        var can = document.createElement("canvas");
        can.width = w * ratio;
        can.height = h * ratio;
        can.style.width = w + "px";
        can.style.height = h + "px";
        can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
        return can;
    },
    // //Create canvas with the device resolution.
    // var myCanvas = createHiDPICanvas(500, 250);
    // //Create canvas with a custom resolution.
    // var myCustomCanvas = createHiDPICanvas(500, 200, 4);
    //HiDPI canvas generating funcions end here
    createMap: function() {
        var mapDiv = document.querySelector("#map");
        var mapCanvas = view.createHiDPICanvas(game.mapWidthX, game.mapHeightY, 4);
        mapDiv.appendChild(mapCanvas);

    },
    printScanners: function() {
      var ul = document.querySelector('#scannerList');
      ul.innerHTML = '';
      game.scanners.forEach(function(currentValue, index){
        var li = document.createElement('li');
        li.innerHTML = game.scanners[index].name;
        li.id = index;
        li.className = "scannerItem" + " scanner" + index;
        ul.appendChild(li);
      });
    },
    drawCircle: function(x, y, radius) { //ctx - "context", where things get drawn
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.stroke();
    },
    drawScanners: function() {
      game.scanners.forEach(function(currentValue, index){
        view.drawCircle(game.scanners[index].x, game.scanners[index].y, game.scanners[index].radius);
      });
    },
    drawMap: function() {

      var allShapes = game.treasures.concat(game.scanners);
      context.clearRect(0, 0, canvas.width, canvas.height);
      allShapes.forEach(function(currentValue, index) {
        this.drawCircle(allShapes[index].x, allShapes[index].y, allShapes[index].radius);
      }, this);
    },
};


control = {
  currentScanner: 0,
  setUpCoordReporter: function(canvasElement) { // pass in a variable that points to canvas element in HTML
      var that = this;
      function displayCursorPosition(event) {
          // var x = event.pageX - rect.left.toFixed() + 1; //atrodo, kad getBoundingClientRect() yra vienu pixeliu didesnis, nei Canvas pradžia. IDK why, hope it doesn't ruin anything later
          // var y = event.pageY - rect.top.toFixed() + 1;
          var x = event.pageX - canvasElement.offsetLeft; //atrodo, kad getBoundingClientRect() yra vienu pixeliu didesnis, nei Canvas pradžia. IDK why, hope it doesn't ruin anything later
          var y = event.pageY - canvasElement.offsetTop;
          var coordDisplay = document.querySelector('#coordDisplay');
          if (x >= 0 && y >= 0) {
            coordDisplay.innerHTML = "x: " + x + " y: " + y;
            return [x,y];
        } else {return [0,0];}
      }

      function moveCurrentlySelectedScanner(event) {

        var cursorPos = displayCursorPosition;
        // game.repositionScanner(this.currentScanner, cursorPos(event)[0], cursorPos(event)[1]);
        game.repositionScanner(that.currentScanner, cursorPos(event)[0], cursorPos(event)[1]); // currentScanner doesn't work with this, because this is a nested function. cursorPos 0 and 1 are x and Y values from above
        view.drawScanners();
      }

      var returnXY = displayCursorPosition;
      // canvasElement.addEventListener('click', function(event){console.log(returnXY(event));});
      canvasElement.addEventListener('click', function(event){
        moveCurrentlySelectedScanner(event);
      });
      canvasElement.addEventListener('mousemove', displayCursorPosition);
  },



  selectScanner: function(number){
    // might need to refactor the function below to be able to set up more event listeners. or do them all in one fell swoop :)
    // this'll take some doing... need to visualize the available buttons and UI.
  },

  setUpEventListeners: function() {
      // to be able to select Scanners from the list by clicking
      var scannerList = document.querySelector('#scannerList');
      scannerList.addEventListener('click', function(event){
        var elementClicked = event.target;
        var currentSelected = document.querySelector(".scanner"+control.currentScanner); // selecting by class, because ID is just a number for the next part of the function; CSS doesn't like IDs that start with a number
        if (elementClicked.className.includes("scannerItem")){ //includes because I need the className to have the index for the line above; and the id has to just be a number to make the JS work better in the below if statement
          currentSelected.style.fontWeight = "normal";
          elementClicked.style.fontWeight = "bold";
          control.currentScanner = parseInt(elementClicked.id);
          console.log("The selected scanner is: " + elementClicked.id);
        }
      });
  },

};

game.hideTreasure(); // hides the first treasure in treasures array
view.createMap(); //creates canvas

var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d"); // context is where all the draw functions work

control.setUpCoordReporter(canvas);

context.font = "20px Arial";
context.fillText("Hello World", 10, 50);

context.lineWidth = 2;
view.drawCircle(game.treasures[0].x, game.treasures[0].y, 5);
game.createScanner();
game.createScanner();
view.drawScanners();

control.setUpEventListeners();

var allShapes = game.treasures.concat(game.scanners);
view.drawMap();
