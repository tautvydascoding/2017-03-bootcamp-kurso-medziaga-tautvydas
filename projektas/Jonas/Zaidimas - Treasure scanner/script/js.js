//get random numbers, so you can hide the treasure later
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var game = {
    map: [],
    generateMap: function(rows, columns) { //create 2d array
        var arr = [];
        for (var i = 0; i < rows; i++) {
            arr[i] = [];
            for (var c = 0; c < columns; c++) {
                arr[i].push('.');
            }
        }
        this.map = arr;
    },
    // Print the map, line by line
    printMap: function() {
        for (var i = 0; i < this.map.length; i++) {
            console.log(this.map[i]);
        }
    },

    // Print the map, cell by cell
    printMapCell: function() {
        this.map.forEach(function(line) {
            var lineContent = '';
            line.forEach(function(cell) {
                lineContent = lineContent + cell + " ";
            });
            console.log(lineContent);
        });
    },

    hideTreasure: function() {
        //Pick a spot on the map at random and change it to say T instead of X
        var treasureYCoord = getRandomIntInclusive(0, 10);
        var treasureXCoord = getRandomIntInclusive(0, 10);
        this.map[treasureYCoord][treasureXCoord] = 'T'; // Y and X are reversed
    },

    convertMapArrayToHTML: function() {
      this.map.forEach(function(mapLine){
        var lineToPrint = mapLine.join('') + '<br>';
        var p = document.createElement('p');
        p.innerHTML = lineToPrint;
        var mapDiv = document.querySelector('#map');
        // mapDiv.appendChild(p);
        mapDiv.innerHTML += lineToPrint;
      });

    },

    convertMapArrayToHTML2: function() {
      this.map.forEach(function(Y, index){ //takes each Y line of the map
        var yCoord = index;
        Y.forEach(function(X, index){ //takes each cell on the X coord
          var xCoord = index;
          var mapCell = document.createElement('div');
          mapCell.innerHTML = X;
          mapCell.id = xCoord + ',' + yCoord;
          var mapDiv = document.querySelector('#map');
          mapDiv.appendChild(mapCell);
        }, this);
      }, this);
    }

};



// for testing
game.generateMap(43,71);
game.hideTreasure();
game.convertMapArrayToHTML2();
var map = document.querySelector("#map");
var mapArray = game.map;
console.log(mapArray[0][0])

var mapCell = document.createElement('div')


// line.innerHTML = game.map[4].join("") + "<br>"












// var view = {
//   displayMap: function() {
//     var mapElement = document.getElementById('map');
//     var map = game.create2DArray(10,10);
//     this.map.forEach(function(line){ // iterates passes each X-coord array into the next forEach loop
//       line.forEach(function(cell){ // line is the X-coord array
//         console.log(cell);
//       });
//     });
//   }
// };
