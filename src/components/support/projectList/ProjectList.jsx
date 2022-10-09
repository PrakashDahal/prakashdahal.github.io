import './projectList.scss'

export default function ProjectList({ id, title, active, setSelected }) {

    return (
        <li className={`projectList ${active && 'active'}`} onClick={()=> setSelected(id)}>
            {title}
        </li>
    )
}