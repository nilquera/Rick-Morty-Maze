#include<vector>
using std::vector;

#include<string>
using std::string;
using std::to_string;

#include<iostream>
using std::cout;
using std::endl;

class Sprite
{
    private:
    int mortyNum;
    string path;
    int curr;

    public:
    
    Sprite(int mortyNumIn = -1, string pathIn = "frontend/css/pictures/Morty/")
        :mortyNum(mortyNumIn),path(pathIn),curr(0)
    {}
    
    string getImagePath()
    {
        if(mortyNum == -1)
        {
            return path;
        }
        else
        {
            curr = (curr%3)+1;
            return path+to_string(mortyNum)+"-"+to_string(curr);
        }      
    }
};

int main()
{
    Sprite morty(1);
    cout<<morty.getImagePath()<<endl;
    cout<<morty.getImagePath()<<endl;
    cout<<morty.getImagePath()<<endl;
    cout<<morty.getImagePath()<<endl;
    cout<<morty.getImagePath()<<endl;
    cout<<morty.getImagePath()<<endl;
}

