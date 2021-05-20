import React from 'react'

const experiences = [
	{id: 1, description: "Création auto entreprise – Développeur Web", date: "avril. 2019 – Aujourd'hui", label: "Joël Lesenne", content: "Inscription à la chambre de commerce et de l'URSSAF – Création du site Web avec Gatsby.js et du nom de domaine – Création du Logo et carte de visite."},
	{id: 2, description: "Administrateur Informatique – Bénévole", date: "sept. 2015 – sept. 2017", label: "Accord2mains", content: "Mise en place d'un serveur Web et d'un CMS pour la gestion des adhérents – Création d'une page web  et du nom de domaine – Création du Logo et divers Flayers publicitaires."}
]

function Content(props) {
	const content = props.experiences.map((value) =>
	<article key={value.id}>
		<p className="description">{value.description}</p>
		<h5><span className="date">{value.date}</span> – <span className="label">{value.label}</span></h5>
		<p className="content">{value.content}</p>
	</article>
	)
	return content
}

const Experiences = () => (
	<section className="section">
		<h2>Expériences</h2>
		<hr />
		<Content experiences={experiences} />
	</section>
)

export default Experiences
