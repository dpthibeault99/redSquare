function Player() {

    //player postion
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;

    // player size
    this.width = 100;
    this.height = 100;

    // player color
    this.color = "#ff0000"

    // function in a function ???
    this.draw = function(){

        context.save();
            context.fillStyle = this.color
            context.translate(this.x,this.y);
            context.fillRect(   (-this.width / 2) , (-this.height / 2 ), this.width, this.height   );
        context.restore();

    }

}