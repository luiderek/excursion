import { Application, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

const crate: Sprite = Sprite.from("crate.png");

crate.anchor.set(0.5);
crate.scale.set(.2);

let centerX = app.screen.width / 2
let centerY = app.screen.height / 2

crate.x = centerX;
crate.y = centerY;

let elapsed = 0.0;
app.ticker.add((delta) => {
	elapsed += delta;
	crate.x = centerX + Math.cos(elapsed / 50.0) * 100.0;
	crate.y = centerY + Math.sin(elapsed / 50.0) * 100.0;
	app.stage.addChild(crate);
});
