import { PropsWithChildren } from "react";

const Main = ({ children }: PropsWithChildren) => {
	return <main className="main">{children}</main>;
};

export default Main;
