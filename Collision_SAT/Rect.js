class Rect
{
    constructor(pos, size)
    {
        this.pos = pos;
        this.size = size;
        this.bCollided = false;
    }
    
    render()
    {
        strokeWeight(4);
        stroke(51);
        if(this.bCollided)
            fill('rgb(0,255,0)');
        else
            fill('red');
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
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