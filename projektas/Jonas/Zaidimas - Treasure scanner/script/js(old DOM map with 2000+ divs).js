//get random numbers, so you can hide the treasure later
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//how big the map will be: passed in to generateMap, hideTreasure
var x = 71;
var y = 43;

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

    hideTreasure: function() {
        //Pick a spot on the map at random and change it to say T instead of X
        var treasureYCoord = getRandomIntInclusive(0, 43);
        var treasureXCoord = getRandomIntInclusive(0, 71);
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
      this.map.forEach(function(yArray, index){ //takes each Y line of the map
        var yCoord = index;
        yArray.forEach(function(xArray, index){ //takes each cell on the X coord
          var xCoord = index;
          var mapCell = document.createElement('div');
          mapCell.innerHTML = xArray;
          mapCell.id = xCoord + ',' + yCoord;
          var mapDiv = document.querySelector('#map');
          mapDiv.appendChild(mapCell);
        }, this);
      }, this);
    }

};


// for testing
// game.generateMap(y,x);
// game.hideTreasure();
// game.convertMapArrayToHTML2();
// var map = document.querySelector("#map");
// var mapArray = game.map;
// console.log(mapArray[0][0])
//
// var mapCell = document.createElement('div')


// index0 code
