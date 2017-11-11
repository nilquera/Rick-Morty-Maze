function Maze()
{
    this.size;//Number of rows, an input
    this.nextNum;//Used in logic, ignore

    this.curr = [];//Used in logic, ignore -> these two variables shouldn't be used directly, mainpulate columns with generateRow() and getRow()
    this.next = [];//Used in logic, ignore
    
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
    this.nextNum = size;
    for(var i=0; i < size;i++)//Default fills the first row, part of logic
    {
        curr.push(i);
    }
    
    for(int i=0; i <(temp(num of horizontal squares)); i++)//Fills the board for the first time
    {
        this.generateRow();
        board.push(this.getRow());
    }
    
    if(mortyNum == undefined)
    {
        mortyNum = 1;//Default morty
    } 
    this.morty= new Sprite(mortyNum,(temp(path of morty images));
    this.HEIGHT = this.SQUARE_HEIGHT * (size+2);        
}

Maze.prototype.getRow = function()//Returns output in easier format - 1 for bottom wall,2 for side wall, 3 for both
{
    ret = []
    for(int i=0; i < size; i++)
    {
        ret.push(0)
        if((i!=size-1) && curr[i] != curr[i+1])
        {
            ret[i]+=1;
        }       
        if(curr[i] != next[i])
        {
           ret[i]+=2;               
        }
    }
    return ret;
}

Maze.prototype.generateRow = function()//Generates a new row - Algorithm detailed at http://weblog.jamisbuck.org/2010/12/29/maze-generation-eller-s-algorithm
{        
    curr = next;
        
    for(var i=0; i < size; i++)//Merging adjacent sets
    {
        if((Math.random()<0.5 && curr[i] != curr[i+1] )
        {
            curr[i+1] = curr[i];
            i++;
        }
    }
        
               
    next = [];
    for(var i=0; i < size; i++)
    {
        next.push(0);
    }   
        
    var space = true;
    for(var i=0; i < size; i++)//Adding links to next row
    {
        space = false;
        for(var j=i;curr[j] == curr[j+1];j++)//Loops through each set
        {
            
            if( (Math.random()<0.5)
            {
                next[j] = curr[j];
                space = true;
            }
            i++;
        }
        if(!space)
        {
            next[i] = curr[i];//At this point j is the last index in that set
        }
    }
        
        
    for(var i=0; i < size; i++)
    {
        if(next[i] == 0)
        {
            next[i] = nextNum++;
        }
    }    
}

Maze.prototype.addRow = function()//Generates a new row and adds it to the end of the board
{
    this.score++;
    if(score%10 == 0)
    {
        this.timeLeft += 10;
    }
    board = board.splice(index,1);
    this.generateRow();
    board.push(this.getRow())
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















































