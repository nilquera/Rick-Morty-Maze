
function Maze(sizeIn, mortyNumIn)
{
    if(sizeIn == undefined)
    {
        sizeI = 8;//Default number of rows
    }
    
    this.size = sizeIn;//number of rows

    if(mortyNumIn == undefined)
    {
        mortyNumIn = 1;//Default morty
    }    
    //this.morty= new Sprite(mortyNumIn,"");//morty Sprite

    this.toVisit = [1,2,3,4];//Used in logic -> these variables shouldn't be changed directly, mainpulate columns with generateBoard() 
    this.visited;//Used in logic
    
    this.board = [];//Holds all the columns currently available
    this.score = 0;//Keeps track of which column is at the left-most side of the screen
    
    
    this.playerX = 0;//the player position
    this.playerY = 0;


    this.SQUARE_WIDTH = 51;//Width of each square
    this.WIDTH = this.SQUARE_WIDTH * (sizeIn+3);//Overall canvas width 
    this.SQUARE_HEIGHT = 30;//Height of each square
    this.HEIGHT = this.SQUARE_HEIGHT * sizeIn;//Overall canvas height - depends on this.size
    
    this.canvas = document.getElementById("gc");
    this.canvas.width = this.WIDTH;
    this.canvas.height = this.HEIGHT;
    
    this.context = this.canvas.getContext("2d");
    this.context.fillStyle = "rgb(0,43,54)";
    this.context.strokeStyle = "rgb(131,148,150)";
    
    this.timeLeft = 40;//Amount of time the user has left
    
}


Maze.prototype.setSquare = function(currX, currY)
    {
        
        var nextX;
        var nextY;
        
        this.visited[currY][currX] = true;
        
        for (var i = this.toVisit.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.toVisit[i];
            this.toVisit[i] = this.toVisit[j];
            this.toVisit[j] = temp;
        }   
        
        for(var i = 0; i < this.toVisit.length; i++)
        {
                nextX= currX;
                nextY = currY;
                if(this.toVisit[i] == 1)//North
                {
                    nextY = currY -1;
                }
                else if(this.toVisit[i] == 2)//South
                {
                    nextY = currY + 1;
                }
                else if(this.toVisit[i] == 3)//East
                {
                    nextX = currX+1;
                }
                else if(this.toVisit[i] == 4)//West
                {
                    nextX = currX-1;
                }
                
                
                if(nextX >= 0 && nextX < this.size && nextY >= 0 && nextY < this.size && (!this.visited[nextY][nextX]))//Valid, non-visited index
                {   
                    
                    if(this.toVisit[i]==1)
                    {  
                        this.board[currY][currX][0] = 0;
                        this.board[nextY][nextX][1] = 0;
                    }
                    else if (this.toVisit[i] == 2)
                    {   
                        this.board[currY][currX][1] = 0;
                        this.board[nextY][nextX][0] = 0;                        
                    }
                    else if (this.toVisit[i] == 3)
                    {
                        this.board[currY][currX][2] = 0;
                        this.board[nextY][nextX][3] = 0;                                          
                    }
                    else if (this.toVisit[i] == 4)
                    {   
                        this.board[currY][currX][3] = 0;
                        this.board[nextY][nextX][2] = 0;                                         
                    }
                    
                    this.setSquare(nextX,nextY);
                }
                
            }
    }

Maze.prototype.generateBoard = function()//Generates a new board - Algorithm detailed at http://weblog.jamisbuck.org/2010/12/27/maze-generation-recursive-backtracking
{        
    var tempBoard = [];
    var tempVisited = [];
    
    
    for(var i= 0; i< this.size; i++)
    {
        tempBoard.push([]);
        tempVisited.push([]);
        for(var j = 0; j < this.size; j++)
        {
            tempBoard[i].push([1,1,1,1]);
            tempVisited[i].push(false);
        }
        
    }
    
    this.board = tempBoard;
    this.visited = tempVisited;
    
    var startX = 0;
    var startY = 0;
    
    
    this.setSquare(startX,startY);
    
    this.board[0][0][3] = [0,0,0,0];
    this.board[this.size-1][this.size-1] = [0,0,0,0];
    
    for(var i = 0; i < this.size; i++)
    {
        for(var j=0; j < this.size; j++)
        {
            for(var k=0; k < 4; k++)
            {
                if(Math.random()*100 <=10)
                {
                    this.board[i][j][k] = 0;
                }
            }
        }
    }
    
    
    for(var i=0; i < 3; i++)//Adds buffer area inbetween each one
    {
        this.board.push([]);
        this.board[i].push([1,0,0,0]);
        for(var j=1; j < this.size; j++)
        {
            this.board[i].push([0,0,0,0]);
        }
    }
}

