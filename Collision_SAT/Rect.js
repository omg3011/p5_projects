class Rect
{
    constructor(pos, size)
    {
        this.pos = pos;
        this.size = size;
        this.bCollided = false;
    }
    
    draw()
    {
        noStroke();
        if(this.bCollided)
            fill('rgb(0,255,0)');
        else
            fill('red');
        rect(this.x, this.y, this.width, this.height);
    }
    
    toggleCollided(flag)
    {
        this.bCollided = flag;
    }
    
    getCenter() 
    {
        return createVector(
            this.pos.x + this.size.x/2, 
            this.pos.y + this.size.y/2);
    }
}