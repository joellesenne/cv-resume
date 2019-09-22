import React from 'react'

const training = [
	{id: 1, date: "2012 – Aujourd'hui", description: 'Formation développeur Web', label: 'Tutoriel sur le Web'},
	{id: 2, date: 'janv. 2018 – mars. 2018', description: "Introduction à l'HTML5 animation et jeux", label: 'https://fun-mooc.fr'},
	{id: 3, date: 'févr. – mars. 2017', description: "Architecture de l'information", label: 'https://fun-mooc.fr'},
	{id: 4, date: 'janv. – févr. 2017', description: 'Soyez acteurs du Web', label: 'https://fun-mooc.fr'}
]

function Content(props) {
	const content = props.training.map((value) =>
	<article key={value.id}>
		<p className="training" >{value.date} – {value.description} – {value.label}
		</p>
	</article>
	)
	return content
}

const Training = () => (
	<section className="section">
		<h2>Formations</h2>
		<hr />
		<Content training={training} />
	</section>
)

export default Training
