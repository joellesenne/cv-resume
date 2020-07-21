import React from 'react'

import Skills from './Skills'

const listsFrontEnd = ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Vue.js', 'React.js', 'Angular']
const listsBackEnd = ['Node.js', 'PHP', 'MYSQL', 'mongoDB', 'GRAPHQL', 'WordPress', 'CMS']

const Competences = () => (
	<section className="section">
		<h2>Compétences</h2>
		<hr />
		<p className="description">Développeur front-end avec plus de 1 an d'expérience</p>
		<p className="content">Passionné par l’utilisation des technologies modernes et très désireux d’améliorer les compétences existantes et d’en apprendre de nouvelles.</p>
		<Skills name="Front-end" lists={listsFrontEnd} />
		<Skills name="Back-end" lists={listsBackEnd} />
	</section>
)

export default Competences
