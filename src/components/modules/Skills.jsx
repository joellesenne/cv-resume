function Skills ({lists, name}) {
    const listItem = lists.map((list) =>

        <li key={list.toString()}>{list}</li>
    )
    return (
        <ul>
            <h3>{name}</h3>
            {listItem}
        </ul>
    )
}

export default Skills
