var _listOfTile = [];
var _noOfTile;
var _tileSize;
var _canvasSize;



//----------------------------------------
// Custom Function(s)
//----------------------------------------
function SetupWindow()
{
    _canvasSize = createVector(1000, 1000);
    createCanvas(_canvasSize.x, _canvasSize.y);
    background(1);
}

function Init()
{
    // Init Tile
    _tileSize = createVector(100, 100);

    _noOfTile = createVector(
        _canvasSize.x / _tileSize.x,
        _canvasSize.y / _tileSize.y
    );

    for(var x = 0; x < _noOfTile.x; ++x)
    {
     _listOfTile[x] = []; //create nested

     for(var y = 0; y < _noOfTile.y; ++y)
     {
         var type = 1; 
         
         // Corners
         if((x == 0 || x == _noOfTile.x-1) || (y == 0 || y == _noOfTile.y - 1))
             type = -1;
         
        var newTile = new Tile(
            createVector(x * _tileSize.x, y * _tileSize.y), 
            createVector(_tileSize.x, _tileSize.y),
            type);
        _listOfTile[x][y] = newTile;
     }
    }
    
}

function DisplayGrids()
{
    // Draw Map
    for(var x = 0; x < _noOfTile.x; ++x)
    {
     for(var y = 0; y < _noOfTile.y; ++y)
     {
      _listOfTile[x][y].renderAll();
     }
    }
    
}


//----------------------------------------
// Main Function(s)
//----------------------------------------
function setup() {
    SetupWindow();
    Init();
}


function draw() {
    DisplayGrids();
}
