const date = new Date()
const year = date.getFullYear()
const experiences = [
  { id: 1, description: 'Création auto entreprise – Développeur Web', date: `2019–${year}`, label: 'Joël Lesenne', content: "Inscription à la chambre de commerce et de l'URSSAF – Création du site Web avec React.js et du nom de domaine – Création du Logo et carte de visite." },
  { id: 2, description: 'Administrateur Informatique – Bénévole', date: '09/2015 – 09/2017', label: 'Accord2mains', content: "Mise en place d'un serveur Web et d'un CMS pour la gestion des adhérents – Création d'une page web  et du nom de domaine – Création du Logo et divers Flayers publicitaires." }
]

function Content (props) {
    return props.experiences.map((value) =>
      <article key={value.id}>
          <p className='description'>{value.description}</p>
          <h5><span className='date'>{value.date}</span> – <span className='label'>{value.label}</span></h5>
          <p className='content'>{value.content}</p>
      </article>
  )
}

export default function  Experiences() {
    return (
        <section className='section'>
            <h2>Expériences</h2>
            <hr />
            <Content experiences={experiences} />
        </section>
    )
}
