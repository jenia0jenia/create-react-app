import { useMatch, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

function MenuLink(props) {
    const match = useMatch(props.to);

    return (
        <Button
            component={NavLink}
            className={`${match ? "is-active " : ""}menu-link`}
            to={props.to}
        >
            {props.children}
        </Button>
    );
}

export default MenuLink;
