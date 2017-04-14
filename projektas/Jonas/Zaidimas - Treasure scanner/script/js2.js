// http://www.html5canvastutorials.com/advanced/html5-canvas-global-composite-operations-tutorial/
// http://jsfiddle.net/m1erickson/JGSJ5/
// http://stackoverflow.com/questions/16045224/marking-the-intersecting-area-between-two-circles-in-canvas
// also closures http://stackoverflow.com/questions/615907/how-is-a-closure-different-from-a-callback
// http://stackoverflow.com/questions/111102/how-do-javascript-closures-work
// nested functions http://stackoverflow.com/questions/9234769/returning-a-value-from-a-nested-function-to-its-parent-without-using-a-callback
// returning multiple values http://stackoverflow.com/questions/2917175/return-multiple-values-in-javascript

//Extend Array prototype so I can compare two arrays for common things (to see if two scanners see the same )
// Array.prototype.diff = function(arr2) {
//     var ret = [];
//     this.sort();
//     arr2.sort();
//     for(var i = 0; i < this.length; i += 1) {
//         if(arr2.indexOf( this[i] ) > -1){
//             ret.push( this[i] );
//         }
//     }
//     return ret;
// };

//get random numbers, so you can hide the treasure later
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//check if value is in array, duh.
function isInArray(value, array) {
    return array.indexOf(value) > -1;
}

