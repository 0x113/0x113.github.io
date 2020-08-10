$(document).ready(() => {
	typing()
})
typing = () => {
	var app = document.getElementById('typing')

	let typewriter = new Typewriter(app, {
		loop: true,
		cursor: "_",
		delay: 120 
	})

	typewriter.typeString('Code enthusiast')
		.pauseFor(1500)
		.deleteAll()
		.typeString('Creator')
		.pauseFor(1500)
		.deleteAll()
		.typeString('Minimalist')
		.pauseFor(1500)
		.start();
}
