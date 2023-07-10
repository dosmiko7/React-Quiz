import { useEffect } from "react";
import { IAction } from "../common/types";

interface ITimerProps {
	dispatch: React.Dispatch<IAction>;
	secondsRemaing: number;
}

const Timer = (props: ITimerProps) => {
	const { dispatch, secondsRemaing } = props;

	const mins = Math.floor(secondsRemaing / 60);
	const seconds = Math.floor(secondsRemaing % 60);

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch({ type: "tick" });
		}, 1000);
		return () => clearInterval(interval);
	}, [dispatch]);

	return (
		<div className="timer">
			{mins < 10 ? "0" : null}
			{mins}:{seconds < 10 ? "0" : null}
			{seconds}
		</div>
	);
};

export default Timer;
