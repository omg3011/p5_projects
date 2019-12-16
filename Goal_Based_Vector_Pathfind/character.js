class Character
{
    constructor(pos, size, color)
    {
        this.pos = pos;
        this.size = size;
        this.color = color;
    }
    
    
    //------------------------------
    // Render(s)
    //------------------------------
    renderSquare()
    {
        strokeWeight(4);
        stroke(51);
        fill(this.color.x, this.color.y, this.color.z);
        rect(this.getCenter().x, this.getCenter().y, this.size.x, this.size.y);
    }
    
    renderAll()
    {
        this.renderSquare();
    }
    
    
    //------------------------------
    // Getter(s)
    //------------------------------
    getCenter()
    {
        return createVector(
            this.pos.x + this.size.x/2,
            this.pos.y + this.size.y/2);
    }
}