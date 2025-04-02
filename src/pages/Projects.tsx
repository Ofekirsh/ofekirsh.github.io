import Card from "../components/cards/Card";
import CardsGrid from "../components/cards/CardsGrid";

import mlpImgSrc from "../assets/projects-imgs/mlp.png";
import { Tag, TagsContainer } from "../components/Tag";

const Projects = () => (
	<div className="content">
		<h1>Featured Projects</h1>
		<CardsGrid itemsPerRow={3}>
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
		</CardsGrid>
	</div>
)

export default Projects;
