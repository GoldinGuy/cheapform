import {
	QuestionsActionsType,
	QuestionsStateType,
	REMOVE_SELECT,
	SET_FIRST_NAME,
	SET_LAST_NAME,
	SET_DROPDOWN,
	SET_SELECT,
	SET_MULTISELECT,
	SET_EMAIL,
} from "../index";

export function questionsReducerFunc(
	state: QuestionsStateType,
	action: QuestionsActionsType
) {
	switch (action.type) {
		case SET_FIRST_NAME:
			return { ...state, firstName: action.payload };

		case SET_LAST_NAME:
			return { ...state, lastName: action.payload };

		case SET_DROPDOWN:
			return { ...state, dropdown: action.payload };

		case SET_SELECT:
			return { ...state, select: action.payload };

		case SET_MULTISELECT:
			return { ...state, multiselect: [...state.multiselect, action.payload] };

		case REMOVE_SELECT:
			return {
				...state,
				multiselect: state.multiselect.filter(
					(goal) => goal !== action.payload
				),
			};

		case SET_EMAIL:
			return { ...state, email: action.payload };

		default:
			return state;
	}
}
