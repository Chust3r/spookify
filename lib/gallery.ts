export interface ImageGallery {
	id: number
	url: string
	author: {
		name: string
		link: string
	}
	originalImage: string
	filter: 'zombies' | 'vampires' | 'pumpkins' | 'ghosts' | 'witches'
}

export const gallery: ImageGallery[] = [
	{
		id: 1,
		author: {
			name: 'Michael Dam',
			link: 'https://unsplash.com/@michaeldam?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
		},
		url: 'https://res.cloudinary.com/dtgag40iw/image/upload/v1729306305/template_primary_zw5i3i.jpg',
		originalImage:
			'ttps://unsplash.com/es/fotos/closeup-photography-of-woman-smiling-mEZ3PoFGs_k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
		filter: 'zombies',
	},
	{
		id: 2,
		author: {
			name: 'Michael Dam',
			link: 'https://unsplash.com/@michaeldam?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
		},
		url: 'https://res.cloudinary.com/dtgag40iw/image/upload/v1729303089/vampires_dm6wgy.jpg',
		originalImage:
			'ttps://unsplash.com/es/fotos/closeup-photography-of-woman-smiling-mEZ3PoFGs_k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
		filter: 'zombies',
	},
	{
		id: 3,
		author: {
			name: 'Michael Dam',
			link: 'https://unsplash.com/@michaeldam?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
		},
		url: 'https://res.cloudinary.com/dtgag40iw/image/upload/v1729305768/zombies_is3lio.jpg',
		originalImage:
			'ttps://unsplash.com/es/fotos/closeup-photography-of-woman-smiling-mEZ3PoFGs_k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
		filter: 'zombies',
	},
	{
		id: 4,
		author: {
			name: 'Michael Dam',
			link: 'https://unsplash.com/@michaeldam?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
		},
		url: 'https://res.cloudinary.com/dtgag40iw/image/upload/v1729303089/ghost_jsgfeu.jpg',
		originalImage:
			'ttps://unsplash.com/es/fotos/closeup-photography-of-woman-smiling-mEZ3PoFGs_k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
		filter: 'zombies',
	},
	{
		id: 5,
		author: {
			name: 'Michael Dam',
			link: 'https://unsplash.com/@michaeldam?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
		},
		url: 'https://res.cloudinary.com/dtgag40iw/image/upload/v1729310951/img_mizgyg_ru12i8.jpg',
		originalImage:
			'ttps://unsplash.com/es/fotos/closeup-photography-of-woman-smiling-mEZ3PoFGs_k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
		filter: 'zombies',
	},
	{
		id: 6,
		author: {
			name: 'Michael Dam',
			link: 'https://unsplash.com/@michaeldam?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
		},
		url: 'https://res.cloudinary.com/dtgag40iw/image/upload/v1729303089/pumpkins_jfvrj3.jpg',
		originalImage:
			'ttps://unsplash.com/es/fotos/closeup-photography-of-woman-smiling-mEZ3PoFGs_k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
		filter: 'zombies',
	},
]

/* Foto de <a href="https://unsplash.com/es/@aiony?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Aiony Haust</a> en <a href="https://unsplash.com/es/fotos/mujer-apoyada-en-una-mesa-blanca-f2ar0ltTvaI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
 */

/* Foto de <a href="https://unsplash.com/es/@von_co?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ivana Cajina</a> en <a href="https://unsplash.com/es/fotos/mujer-sonriente-con-sudadera-con-capucha-gris-dnL6ZIpht2s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
 */

/* Foto de <a href="https://unsplash.com/es/@annhwa?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ann Danilina</a> en <a href="https://unsplash.com/es/fotos/una-mujer-con-los-ojos-cerrados-de-pie-frente-a-un-edificio-hzQ1VAEJoW4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
 */

/* Foto de <a href="https://unsplash.com/es/@leshatuman?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">lesha tuman</a> en <a href="https://unsplash.com/es/fotos/mujer-en-sueter-azul-de-pie-ua8LMiiYIcI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
 */

/* Foto de <a href="https://unsplash.com/es/@brookecagle?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Brooke Cagle</a> en <a href="https://unsplash.com/es/fotos/hombre-de-pie-frente-a-una-pared-de-hormigon-blanco-wKOKidNT14w?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
 */
