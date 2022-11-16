class Pong_Lvl {
    constructor({bg, fg, other}) {

        if(bg != undefined) this.bg = bg
        else this.bg = [
            /*
            new Entity({
                position: { x: },
                size: { x: 400, y: 100},
                velocity: {},
                behavior: _behavior['Score']
            })
            */
        ]

        this.player = [
            new Entity({
                position: { x: 0, y: 250},
                size: { x: 25, y: 100},
                velocity: { x: 0, y: 0},
                behavior: _behavior['racket_1']
            }),
            new Entity({
                position: { x: 775, y: 250},
                size: { x: 25, y: 100},
                velocity: { x: 0, y: 0},
                behavior: _behavior['racket_2']
            })
        ]

        let sorting = Math.random()
        if(sorting > 0.5) sorting = 200
        else sorting = 575

        this.entities = [
            new Entity({
                position: { x: sorting, y: 275},
                size: { x: 25, y: 25},
                velocity: { x: 0, y: 0},
                behavior: _behavior['pong_ball'],
                other: { rotation: 0 }
            }),
        ]

        if(fg != undefined) this.fg = fg
        else this.fg = [

        ]

        if(other != undefined) this.other = other

        this.update = () => {
            
        }

        this.addScore = (playerIndex) => {
            currentClass.other.score[playerIndex]++
            console.log(currentClass.other.score)
            if(currentClass.other.score[playerIndex] == 10)
                currentClass = new Dodging_Lvl({})
            else {
                let otherplayer = 0
                if(playerIndex == 0) otherplayer = 1

                currentClass.player[0].position = { x: 0, y: 250 }
                currentClass.player[0].velocity = { x: 0, y: 0 }
                currentClass.player[1].position = { x: 775, y: 250 }
                currentClass.player[1].velocity = { x: 0, y: 0 }

                currentClass.entities[0].velocity = { x: 0, y: 0 }
                if(otherplayer == 0)
                    currentClass.entities[0].position.x = 200
                else
                    currentClass.entities[0].position.x = 600 - currentClass.entities[0].size.x
                currentClass.entities[0].position.y = 275
            }
        }
    }
}
class Dodging_Lvl {
    constructor({bg, fg, other}) {
        if(bg != undefined) this.bg = bg
        else this.bg = [

        ]

        this.player = [

        ]

        this.entities = [

        ]

        if(fg != undefined) this.fg = fg
        else this.fg = [

        ]

        if(other != undefined) this.other = other

        this.update = () => {

        }
    }
}

var currentClass = new Pong_Lvl({
    other: {
        score: { 0: 0, 1: 0 },
        tickspan: 0
    }
})

function programLoad() {
    window.requestAnimationFrame(programLoad)
    ctx.clearRect(0, 0, 800, 600)
    currentClass.bg.forEach(element => { element.update() })
    currentClass.player.forEach(element => { element.update() })
    currentClass.entities.forEach(element => { element.update() })
    currentClass.fg.forEach(element => { element.update() })
    currentClass.update()
}
window.requestAnimationFrame(programLoad)