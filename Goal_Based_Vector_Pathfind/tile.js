class Tile
{
    // Private Variable: #variableName
    
    constructor(pos, size, type)
    {
        this.pos = pos;
        this.size = size;
        this.d = -1;
        this.type = type;
    }

    
    //------------------------------
    // Render(s)
    //------------------------------
    renderTile()
    {
        strokeWeight(4);
        stroke(51);
        if(this.type == -1) 
            fill(255, 0, 0);
        else if(this.type == 0) 
            fill(0, 255, 255);
        else
            fill(255, 204, 100);
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    }
    
    renderLetter_Distance()
    {
        textSize(16);
        text(this.d, this.getTopRight().x, this.getTopRight().y);
    }
    
    renderLetter_Type()
    {
        textSize(16);
        text(this.type, this.getBottomLeft().x, this.getBottomLeft().y);
    }
    
    renderCircle()
    {
        strokeWeight(4);
        stroke(51);
        fill(0, 255, 0);
        circle(this.getCenter().x, this.getCenter().y, 20);
    }
    
    renderLine(v_from, v_dir, f_length)
    {
        stroke('rgb(255,255,255)'); 
        line(v_from.x, v_from.y, 
             v_from.x + v_dir.x * f_length, 
             v_from.y + v_dir.y * f_length);
    }
    
    renderAll()
    {
        this.renderTile();
        this.renderLine(this.getCenter(), createVector(0, 1), 30);
        this.renderCircle();
        this.renderLetter_Distance();
        this.renderLetter_Type();
    }

    
    //------------------------------
    // Setter(s)
    //------------------------------
    setD(value)
    {
        this.d = value;
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
    
    getTopRight()
    {
        return createVector(
            this.pos.x + this.size.x - this.size.x/6,
            this.pos.y + this.size.y/5
        );
    }
    
    getBottomLeft()
    {
        return createVector(
            this.pos.x + this.size.x/10,
            this.pos.y - this.size.y/10
        );
    }
}
