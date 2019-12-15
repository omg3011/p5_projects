class Tile
{
    // Private Variable: #variableName
    
    constructor(pos, size)
    {
        this.pos = pos;
        this.size = size;
    }

    renderTile()
    {
        strokeWeight(4);
        stroke(51);
        fill('blue');
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    }
    
    renderCircle()
    {
        strokeWeight(4);
        stroke(51);
        fill('blue');
        circle(this.getCenter().x, this.getCenter().y, 20);
    }
    
    renderLine(v_from, v_dir, f_length)
    {
        line(v_from.x, v_from.y, 
             v_from.x + v_dir.x * f_length, 
             v_from.y + v_dir.y * f_length);
    }
    
    renderAll()
    {
        this.renderTile();
        this.renderCircle();
        this.renderLine(this.getCenter(), createVector(0, 1), 30);
    }

    getCenter()
    {
        return createVector(
            this.pos.x + this.size.x/2,
            this.pos.y + this.size.y/2);
    }
}
