import React from "react";
import { Title } from "./styles/components";
import { miscStyles } from "./styles/style";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { Container, Grid } from "@material-ui/core";

function App() {
	return (
		<ThemeProvider theme={theme}>
			{/* SECTION HEADER */}
			<section className="fundo-header">
				<header style={miscStyles.header}>
					<Grid>
						<Title font="Parisienne" size="80px" margin="0 0">
							Taysa Bellas Unhas
						</Title>
					</Grid>
				</header>
			</section>

			{/* SECTION ABOUT */}
			<section className="fundo-sobre content">
				<Container maxWidth="md">
					<Grid container direction="column">
						<Grid item>
							<Title
								color="#FFF"
								font="Open Sans"
								alignText="left"
								margin="0 0 20px 0"
								size="30px">
								As mãos e os pés são o cartão de visita de uma
								mulher
							</Title>
						</Grid>
						<Grid item>
							<p>
								Dê uma atenção merecida e especial para suas
								mãos e pés, aqui atendemos com muito carinho,
								cuidado e amor. Recebemos em um lugar preparado
								para cuidar de você, contamos com produtos e
								profissionais de qualidade, venha nos conhecer.
							</p>
						</Grid>
					</Grid>
				</Container>
			</section>

			<section>
				<Grid container>
					<Grid item md={6} lg={3}>
						<img
							className="foto-feed"
							alt="asdasdas"
							src={require("./assets/foto1.jpg")}></img>
					</Grid>
					<Grid item md={6} lg={3}>
						<img
							className="foto-feed"
							alt="asdasdas"
							src={require("./assets/foto2.jpg")}></img>
					</Grid>
					<Grid item md={6} lg={3}>
						<img
							className="foto-feed"
							alt="asdasdas"
							src={require("./assets/foto3.jpg")}></img>
					</Grid>
					<Grid item md={6} lg={3}>
						<img
							className="foto-feed"
							alt="asdasdas"
							src={require("./assets/foto4.jpg")}></img>
					</Grid>
					<Grid item md={6} lg={3}>
						<img
							className="foto-feed"
							alt="asdasdas"
							src={require("./assets/foto5.jpg")}></img>
					</Grid>
					<Grid item md={6} lg={3}>
						<img
							className="foto-feed"
							alt="asdasdas"
							src={require("./assets/foto6.jpg")}></img>
					</Grid>
					<Grid item md={6} lg={3}>
						<img
							className="foto-feed"
							alt="asdasdas"
							src={require("./assets/foto7.jpg")}></img>
					</Grid>
					<Grid item md={6} lg={3}>
						<img
							className="foto-feed"
							alt="asdasdas"
							src={require("./assets/foto8.jpg")}></img>
					</Grid>
				</Grid>
			</section>

			{/* SECTION PHRASE */}
			<section className="fundo-frase content">
				<Container maxWidth="md">
					<Grid container direction="column">
						<Grid item>
							<Title
								color="#FFF"
								font="Open Sans"
								alignText="right"
								margin="0 0 20px 0"
								size="30px">
								“Depois do rosto, as mãos são a parte do corpo
								humano que mais obviamente expressa a emoção”.
							</Title>
						</Grid>
						<Grid item>
							<p>- Henry Moore</p>
						</Grid>
					</Grid>
				</Container>
			</section>

			{/* SECTION WHERE */}
			<section className="fundo-where content">
				<Container maxWidth="md">
					<Grid
						container
						direction="column"
						className="links-redes"
						spacing={5}>
						<Grid item>
							<div>
								<p>
									Rua Cidade de Campos Novos 116 <br></br>
									Fazendinha - Curitiba - PR
								</p>
							</div>
						</Grid>
						<Grid item>
							<div>(41) 99853-5810 - Taysa</div>
						</Grid>
						<Grid item>
							<Grid
								container
								direction="row"
								spacing={5}
								justify="flex-start"
								alignItems="center">
								<Grid item>
									<div>
										<i class="fab fa-facebook-square"></i>
										<a
											href="https://www.facebook.com/Taysa-Bellas-Unhas-349024945490437/"
											title="Facebook"
											target="_blank">
											Facebook
										</a>
									</div>
								</Grid>
								<Grid item>
									<div>
										<i class="fab fa-instagram"></i>
										<a
											href="https://www.instagram.com/taysa_bellas_unhas/?hl=pt-br"
											title="Facebook"
											target="_blank">
											Instagram
										</a>
									</div>
								</Grid>
								<Grid item>
									<div>
										<i class="fab fa-whatsapp"></i>
										<a
											href="https://api.whatsapp.com/send?phone=5541998535810"
											title="Facebook"
											target="_blank">
											Whatsapp
										</a>
									</div>
								</Grid>
							</Grid>
						</Grid>
						<Grid item>
							<div>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.894167276782!2d-49.348710684535995!3d-25.475209140919674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce260272aa813%3A0xc2c9436604a4986a!2sR.%20Cidade%20de%20Campos%20Novos%2C%20116%20-%20Cidade%20Industrial%20De%20Curitiba%2C%20Curitiba%20-%20PR%2C%2081250-080!5e0!3m2!1spt-BR!2sbr!4v1587001498804!5m2!1spt-BR!2sbr"
									width="100%"
									height="300"
									frameborder="0"
									title="Mapa"
									allowfullscreen=""
									aria-hidden="false"
									tabindex="0"></iframe>
							</div>
						</Grid>
					</Grid>
				</Container>
			</section>
		</ThemeProvider>
	);
}

export default App;
