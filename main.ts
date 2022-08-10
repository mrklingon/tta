input.onButtonPressed(Button.A, function () {
    Ship.turn(Direction.Left, 45)
})
input.onButtonPressed(Button.AB, function () {
    Speed += 2
})
input.onButtonPressed(Button.B, function () {
    Ship.turn(Direction.Right, 45)
})
let Ship: game.LedSprite = null
let Speed = 0
Ship = game.createSprite(2, 2)
basic.forever(function () {
    if (0 < Speed) {
        Ship.move(1)
        basic.pause(100)
        Ship.ifOnEdgeBounce()
        Speed += -0.25
    }
})
