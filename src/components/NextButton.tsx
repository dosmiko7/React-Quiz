import { IAction } from "../common/types";

interface INextButtonProps {
	dispatch: React.Dispatch<IAction>;
	answer: number | null;
	numQuestions: number;
	index: number;
}

const NextButton = (props: INextButtonProps) => {
	const { dispatch, answer, numQuestions, index } = props;

	if (answer === null) return null;
	if (index < numQuestions - 1) {
		return (
			<button
				className="btn btn-ui"
				onClick={() => dispatch({ type: "nextQuestion" })}
			>
				Next
			</button>
		);
	} else {
		return (
			<button
				className="btn btn-ui"
				onClick={() => dispatch({ type: "finish" })}
			>
				Finish
			</button>
		);
	}
};

export default NextButton;
