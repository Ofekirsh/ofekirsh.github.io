import Card from "../components/Card";
import Grid from "../components/Grid";

import mlpImgSrc from "../assets/projects-imgs/mlp.png";
import { Tag, TagsContainer } from "../components/Tag";

const Projects = () => (
	<div className="content">
		<h1>Featured Projects</h1>
		<Grid itemsPerRow={3}>
			<Card
				imageUrl={mlpImgSrc}
				title="Multi-Layered Perceptrons"
			>
				<p>Description about MLP</p>
				
				<TagsContainer>
					<Tag>Python</Tag>
					<Tag>Pythonn</Tag>
					<Tag>Pythonnn</Tag>
					<Tag>Pythonnnn</Tag>
					<Tag>Pythonnnnn</Tag>
					<Tag>Python</Tag>
				</TagsContainer>
			</Card>
		</Grid>
	</div>
)

export default Projects;
