import { v4 as uuidv4 } from 'uuid';

export const projectsData = [
	{
		id: 1,
		title: 'Food Ordering Website',
		url: 'https://food-ordering-app-jet.vercel.app/',
		category: 'Web Application',
		img: '/images/web-project-2.jpg',
		ProjectHeader: {
			title: 'Food Ordering Website',
			publishDate: 'Jul 26, 2021',
			tags: 'Full Stack',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Google Health Platform',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Google Health Platform',
				img: '/images/web-project-2.jpg',
			}
		],
	},
	{
		id: 2,
		title: 'Online Clipboard',
		url: 'https://onlineclipboard-zeta.vercel.app/',
		category: 'Web App',
		img: '/images/mobile-project-2.jpg',
		ProjectHeader: {
			title:  'Online Clipboard',
			publishDate: 'Jul 26, 2021',
			tags: 'Web App',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Phoenix Digital Agency',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Phoenix Digital Agency',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Phoenix Digital Agency',
				img: '/images/mobile-project-2.jpg',
			},
		],
	},
	{
		id: 3,
		title: 'Blog Website',
		url: 'https://blog-app-cznt.vercel.app/',
		category: 'Full Stack',
		img: '/images/ui-project-1.jpg',
		ProjectHeader: {
			title: 'Blog Website',
			publishDate: 'Jul 26, 2021',
			tags:'Full Stack',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Kabul Project Management UI',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Kabul Project Management UI',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Kabul Project Management UI',
				img: '/images/mobile-project-2.jpg',
			},
		],
	},
	{
		id: 4,
		title: 'ChatterBox',
		url: 'https://chatter-box-web.vercel.app/',
		category: 'Full Stack App',
		img: '/images/ui-project-2.jpg',
		ProjectHeader: {
			title: 'ChatterBox',
			publishDate: 'Jul 26, 2021',
			tags: 'Web & Cloud',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Kabul Cloud Storage Platform',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Kabul Cloud Storage Platform',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Kabul Cloud Storage Platform',
				img: '/images/mobile-project-2.jpg',
			},
		],
	},
];
