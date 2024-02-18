import { formConfig } from "../types/typings";

const FORM_CONFIG: formConfig = {
	total_questions: 10,
	questions: [
		{
			question: "Info",
			type: "intro",
		},
		{
			question: "First name",
			type: "firstName",
			required: true,
		},
		{
			question: "Last name",
			type: "lastName",
			required: true,
		},
		{
			question: "Email",
			type: "email",
			required: true,
		},
		{
			question: "You would be most hurt if a person called you...",
			type: "select",
			required: true,
			answers: {
				A: "Weak",
				B: "Ignorant",
				C: "Unkind",
				D: "Boring",
			},
		},
		{
			question: "What material is at the core of your wand?",
			type: "select",
			answers: {
				A: "Phoenix Feather",
				B: "Dragon Heartstring",
				C: "Unicorn Hair",
			},
			required: true,
		},
		{
			question: "Which of your skills are you most proud of?",
			type: "multiselect",
			answers: {
				A: "Intelligence",
				B: "Bravery",
				C: "Ambition",
				D: "Loyalty",
				E: "Empathy",
				F: "Creativity",
				G: "Resourcefulness",
				H: "Humor",
				I: "Patience",
				J: "Honesty",
			},
			required: true,
		},
		{
			question:
				"A skilled opponent fires an unknown spell at you; you shout...",
			type: "select",
			answers: {
				A: "Expelliarmus!",
				B: "Protego!",
				C: "Stupefy!",
				D: "Crucio!",
			},
			required: true,
		},
		{
			question:
				"A skilled opponent fires an unknown spell at you; you shout...",
			type: "select",
			answers: {
				A: "Expelliarmus!",
				B: "Protego!",
				C: "Stupefy!",
				D: "Crucio!",
			},
			required: true,
		},
		{
			question:
				"A skilled opponent fires an unknown spell at you; you shout...",
			type: "select",
			answers: {
				A: "Expelliarmus!",
				B: "Protego!",
				C: "Stupefy!",
				D: "Crucio!",
			},
			required: true,
		},
		{
			question:
				"A skilled opponent fires an unknown spell at you; you shout...",
			type: "select",
			answers: {
				A: "Expelliarmus!",
				B: "Protego!",
				C: "Stupefy!",
				D: "Crucio!",
			},
			required: true,
		},
	],
};
export default FORM_CONFIG;
