import { FC } from "react";

import { ProjectCard } from "../project-card";

import "./index.scss";
import { IProjectsProps } from "./projects.types";

const Projects: FC<IProjectsProps> = ({ projects }) => {
	return (
		<div className="projects">
			{projects.map(({ ...props }, index) => (
				<ProjectCard key={index} {...props} />
			))}
		</div>
	);
};

export { Projects };
