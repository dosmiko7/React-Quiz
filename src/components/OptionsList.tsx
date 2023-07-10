import { IAction, IQuestion } from "../common/types";

interface IQuestionProps {
	question: IQuestion;
	dispatch: React.Dispatch<IAction>;
	answer: number | null;
}

const OptionsList = (props: IQuestionProps) => {
	const { question, dispatch, answer } = props;

	const hasAnswered = answer !== null;

	return (
		<div className="options">
			{question.options.map((option, index) => (
				<button
					className={`btn btn-option ${index === answer ? "answer" : ""} ${
						hasAnswered ? (index === question.correctOption ? "correct" : "wrong") : ""
					}`}
					key={option}
					disabled={hasAnswered}
					onClick={() => dispatch({ type: "newAnswer", answer: index })}
				>
					{option}
				</button>
			))}
		</div>
	);
};

export default OptionsList;
