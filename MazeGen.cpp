//Algorithm detailed at http://weblog.jamisbuck.org/2010/12/29/maze-generation-eller-s-algorithm

#include<vector>
using std::vector;

#include<iostream>
using std::cout;
using std::endl;

#include<cstdlib>
using std::rand;

class MazeGen
{
    private:
    vector<int> curr;
    vector<int> next;
    int size;
    int nextNum;
    int wallChance;
    
    public:
    
    void display(vector<int> disp)
    {
        cout<<"|";
        
        cout<<"|";
        cout<<endl;
    }
    
    void output()
    {
        
        cout<<"|"
        for(int i=0; i < size; i++)
        {            
            if(curr[i] == next[i])//
            {
                if(rand()%(int)(wallChance*60) < wallChance)
                {
                    cout<<"8";
                }
                else
                {
                    cout<<" ";
                }
            }
            else
            {
                cout<<"_";
            }
            if(curr[i] != curr[i+1] && (rand()%(int)(wallChance*1.3)) < wallChance)
            {
                cout<<"0";
            }
            else
            {
                cout<<" ";
            }
        }
        cout<<"|"<<endl;
    }
    
    void generate()
    {
        
        curr = next;
        
        for(int i=0; i < size; i++)//Merging adjacent sets
        {
            if( (rand()%(wallChance*2))<wallChance && curr[i] != curr[i+1] )
            {
                curr[i+1] = curr[i];
                i++;
            }
        }
        
               
        next = vector<int>(size);   
        
        bool space;
        for(int i=0; i < size; i++)//Adding links to next row
        {
            space = false;
            for(int j=i;curr[j] == curr[j+1];j++)//Loops through each set
            {
                if((rand()%(wallChance*2))<wallChance)
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
        
        
        for(int i=0; i < size; i++)
        {
            if(next[i] == 0)
            {
                next[i] = nextNum++;
            }
        }
        
    }
    
    
    MazeGen(int sizeIn,int wallChanceIn = 5)
        :size(sizeIn),wallChance(wallChanceIn),nextNum(size)
    {
        for(int i=0; i < size; i++)
        {
            next.push_back(i);
        }
        
        int run = 50;
        
        while(run)
        { 
            generate();           
            output();
            run--;
        }
    }    
    
};

int main()
{
    MazeGen maze(16);
}
