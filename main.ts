input.onButtonPressed(Button.A, function () {
    Ship.turn(Direction.Left, 45)
})
input.onButtonPressed(Button.AB, function () {
    Speed += 2
})
input.onButtonPressed(Button.B, function () {
    Ship.turn(Direction.Right, 45)
})
let Xs = 0
let Ship: game.LedSprite = null
let Speed = 0
Ship = game.createSprite(2, 2)
basic.forever(function () {
    if (0 < Speed) {
        Ship.move(1)
        Xs = 5 - Speed
        basic.pause(500 / Xs)
        if (Ship.isTouchingEdge()) {
            if (0 == Ship.get(LedSpriteProperty.X)) {
                Ship.set(LedSpriteProperty.X, 4)
            } else if (4 == Ship.get(LedSpriteProperty.X)) {
                Ship.set(LedSpriteProperty.X, 0)
            }
            if (0 == Ship.get(LedSpriteProperty.Y)) {
                Ship.set(LedSpriteProperty.Y, 4)
            } else if (4 == Ship.get(LedSpriteProperty.Y)) {
                Ship.set(LedSpriteProperty.Y, 0)
            }
        }
        Speed += -0.25
    }
})
