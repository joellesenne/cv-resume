import React from 'react'

import Badge from './Badge'

const listsFrontEnd = ['HTML5', 'CSS3', 'JavaScript', 'Ajax', 'Vue.js', 'React.js', 'Node.js']
const listsBackEnd = ['PHP', 'MYSQL', 'SQL', 'GRAPHQL', 'WordPress', 'CMS']

const Competences = () => (
	<section className="section">
		<h2>Compétences</h2>
		<hr />
		<p className="description">Développeur front-end avec plus de 1 an d'expérience</p>
		<p className="content">Passionné par l’utilisation des technologies modernes et très désireux  d’améliorer les compétences existantes et d’en apprendre de nouvelles.</p>
		<Badge name="Front-end" lists={listsFrontEnd} />
		<Badge name="Back-end" lists={listsBackEnd} />
	</section>
)

export default Competences
