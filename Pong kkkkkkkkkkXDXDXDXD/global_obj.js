class Entity {
    constructor({position, size, velocity, behavior, other}) {
        this.position = position
        this.size = size
        this.velocity = velocity

        /*
        this.gravity = gravity
        this.sprite = new Image()
        this.sprite.src = sprite.src
        this.sprite.size = sprite.size
        */
        if(other != undefined) this.other = other
        
        this.update = behavior
    }
}