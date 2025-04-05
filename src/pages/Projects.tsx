import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/Button";
import Card, { CardSpacer } from "../components/Card";
import Grid from "../components/Grid";
import { Tag, TagsContainer } from "../components/Tag";
import { ReactNode } from "react";
import { faLink } from "@fortawesome/free-solid-svg-icons";

type ProjectData = {
	title: string;
	imageUrl: string;
	description: ReactNode;
	tags: string[];
	sourceCodeUrl: string;
};

const projectsData: ProjectData[] = [
	{
		title: "GPT-2",
		imageUrl: "https://raw.githubusercontent.com/Ofekirsh/GPT-2/refs/heads/main/images/gpt2_image.png",
		description: (
			<>
				<p>An implementation of a GPT-2-inspired transformer language model. It has been trained separately on two datasets:</p>
				<ul>
					<li><b>English</b>: Shakespeare's works</li>
					<li><b>Hebrew</b>: A Hebrew language corpus.</li>
				</ul>
			</>
		),
		tags: ["PyTorch", "Transformer", "OpenAI", "Generative Model", "GPT", "GPT-2", "LLM"],
		sourceCodeUrl: "https://github.com/Ofekirsh/GPT-2",
	},
	{
		title: "Denoising Diffusion Probabilistic Model",
		imageUrl: "https://raw.githubusercontent.com/Ofekirsh/Denoising-Diffusion-Probabilistic-Model/refs/heads/main/images/ddpm_image.png",
		description: (
			<p>
				An implementation of the Denoising Diffusion Probabilistic Model (DDPM), based on the paper by Jonathan Ho,
				Ajay Jain, and Pieter Abbeel. This implementation includes DDIM sampling and classifier-free guidance,
				and is evaluated on the MNIST dataset.
			</p>
		),
		tags: ["PyTorch", "Generative Model", "Diffusion", "Probabilistic Models", "Denoising", "DDPM", "DDLM"],
		sourceCodeUrl: "https://github.com/Ofekirsh/Denoising-Diffusion-Probabilistic-Model",
	},
	{
		title: "Multi-Layer Perceptrons (MLP)",
		imageUrl: "https://raw.githubusercontent.com/Ofekirsh/Multi-Layer-Perceptron/refs/heads/main/images/neuralnet_mlp_1.png",
		description: (
			<p>
				This project provides an implementation of a multilayer perceptron (MLP) from scratch using Python and NumPy.
				It includes code for training the MLP on toy datasets like XOR and offers comparisons with a log-linear model.
				The repository also contains scripts for gradient checking to ensure correct gradient implementations.
			</p>
		),
		tags: ["Python", "NumPy", "Classifier", "MLP", "Perceptrons"],
		sourceCodeUrl: "https://github.com/Ofekirsh/Multi-Layer-Perceptron",
	},
	{
		title: "",
		imageUrl: "https://raw.githubusercontent.com/Ofekirsh/Deep-Reinforcement-Learning-Minigrid/refs/heads/main/videos/evaluation_with_memory.gif",
		description: (
			<>
				<p>
					The project ffocuses on developing deep reinforcement learning agents for the MiniGrid environment,
					specifically targeting the 'MiniGrid-6x6' environment. The project implements various algorithms and
					techniques including:
				</p>
				<ul>
					<li>Deep Q-Network (DQN)</li>
					<li>Double DQN</li>
					<li>Huber Loss</li>
					<li>Soft Updates</li>
					<li>Prioritized Experience Replay (PER)</li>
					<li>Actor-Critic methods</li>
				</ul>
				<p>The best model achieves a 90% success rate in solving episodes, demonstrating improved training stability.</p>
			</>
		),
		tags: [
			"Deep Reinforcement Learning", "DQN", "RL", "MiniGrid", "Actor-Critic", "Double DQN",
			"Huber Loss", "Soft Updates", "Experience Replay",
		],
		sourceCodeUrl: "https://github.com/Ofekirsh/Deep-Reinforcement-Learning-Minigrid",
	},
	{
		title: "Auto Encoding Variational Bayes",
		imageUrl: "https://raw.githubusercontent.com/Ofekirsh/Auto-Encoding-Variational-Bayes/refs/heads/main/images/vae_image.png",
		description: (
			<p>
				Implementation of the Variational Autoencoders (VAEs) based on the paper "Auto-Encoding Variational Bayes" by
				Diederik P Kingma and Max Welling. The models are applied to the MNIST and Fashion MNIST datasets, with results
				documented in the included <code>report.pdf</code>. The repository provides Python scripts for trainig the VAE
				models and instructions for setting up the required environment.
			</p>
		),
		tags: ["Encoder", "Generative Model", "VAE", "PyTorch"],
		sourceCodeUrl: "https://github.com/Ofekirsh/Auto-Encoding-Variational-Bayes",
	},
	{
		title: "RL FlappyBird",
		imageUrl: "https://github.com/Ofekirsh/RL-FlappyBird/blob/main/videos/big_gap_videos/MyQLearning_ep=0.1_ga=0.95_lr=0.1/72000.gif?raw=true",
		description: (
			<p>
				The RL-FlappyBird project is a reinforcement learning agent designed to play the Flappy Bird game using
				Q-Learning and SARSA algorithms. Developed from scratch, it features a custom game environment, tabular
				Q-table updates, and performance visualization tools. The repository includes trained models for both small
				and large gap scenarios between pipes, as well as Jupyter notebooks for training and evaluation.
			</p>
		),
		tags: ["Reinforcement Learning", "Q Learning", "SARSA", "RL", "FlappyBird"],
		sourceCodeUrl: "https://github.com/Ofekirsh/RL-FlappyBird",
	},
];

const Projects = () => (
	<div className="content">
		<h1>Featured Projects</h1>
		<Grid itemsPerRow={3}>
			{projectsData.map(({title, imageUrl, description, tags}, index) => (
				
				<Card
					key={index}
					title={title}
					imageUrl={imageUrl}
				>
					<p>
						{description}
						<Button><FontAwesomeIcon icon={faLink} /> GitHub</Button>
					</p>
					
					
					
					<CardSpacer />
					
					<TagsContainer>
						{tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
					</TagsContainer>
				</Card>
				
			))}
		</Grid>
	</div>
)

export default Projects;
