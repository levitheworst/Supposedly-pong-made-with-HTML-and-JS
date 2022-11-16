const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 800
canvas.height = 600

canvas.height = window.innerHeight-50
canvas.width = canvas.height*8/6

ctx.scale(canvas.width/800, canvas.height/600)

const userInput = {
    up1: false,
    left1: false,
    down1: false,
    right1: false,
    up2: false,
    left2: false,
    down2: false,
    right2: false
}

window.addEventListener('keydown', (event) => {
    switch(event.key.toString().toLowerCase()) {
        case 'w':
            userInput.up1 = true
            break
        case 'arrowup':
            userInput.up2 = true
            break
        case 'a':
            userInput.left1 = true
            break
        case 'arrowleft':
            userInput.left2 = true
            break
        case 's':
            userInput.down1 = true
            break
        case 'arrowdown':
            userInput.down2 = true
            break
        case 'd':
            userInput.right1 = true
            break
        case 'arrowright':
            userInput.right2 = true
            break
    }
})
window.addEventListener('keyup', (event) => {
    switch(event.key.toString().toLowerCase()) {
        case 'w':
            userInput.up1 = false
            break
        case 'arrowup':
            userInput.up2 = false
            break
        case 'a':
            userInput.left1 = false
            break
        case 'arrowleft':
            userInput.left2 = false
            break
        case 's':
            userInput.down1 = false
            break
        case 'arrowdown':
            userInput.down2 = false
            break
        case 'd':
            userInput.right1 = false
            break
        case 'arrowright':
            userInput.right2 = false
            break
    }
})

//aestheticss
var color = [ { r: 0, g: 0, b: 0, progress: 1 } ]
window.requestAnimationFrame(screenfx)
function screenfx() {
    window.requestAnimationFrame(screenfx)
    color[0].r += Math.random()*5 * color[0].progress
    color[0].g += Math.random()*5 * color[0].progress
    color[0].b += Math.random()*5 * color[0].progress
    if(color[0].r > 255 | color[0].g > 255 | color[0].b > 255) color[0].progress = -1
    if (color[0].r < 0 | color[0].g < 0 | color[0].b < 0) color[0].progress =1
    document.body.style.backgroundColor = `rgb(${color[0].r}, ${color[0].g}, ${color[0].b})`
}