game = {
    mapWidthX: "900", //defaults here, should be able to set them up in game setup, or per level
    mapHeightY: "700",
    treasures: [],
    scanners: [],
    cargoHold: [{
        name: "Intact armor plates",
        isVisible: true
    }],
    hideTreasure: function() {
        var treasure = {
            x: null,
            y: null,
            name: "signature",
            index: this.treasures.length,
            radius: 0,
            seenByScanners: [],
            isVisible: false,
            isItVisible: function() {
                if (this.seenByScanners.length > 0) {
                    this.isVisible = true;
                } else {
                    this.isVisible = false;
                }
            },
        };
        treasure.x = getRandomIntInclusive(this.mapWidthX * 0.1, this.mapWidthX * 0.9);
        treasure.y = getRandomIntInclusive(this.mapHeightY * 0.1, this.mapHeightY * 0.9);
        treasure.name += this.treasures.length;
        this.treasures.push(treasure);

    },
    createScanner: function() {
        var scanner = {
            x: 0,
            y: 0,
            name: "scanner",
            radius: 100,
            active: false,
            isVisible: true, //currently needed to see if signatures are visible and should be printed. All scanners visible by default, all treasures - not
            treasuresInRange: false,
            whichTreasuresInRange: [],
            // iterates over the treasures list
            //measures the distance between this scanner and each treasure
            // if it's in range, notes which treasures this scanner can see
            // This function is run whenever the scanner is moved.
            lookForTreasure: function() {
                this.whichTreasuresInRange = []; // resets visible treasure array
                game.treasures.forEach(function(currentTreasure, treasureNumber) {
                    var distance = game.returnDistance(currentTreasure, this);
                    var seenByScanners = game.treasures[treasureNumber].seenByScanners; // array that tracks which scanners see this treasure
                    if (distance < this.radius) { // sees if distance between treasure and scanner is smaller than the scanner's radius
                        this.whichTreasuresInRange.push(treasureNumber);
                        seenByScanners.push(game.scanners.indexOf(this));
                    } else {
                        var indexOfScanner = seenByScanners.indexOf(game.scanners.indexOf(this)); //holy fuck
                        console.log(indexOfScanner);
                        if (indexOfScanner > -1) { //if the scanner had previously seen this specific treasure
                            seenByScanners.splice(indexOfScanner, 1);
                        }
                    }
                    game.treasures[treasureNumber].isItVisible();
                    view.printElements('#treasureList', game.treasures);
                }, this);
                if (this.whichTreasuresInRange.length > 0) {
                    this.treasureInRange = true;
                    console.log("Treasure is in range");
                } else {
                    this.treasureInRange = false;
                    console.log("No treasure in range");
                }
            }
        };
        scanner.name += this.scanners.length;
        this.scanners.push(scanner);
        view.printElements('#scannerList', this.scanners);
    },
    returnDistance: function(obj1, obj2) { //expects two objects a and b that each have keys x and y

        var a = obj1.x - obj2.x;
        var b = obj1.y - obj2.y;
        var c = Math.sqrt(a * a + b * b);
        return c;
    },
    repositionScanner: function(scannerNumber, newX, newY) {
        this.scanners[scannerNumber].x = newX;
        this.scanners[scannerNumber].y = newY;
        this.scanners[scannerNumber].lookForTreasure();

        view.drawMap();
    },
    loot: function(signatureObject) {
      var recheckTheseScanners = signatureObject.seenByScanners.slice(0); //copies the array
        // recheckTheseScanners.join(signatureObject.seenByScanners);
        // console.log(recheckTheseScanners); //array of scanner numbers
      this.cargoHold.push({name:signatureObject.name, isVisible: true});
      this.treasures.splice(this.treasures.indexOf(signatureObject), 1);
      recheckTheseScanners.forEach(function(scannerNumber){
        game.scanners[scannerNumber].lookForTreasure(); // to check if they still see any signatures and should remain turned on;
      });
      view.drawMap();
      view.printElements('#treasureList', game.treasures);
      view.printElements('#cargoList', game.cargoHold);
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
    printElements: function(id, array) { //scanners and signatures id - which div it should go in; array - which game.* array element comes from
        var ul = document.querySelector(id);
        ul.innerHTML = '';
        array.forEach(function(currentValue, index) {
            if (array[index].isVisible) {
                var li = document.createElement('li');
                li.innerHTML = array[index].name;
                li.id = index;
                li.className = "scannerItem" + " scanner" + index;
                ul.appendChild(li);
            }
        });
    },
    drawCircle: function(x, y, radius) { //ctx - "context", where things get drawn
        context.globalAlpha = 0.33;
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.stroke();
    },
    drawScanners: function() {
        game.scanners.forEach(function(currentValue, index) {
            view.drawCircle(game.scanners[index].x, game.scanners[index].y, game.scanners[index].radius);
        });
    },
    drawMap: function() {

        var allShapes = game.treasures.concat(game.scanners);
        context.clearRect(0, 0, canvas.width, canvas.height);
        allShapes.forEach(function(currentValue, index) {
            this.drawCircle(allShapes[index].x, allShapes[index].y, allShapes[index].radius);
            if (allShapes[index].treasureInRange === true) {
                context.fillStyle = "#000000"; //#ED2939
                context.fill();
            } else {
                context.fillStyle = "#FAFAFA";
                context.fill();
            }
        }, this);
    },
};

control = {
    currentScanner: 0,
    changeSelectedScanner: function() {},
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
                return [x, y];
            } else {return [0, 0];}
        }

        function moveCurrentlySelectedScanner(event) {
            var cursorPos = displayCursorPosition;
            // game.repositionScanner(this.currentScanner, cursorPos(event)[0], cursorPos(event)[1]);
            game.repositionScanner(that.currentScanner, cursorPos(event)[0], cursorPos(event)[1]); // currentScanner doesn't work with this, because this is a nested function. cursorPos 0 and 1 are x and Y values from above
            view.drawScanners();
        }
        var returnXY = displayCursorPosition;
        // canvasElement.addEventListener('click', function(event){console.log(returnXY(event));});
        canvasElement.addEventListener('click', function(event) {
            moveCurrentlySelectedScanner(event);
        });
        canvasElement.addEventListener('mousemove', displayCursorPosition);

        canvas.addEventListener("click", function(e) {
            var clickCoords = {
                x: e.pageX - canvasElement.offsetLeft,
                y: e.pageY - canvasElement.offsetTop
            };
            game.treasures.forEach(function(signatureObject){
              var distance = game.returnDistance(clickCoords, signatureObject);
              if (10 < distance && distance < 20) {console.log("Getting warm");}
              if (distance <= 10) {console.log("You got it, baby!"); game.loot(signatureObject);}
          });
        });
    },
    setUpEventListeners: function() {
        // to be able to select Scanners from the list by clicking
        var scannerList = document.querySelector('#scannerList');
        scannerList.addEventListener('click', function(event) {
            event.stopPropagation(); // does this make my page faster?
            var elementClicked = event.target;
            var currentSelected = document.querySelector(".scanner" + control.currentScanner); // selecting by class, because ID is just a number for the next part of the function; CSS doesn't like IDs that start with a number
            if (elementClicked.className.includes("scannerItem")) { //includes because I need the className to have the index for the line above; and the id has to just be a number to make the JS work better in the below if statement
                currentSelected.style.fontWeight = "normal";
                elementClicked.style.fontWeight = "bold";
                control.currentScanner = parseInt(elementClicked.id);
                console.log("The selected scanner is: " + elementClicked.id);
            }
        });
    },
};

game.hideTreasure();
game.hideTreasure();
game.hideTreasure();
game.hideTreasure();
game.createScanner();
game.createScanner();
game.createScanner();
view.createMap(); //creates canvas
control.setUpEventListeners();

document.querySelector(".scanner" + control.currentScanner).style.fontWeight = "bold"; // seems lame to add this here <- add this into the world generation function or smth?
view.printElements('#cargoList', game.cargoHold);

var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
context.lineWidth = 2; // add this into some sort of world __init function

control.setUpCoordReporter(canvas);

view.drawMap();



function fillBar() {
    var id = setInterval(frame, 20);
    var elem = document.getElementById("myBar");
    var width = 1;
    function frame() {
        if (width >= 500) {
            clearInterval(id);
            game.createScanner();
            fillBar();
        } else {
            width++;
            elem.style.width = 0.2 * width + '%';
        }
    }

}
fillBar();

typeWriter("#para","true");
