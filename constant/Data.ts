export const mockData: any = {
	totalStudents: {
		"Licence 1": { Informatique: 200, Mathématiques: 150, Physique: 100 },
		"Licence 2": { Informatique: 180, Mathématiques: 130, Physique: 90 },
		"Licence 3": { Informatique: 160, Mathématiques: 120, Physique: 80 },
		"Master 1": { Informatique: 100, Mathématiques: 80, Physique: 60 },
		"Master 2": { Informatique: 90, Mathématiques: 70, Physique: 50 },
		Doctorat: { Informatique: 30, Mathématiques: 25, Physique: 20 },
	},
	averageGrade: {
		"Licence 1": {
			Informatique: 13.5,
			Mathématiques: 14.2,
			Physique: 13.8,
		},
		"Licence 2": {
			Informatique: 14.0,
			Mathématiques: 14.5,
			Physique: 14.1,
		},
		"Licence 3": {
			Informatique: 14.3,
			Mathématiques: 14.8,
			Physique: 14.5,
		},
		"Master 1": { Informatique: 14.8, Mathématiques: 15.2, Physique: 14.9 },
		"Master 2": { Informatique: 15.2, Mathématiques: 15.5, Physique: 15.3 },
		Doctorat: { Informatique: 16.0, Mathématiques: 16.2, Physique: 16.1 },
	},
	successRate: {
		"Licence 1": {
			Informatique: 0.75,
			Mathématiques: 0.78,
			Physique: 0.76,
		},
		"Licence 2": { Informatique: 0.78, Mathématiques: 0.8, Physique: 0.79 },
		"Licence 3": {
			Informatique: 0.82,
			Mathématiques: 0.83,
			Physique: 0.82,
		},
		"Master 1": { Informatique: 0.85, Mathématiques: 0.87, Physique: 0.86 },
		"Master 2": { Informatique: 0.88, Mathématiques: 0.9, Physique: 0.89 },
		Doctorat: { Informatique: 0.95, Mathématiques: 0.96, Physique: 0.95 },
	},
	subjectsPerformance: {
		"Licence 1": { Algo: 13.5, Maths: 14.2, Physique: 13.8, Anglais: 14.5 },
		"Licence 2": { Algo: 14.0, Maths: 14.5, Physique: 14.1, Anglais: 14.8 },
		"Licence 3": { Algo: 14.3, Maths: 14.8, Physique: 14.5, Anglais: 15.0 },
		"Master 1": {
			"Algo avancé": 14.8,
			"Maths appliquées": 15.2,
			"Physique quantique": 14.9,
			"Anglais scientifique": 15.5,
		},
		"Master 2": {
			IA: 15.2,
			"Big Data": 15.5,
			Modélisation: 15.3,
			"Projet de recherche": 16.0,
		},
		Doctorat: { Séminaire: 16.0, Publication: 16.2, Enseignement: 16.1 },
	},
	timeSeriesData: {
		"Licence 1": [
			{ month: "Sep", average: 13.0 },
			{ month: "Oct", average: 13.2 },
			{ month: "Nov", average: 13.5 },
			{ month: "Dec", average: 13.8 },
			{ month: "Jan", average: 14.0 },
		],
		"Licence 2": [
			{ month: "Sep", average: 13.5 },
			{ month: "Oct", average: 13.7 },
			{ month: "Nov", average: 14.0 },
			{ month: "Dec", average: 14.2 },
			{ month: "Jan", average: 14.5 },
		],
		"Licence 3": [
			{ month: "Sep", average: 14.0 },
			{ month: "Oct", average: 14.2 },
			{ month: "Nov", average: 14.5 },
			{ month: "Dec", average: 14.7 },
			{ month: "Jan", average: 15.0 },
		],
		"Master 1": [
			{ month: "Sep", average: 14.5 },
			{ month: "Oct", average: 14.7 },
			{ month: "Nov", average: 15.0 },
			{ month: "Dec", average: 15.2 },
			{ month: "Jan", average: 15.5 },
		],
		"Master 2": [
			{ month: "Sep", average: 15.0 },
			{ month: "Oct", average: 15.2 },
			{ month: "Nov", average: 15.5 },
			{ month: "Dec", average: 15.7 },
			{ month: "Jan", average: 16.0 },
		],
		Doctorat: [
			{ month: "Sep", average: 15.5 },
			{ month: "Oct", average: 15.7 },
			{ month: "Nov", average: 16.0 },
			{ month: "Dec", average: 16.2 },
			{ month: "Jan", average: 16.5 },
		],
	},
};

type LinkType = {
	name: string;
	href: string;
	icon: string;
};
export const links: LinkType[] = [
	{ name: "Vue d'ensemble", href: "#", icon: "Home" },
	{ name: "Statistiques par matière", href: "#", icon: "BookOpen" },
	{ name: "Comparaison", href: "#", icon: "BarChart2" },
	{ name: "Notifications", href: "#", icon: "Bell" },
];
