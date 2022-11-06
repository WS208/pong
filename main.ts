namespace SpriteKind {
    export const Ball = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ball, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    otherSprite.vx = 0 - otherSprite.vx
    if (sprite == left_paddle) {
        otherSprite.left = sprite.right
        info.changeScoreBy(1)
    } else {
        otherSprite.right = sprite.left
        info.player2.changeScoreBy(1)
    }
})
function Create_ball () {
    boll = sprites.create(assets.image`Ball`, SpriteKind.Ball)
    boll.setBounceOnWall(true)
    boll.setVelocity(80, 80)
}
function Create_Right_paddle () {
    right_paddle = sprites.create(assets.image`Right paddle`, SpriteKind.Player)
    right_paddle.x = 150
    controller.player2.moveSprite(right_paddle, 0, 150)
    right_paddle.setStayInScreen(true)
}
function Create_Left_paddle () {
    left_paddle = sprites.create(assets.image`Left Paddle`, SpriteKind.Player)
    left_paddle.x = 10
    controller.moveSprite(left_paddle, 0, 150)
    left_paddle.setStayInScreen(true)
}
let right_paddle: Sprite = null
let boll: Sprite = null
let left_paddle: Sprite = null
Create_Left_paddle()
Create_Right_paddle()
Create_ball()
effects.starField.startScreenEffect()
