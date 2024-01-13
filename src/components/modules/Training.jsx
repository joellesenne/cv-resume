const date = new Date()
const year = date.getFullYear()
const training = [
  { id: 1, date: `2012–${year}`, description: 'Formation développeur Web', label: 'Tutoriel sur le Web' },
  { id: 2, date: '01/2018 - 03/2018', description: "Introduction à l'HTML5 animation et jeux", label: 'fun-mooc.fr' },
  { id: 3, date: '02/2017 - 03/2017', description: "Architecture de l'information", label: 'fun-mooc.fr' },
  { id: 4, date: '01/2017 - 02/2017', description: 'Soyez acteurs du Web', label: 'fun-mooc.fr' },
  { id: 5, date: '02/2020 - 10/2020', description: 'Développeur Web junior v2', label: 'openclassrooms.com' }
]

function Content (props) {
  const content = props.training.map((value) =>
    <article key={value.id}>
      <p className='training'>- {value.date} – {value.description} – {value.label}
      </p>
    </article>
  )
  return content
}

export default function Training() {
    return (
        <section className='section'>
            <h2>Formations</h2>
            <hr />
            <Content training={training} />
        </section>
    )
}
