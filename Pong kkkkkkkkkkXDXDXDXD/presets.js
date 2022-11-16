const _behavior = {
    'racket_1': () => {
        ctx.fillRect(currentClass.player[0].position.x, currentClass.player[0].position.y, currentClass.player[0].size.x, currentClass.player[0].size.y)
        
        currentClass.player[0].position.x += currentClass.player[0].velocity.x
        currentClass.player[0].position.y += currentClass.player[0].velocity.y

        if((userInput.up1 && userInput.down1)|(!userInput.up1 && !userInput.down1)) {
            if(currentClass.player[0].velocity.y > 0) currentClass.player[0].velocity.y -= 2
            else if(currentClass.player[0].velocity.y < 0) currentClass.player[0].velocity.y += 2
        }
        else {
            if(userInput.up1) if(currentClass.player[0].velocity.y > -10) currentClass.player[0].velocity.y -= 5
            if(userInput.down1) if(currentClass.player[0].velocity.y < 10) currentClass.player[0].velocity.y += 5
        }

        if((userInput.left1 && userInput.right1)|(!userInput.left1 && !userInput.right1)) {
            if(currentClass.player[0].velocity.x > 0) currentClass.player[0].velocity.x -= 2
            else if(currentClass.player[0].velocity.x < 0) currentClass.player[0].velocity.x += 2
        }
        else {
            if(userInput.left1) if(currentClass.player[0].velocity.x > -10) currentClass.player[0].velocity.x -= 5
            if(userInput.right1) if(currentClass.player[0].velocity.x < 10) currentClass.player[0].velocity.x += 5
        }

        if(currentClass.player[0].position.x + currentClass.player[0].velocity.x > 300 - currentClass.player[0].size.x) {
            currentClass.player[0].position.x = 300 - currentClass.player[0].size.x
            currentClass.player[0].velocity.x = 0
        }
        if(currentClass.player[0].position.x + currentClass.player[0].velocity.x < 0) {
            currentClass.player[0].position.x = 0
            currentClass.player[0].velocity.x = 0
        }
        if(currentClass.player[0].position.y + currentClass.player[0].velocity.y > 600 - currentClass.player[0].size.y) {
            currentClass.player[0].position.y = 600 - currentClass.player[0].size.y
            currentClass.player[0].velocity.y = 0
        }
        if(currentClass.player[0].position.y + currentClass.player[0].velocity.y < 0) {
            currentClass.player[0].position.y = 0
            currentClass.player[0].velocity.y = 0
        }

        if(currentClass.player[0].position.x <= currentClass.entities[0].position.x + currentClass.entities[0].size.x + currentClass.entities[0].velocity.x
        && currentClass.player[0].position.x + currentClass.player[0].size.x >= currentClass.entities[0].position.x + currentClass.entities[0].velocity.x
        && currentClass.player[0].position.y <= currentClass.entities[0].position.y + currentClass.entities[0].size.y + currentClass.entities[0].velocity.y
        && currentClass.player[0].position.y + currentClass.player[0].size.y >= currentClass.entities[0].position.y + currentClass.entities[0].velocity.y)
        {
            if(currentClass.player[0].velocity.x != 0) currentClass.entities[0].velocity.x = currentClass.player[0].velocity.x
            if(currentClass.player[0].velocity.y != 0) currentClass.entities[0].velocity.y = currentClass.player[0].velocity.y

            if(currentClass.entities[0].position.x >= currentClass.player[0].position.x + currentClass.player[0].size.x)
                currentClass.entities[0].velocity.x = 5
            if(currentClass.entities[0].position.x + currentClass.entities[0].size.x <= currentClass.player[0].position.x)
                currentClass.entities[0].velocity.x = -5

            if(currentClass.entities[0].position.y >= currentClass.player[0].position.y + currentClass.player[0].size.y)
                currentClass.entities[0].velocity.y = 5
            if(currentClass.entities[0].position.y + currentClass.entities[0].size.y <= currentClass.player[0].position.y)
                currentClass.entities[0].velocity.y = -5
        }
    },
    'racket_2': () => {
        ctx.fillRect(currentClass.player[1].position.x, currentClass.player[1].position.y, currentClass.player[1].size.x, currentClass.player[1].size.y)
        
        currentClass.player[1].position.x += currentClass.player[1].velocity.x
        currentClass.player[1].position.y += currentClass.player[1].velocity.y

        if((userInput.up2 && userInput.down2)|(!userInput.up2 && !userInput.down2)) {
            if(currentClass.player[1].velocity.y > 0) currentClass.player[1].velocity.y -= 2
            else if(currentClass.player[1].velocity.y < 0) currentClass.player[1].velocity.y += 2
        }
        else {
            if(userInput.up2) if(currentClass.player[1].velocity.y > -10) currentClass.player[1].velocity.y -= 5
            if(userInput.down2) if(currentClass.player[1].velocity.y < 10) currentClass.player[1].velocity.y += 5
        }

        if((userInput.left2 && userInput.right2)|(!userInput.left2 && !userInput.right2)) {
            if(currentClass.player[1].velocity.x > 0) currentClass.player[1].velocity.x -= 2
            else if(currentClass.player[1].velocity.x < 0) currentClass.player[1].velocity.x += 2
        }
        else {
            if(userInput.left2) if(currentClass.player[1].velocity.x > -10) currentClass.player[1].velocity.x -= 5
            if(userInput.right2) if(currentClass.player[1].velocity.x < 10) currentClass.player[1].velocity.x += 5
        }

        if(currentClass.player[1].position.x + currentClass.player[1].velocity.x > 800 - currentClass.player[1].size.x) {
            currentClass.player[1].position.x = 800 - currentClass.player[1].size.x
            currentClass.player[1].velocity.x = 0
        }
        if(currentClass.player[1].position.x + currentClass.player[1].velocity.x < 500) {
            currentClass.player[1].position.x = 500
            currentClass.player[1].velocity.x = 0
        }
        if(currentClass.player[1].position.y + currentClass.player[1].velocity.y > 600 - currentClass.player[1].size.y) {
            currentClass.player[1].position.y = 600 - currentClass.player[1].size.y
            currentClass.player[1].velocity.y = 0
        }
        if(currentClass.player[1].position.y + currentClass.player[1].velocity.y < 0) {
            currentClass.player[1].position.y = 0
            currentClass.player[1].velocity.y = 0
        }

        if(currentClass.player[1].position.x <= currentClass.entities[0].position.x + currentClass.entities[0].size.x + currentClass.entities[0].velocity.x
        && currentClass.player[1].position.x + currentClass.player[1].size.x >= currentClass.entities[0].position.x + currentClass.entities[0].velocity.x
        && currentClass.player[1].position.y <= currentClass.entities[0].position.y + currentClass.entities[0].size.y + currentClass.entities[0].velocity.y
        && currentClass.player[1].position.y + currentClass.player[1].size.y >= currentClass.entities[0].position.y + currentClass.entities[0].velocity.y)
        {
            if(currentClass.player[1].velocity.x != 0) currentClass.entities[0].velocity.x = currentClass.player[1].velocity.x
            if(currentClass.player[1].velocity.y != 0) currentClass.entities[0].velocity.y = currentClass.player[1].velocity.y
            
            if(currentClass.entities[0].position.x >= currentClass.player[1].position.x + currentClass.player[1].size.x)
                currentClass.entities[0].velocity.x = 5
            if(currentClass.entities[0].position.x + currentClass.entities[0].size.x <= currentClass.player[1].position.x)
                currentClass.entities[0].velocity.x = -5

            if(currentClass.entities[0].position.y >= currentClass.player[1].position.y + currentClass.player[1].size.y)
                currentClass.entities[0].velocity.y = 5
            if(currentClass.entities[0].position.y + currentClass.entities[0].size.y <= currentClass.player[1].position.y)
                currentClass.entities[0].velocity.y = -5
        }
    },
    'pong_ball': () => {
        if(currentClass.entities[0].velocity.x != 0 | currentClass.entities[0].velocity.x != 0) {
            ctx.rotate(currentClass.entities[0].other.rotation * Math.PI / 180)
            ctx.fillRect(currentClass.entities[0].position.x, currentClass.entities[0].position.y, currentClass.entities[0].size.x, currentClass.entities[0].size.y)
        }
        else ctx.fillRect(currentClass.entities[0].position.x, currentClass.entities[0].position.y, currentClass.entities[0].size.x, currentClass.entities[0].size.y)

        currentClass.entities[0].position.x += currentClass.entities[0].velocity.x
        currentClass.entities[0].position.y += currentClass.entities[0].velocity.y

        if(currentClass.entities[0].position.y + currentClass.entities[0].size.y + currentClass.entities[0].velocity.y >= 600) {
            currentClass.entities[0].position.y = 600 - currentClass.entities[0].size.x
            currentClass.entities[0].velocity.y *= -1
        }
        if(currentClass.entities[0].position.y + currentClass.entities[0].velocity.y <= 0) {
            currentClass.entities[0].position.y = 0
            currentClass.entities[0].velocity.y *= -1
        }
        
        if(currentClass.entities[0].velocity.y > 10) currentClass.entities[0].velocity.y = 10
        if(currentClass.entities[0].velocity.y < -10) currentClass.entities[0].velocity.y = -10

        if(currentClass.entities[0].position.x < 0)
            currentClass.addScore(1)
        else if(currentClass.entities[0].position.x + currentClass.entities[0].size.x > 800)
            currentClass.addScore(0)
    }
}