
let _listOfRect = []; // Array of Rect
let _noOfTile;
let _tileSize; 
let _canvasSize;


function Init()
{
    _canvasSize = createVector(1000, 1000);
    
    _tileSize = createVector(100, 100);
    
    _noOfTile = createVector(
        _canvasSize.x / _tileSize.x,
        _canvasSize.y / _tileSize.y        
    );
    print(_noOfTile);
}

function setup() {
    Init();
    createCanvas(_canvasSize.x, _canvasSize.y);
    background(1);
    
    for(let x = 0; x < _noOfTile.x; ++x)
    {
     _listOfRect[x] = []; //create nested 
        
     for(let y = 0; y < _noOfTile.y; ++y)
     {
        let newRect = new Rect(createVector(x * _tileSize.x, y * _tileSize.y), createVector(_tileSize.x, _tileSize.y));
        _listOfRect[x][y] = newRect;         
     }
    }
}


function draw() {
    for(let x = 0; x < _noOfTile.x; ++x)
    {
     for(let y = 0; y < _noOfTile.y; ++y)
     {
      _listOfRect[x][y].render();
     }
    }
}