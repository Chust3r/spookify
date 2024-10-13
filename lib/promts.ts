const PROMPTS = {
	zombie:
		'A terrifying post apocalyptic cityscape at night with abandoned crumbling buildings and broken windows shrouded in fog The streets are littered with debris overturned cars and faint traces of blood In the distance eerie greenish light spills from a few cracked street lamps Shadows of zombie like figures are barely visible emerging from the fog The atmosphere is dark  cold and foreboding with the sky showing hints of dark clouds and a crescent moon The overall tone is eerie and grim reminiscent of classic zombie apocalypse scenes from horror films',
}

export const getPrompt = (key: keyof typeof PROMPTS) => PROMPTS[key]
