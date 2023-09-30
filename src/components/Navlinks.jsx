import {NavLink} from "react-router-dom";

export const NavLinks = ({links}) => {
    return (<>
    {links.map((link) => {
        if(!link) return null
        const { id, url, text } = link;
        return <li key={id}>
            <NavLink to={url} className="capitalize">{text}</NavLink>
        </li>
    })}
    </>)
}