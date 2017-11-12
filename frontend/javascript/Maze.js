function Maze()
{
    this.size;//Number of rows, an input

    this.toVisit = [1,2,3,4];//Used in logic -> these variables shouldn't be used directly, mainpulate columns with generateBoard() 
    this.visited;//Used in logic
    
    this.board = [];//Holds all the columns currently available
    this.score = 0;//Keeps track of which column is at the left-most side of the screen
    
    this.morty;//Morty sprite
    this.wall = new Sprite(-1,(temp(location of wall image)));//Wall sprite
    
    this.playerX = 0;//Player position
    this.playerY = 0;
        
    this.SQUARE_WIDTH = (temp);//Width of each square
    this.WIDTH = this.SQUARE_WIDTH * (temp);//Overall canvas width 
    this.SQUARE_HEIGHT = (temp);//Height of each square
    this.HEIGHT;//Overall canvas height - depends on size
    
    this.canvas;
    this.context;
    
    this.timeLeft = 40;//Amout of time the user has left
    
    this.key = {
        RIGHT: {code: 39, pressed:false},
        LEFT : {code: 37, pressed:false},
        UP:    {code: 38, pressed:false},
        DOWN : {code: 40, pressed:false}       
    };
}

Maze.protype.intialize = function(size, mortyNum)
{
    if(size == undefined)
    {
        size =(temp);//Default number of rows
    }
    
    this.size = size;
        
    //Fill the board for the first time
    
    if(mortyNum == undefined)
    {
        mortyNum = 1;//Default morty
    } 
    this.morty= new Sprite(mortyNum,(temp(path of morty images));
    this.HEIGHT = this.SQUARE_HEIGHT * (size+2);        
}

Maze.prototype.setSquare(currX, currY)
    {
        var nextX;
        var nextY;
        
        visited[currY][currX] = true;
        
        for (var i = toVisit.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = toVisit[i];
            toVisit[i] = toVisit[j];
            toVisit[j] = temp;
        }   
        
        for(var i = 0; i < toVisit.length; i++)
        {
                nextX= currX;
                nextY = currY;
                if(next == 1)//North
                {
                    nextY = currY -1;
                }
                else if(next == 2)//South
                {
                    nextY = currY + 1;
                }
                else if(next == 3)//East
                {
                    nextX = currX+1;
                }
                else if(next == 4)//West
                {
                    nextX = currX-1;
                }
                
                
                if(nextX >= 0 && nextX < side && nextY >= 0 && nextY < side && (!visited[nextY][nextX]))//Valid, non-visited index
                {   
                    
                    if(next==1)
                    {  
                        board[currY][currX][0] = 0;
                        board[nextY][nextX][1] = 0;
                    }
                    else if (next == 2)
                    {   
                        board[currY][currX][1] = 0;
                        board[nextY][nextX][0] = 0;                        
                    }
                    else if (next == 3)
                    {
                        board[currY][currX][2] = 0;
                        board[nextY][nextX][3] = 0;                                          
                    }
                    else if (next == 4)
                    {   
                        board[currY][currX][3] = 0;
                        board[nextY][nextX][2] = 0;                                         
                    }
                    
                    this. setSquare(nextX,nextY);
                }
                
            }
    }

Maze.prototype.generateBoard = function()//Generates a new board - Algorithm detailed at http://weblog.jamisbuck.org/2010/12/27/maze-generation-recursive-backtracking
{        
    this.board = [];
    this.visited = [];
    for(var i= 0; i< size; i++)
    {
        this.board.push([]);
        this.visited.push([]);
        var(j = 0; j < size; j++)
        {
            this.board.push([1,1,1,1]);
            this.visited.push([false,false,false,false]);
        }
    }
    
    var startX = 0;
    var startY = 0;
    
    this.setSquare(startX,startY);
}

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
    if(mortyNum == -1)//If it's not a morty sprite
    {
        return path;
    }
    else//If it is a morty sprite
    {
        curr = (curr%3)+1;
        return path+mortyNum+"-"+curr;
    }
}

//TODO: 
//1.Drawing the maze, player, score
//4.When to add new rows
//3.Adding the timer and how to stop
//2.Moving the player















































