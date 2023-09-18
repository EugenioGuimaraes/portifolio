import emoji from "react-easy-emoji";

export const greetings = {
	name: "Eugenio Lobo",
	title: "Olá, sou Eugenio Lobo",
	description:
		"Sou um apaixonado por tecnologia e web developer Full Stack em formação pela Kenzie Academy. Tenho experiência com desenvolvimento de aplicações utilizando React.js, Next.js e Node.js.",
	resumeLink:
		"",
};

export const openSource = {
	githubUserName: "EugenioGuimaraes",
};

export const contact = {};

export const socialLinks = {
	// url: "https://1hanzla100.github.io/",
	linkedin: "https://www.linkedin.com/in/eugenio-guimaraes/",
	github: "https://github.com/EugenioGuimaraes",
	//instagram: "https://www.instagram.com/zenolobus/",
	// facebook: "https://www.facebook.com/1hanzla100",
	// twitter: "https://twitter.com/1hanzla100",
};

export const skillsSection = {
	title: "Minhas habilidades",
	subTitle:
		"DESENVOLVEDOR FULL STACK QUE QUER EXPLORAR CADA STACK DE TECNOLOGIA E MAIS!",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Desenvolvimento de Single-Page-Apps (SPA) de forma responsiva & PWA em React.js"
				),
				emoji("⚡ Desenvolvimento de static websites usando Next.js"),
				emoji(
					"⚡ Desenvolvimento de RESTful APIs com Node.js & PostgreSQL || Csharp & SQLServer"
				),
			],
			softwareSkills: [
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Node",
					fontAwesomeClassname: "vscode-icons:file-type-node",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "DotNet",
					fontAwesomeClassname: "",
				},
				{
					skillName: "Entity Framework",
					fontAwesomeClassname: "",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
				{
					skillName: "NuGet package",
					fontAwesomeClassname: "",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Desenvolvimento banco de dados com Node.js & PostgreSQL"),
				emoji(
					"⚡ Manutenção de aplicações e desenvolvimento colaborativo com Git, Github e Github Actions"
				),
				
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "50",
	},
	{
		Stack: "Programação",
		progressPercentage: "70",
	},
];

export const educationInfo = [
	{
		schoolName: "Kenzie Academy",
		subHeader: "Desenvolvimento Full Stack",
		duration: "Maio 2022 - Maio 2023",
		desc: "Desenvolvimento de hard e soft skills.",
		descBullets: [
			"Participação como monitor dos modulos de FrontEnd",
			"Aprendizado dinâmico e trabalho em equipe.",
		],
	},
	{
		schoolName: "Alura",
		subHeader: "FUNDAMENTOS DE JAVASCRIPT && JAVASCRIPT PARA BACK-END",
		duration: "Agosto 2021 - Setembro  2021",
		desc: "Fundamentação de conceitos de JAVASCRIPT para Back-End",
		descBullets: [
			"JavaScript I: algoritmos de ordenação",
			"Algoritmos com JavaScript II: aprofundando em algoritmos de ordenação e...",
			"Node.js: criando sua primeira biblioteca",
		],
	},
];

export const experience = [
	{
		role: "PeerCoach - monitor na Kenzie Academy Brasil",
		company: "Kenzie Academy",
		companylogo: "/img/icons/common/Kenzie.png",
		date: "jul de 2022 – o momento",
		desc: "Atuação no ensino, surpevisonamento direto e correções bem como auxiliar nas atividades dos alunos com as metodologias de ensino no curso de Developer Full-Stack.",
	},
	{
		role: "ASSISTENTE ADMINISTRATIVO",
		company: "BROTHER INTERNET",
		companylogo: "/img/icons/common/LOGOTIPO-BROTHER-1.png",
		date: "2014 - 2015",
		desc: "Arquivamento de documentos, classificando-os segundo critérios apropriados para armazená-los, atuação no arquivo físico da documentação, atendimento ao público, organização de horários e reuniões.",
	},
];

export const projects = [
	{
		name: "developer-portfolio",
		desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/1hanzla100/developer-portfolio",
		link: "https://developer-portfolio-1hanzla100.vercel.app/",
	},
	{
		name: "AtlasMart",
		desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
		github: "https://github.com/1hanzla100/Django-React-Marketplace",
	},
	{
		name: "Technota (Forum)",
		desc: "Get hands-on experience in technical skills with Technota",
		github: "https://github.com/1hanzla100/django-react-forum",
	},
	{
		name: "Shopaza (Ecommerce)",
		desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
		github: "https://github.com/1hanzla100/Django-ecommerce",
	},
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Hanzla Tauqeer",
	description:
		"A passionate Full Stack Web Developer and Blockchain Developer.",
	author: "Hanzla Tauqeer",
	image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
	url: "https://developer-portfolio-1hanzla100.vercel.app",
	keywords: [
		"Hanzla",
		"Hanzla Tauqeer",
		"@1hanzla100",
		"1hanzla100",
		"Portfolio",
		"Hanzla Portfolio ",
		"Hanzla Tauqeer Portfolio",
	],
}
