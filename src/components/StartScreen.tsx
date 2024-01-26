// Types
import { IAction } from "../common/types";

interface IStartScreenProps {
	numQuestions: number;
	dispatch: React.Dispatch<IAction>;
}

const StartScreen = (props: IStartScreenProps) => {
	const { numQuestions, dispatch } = props;

	return (
		<div className="start">
			<h2>Welcome to The React Quiz!</h2>
			<p>{numQuestions} questions to mastery your knowledge about React</p>
			<button
				className="btn btn-ui margin-top"
				onClick={() => dispatch({ type: "start" })}
			>
				Let's start
			</button>
		</div>
	);
};

export default StartScreen;