Maze.prototype.draw = function()
{
    this.context.fillRect(0,0,this.WIDTH,this.HEIGHT);    
        
    for(var i=0; i < this.size; i++)
    {
        for(var j=0; j < this.size; j++)
        {   
            this.context.beginPath()
            this.context.moveTo(i*this.SQUARE_WIDTH, j*this.SQUARE_HEIGHT);
            if(this.board[i][j][0]==1)//North wall
            {
                this.context.lineTo(i*this.SQUARE_WIDTH,(j+1)*this.SQUARE_HEIGHT);
            }
            else
            {
                this.context.moveTo(i*this.SQUARE_WIDTH,(j+1)*this.SQUARE_HEIGHT); 
            }
            if(this.board[i][j][2]==1)//East Wall
            {
                this.context.lineTo((i+1)*this.SQUARE_WIDTH,(j+1)*this.SQUARE_HEIGHT);
            }
            else
            {
                this.context.moveTo((i+1)*this.SQUARE_WIDTH,(j+1)*this.SQUARE_HEIGHT); 
            }
            if(this.board[i][j][1]==1)//South wall
            {
                this.context.lineTo((i+1)*this.SQUARE_WIDTH,j*this.SQUARE_HEIGHT);
            }
            else
            {
                this.context.moveTo((i+1)*this.SQUARE_WIDTH,j*this.SQUARE_HEIGHT); 
            }
            if(this.board[i][j][3]==1)
            {
                this.context.lineTo(i*this.SQUARE_WIDTH,j*this.SQUARE_HEIGHT);
            }
            else
            {
                this.context.moveTo(i*this.SQUARE_WIDTH,j*this.SQUARE_HEIGHT); 
            }
            this.context.stroke();       
        }
    }
    
    this.context.clearRect(this.playerY*this.SQUARE_WIDTH +1, this.playerX*this.SQUARE_HEIGHT+1,this.SQUARE_WIDTH-2,this.SQUARE_HEIGHT-2);
}

Maze.prototype.update = function(event)
{
    
    var curr = this.board[this.playerY][this.playerX];
    if(event.keyCode == 37 && curr[0]==0)
    {
        this.playerY = this.playerY -1;
    }
    else if(event.keyCode == 39 && curr[1]==0)
    {
        this.playerY = this.playerY + 1;
    }
    else if(event.keyCode == 40 && curr[2]==0)
    {
        if(this.playerX == this.size+2)
        {
            if(this.player[y] == 0)
            {
                this.generateBoard();
                this.playerX = 0;
            }
        }
        else
        {
            this.playerX = this.playerX +1;
        }
    }
    else if(event.keyCode == 38 && curr[3]==0 && this.playerX != 0)
    {
        this.playerX = this.playerX - 1;
    }
}


var maze = new Maze(30,1);
maze.generateBoard();
document.addEventListener('keydown', function(event){maze.update(event);});
function mainLoop()
{ 
   maze.draw();
}
var ONE_FRAME_TIME = 1000/15;
setInterval( mainLoop, ONE_FRAME_TIME );

/*
function Sprite()
{
    this.mortyNum;
    this.path;
    this.curr = 0;
}

Sprite.prototype.initialise(mortyNum,path)
{
    this.mortyNum = mortyNum;
    this.path = path;
}

Sprite.prototype.getImagePath()
{
    curr = (curr%3)+1;
    return path+mortyNum+"-"+curr;
}
*/

//3.Adding the timer and how to stop
















