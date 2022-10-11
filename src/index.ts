import { Application, Sprite, Container } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

const container = new Container();
app.stage.addChild(container);


let centerX = app.screen.width / 2
let centerY = app.screen.height / 2


let elapsed = 0.0;

for (let i = 0; i < 25; i++) {
	const crate: Sprite = Sprite.from("crate.png");
	crate.anchor.set(0.5);
	crate.scale.set(.2);
	crate.x = centerX;
	crate.y = centerY;
	container.addChild(crate);
	app.ticker.add((delta) => {
		elapsed += delta;
		crate.x = centerX + Math.cos(elapsed / 700.0) * 25*i;
		crate.y = centerY + Math.sin(elapsed / 15.0) * 25*i;
		app.stage.addChild(crate);
	});
}
