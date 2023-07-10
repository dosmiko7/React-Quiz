import { IAction, IQuestion } from "../common/types";
import OptionsList from "./OptionsList";

interface IQuestionProps {
	question: IQuestion;
	dispatch: React.Dispatch<IAction>;
	answer: number | null;
}

const Question = (props: IQuestionProps) => {
	const { question, dispatch, answer } = props;

	return (
		<div>
			<h4>{question.question}</h4>
			<OptionsList
				question={question}
				dispatch={dispatch}
				answer={answer}
			/>
		</div>
	);
};

export default Question;
