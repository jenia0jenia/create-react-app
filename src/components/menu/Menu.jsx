import MenuLink from "./MenuLink";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Menu() {
    return (
        <ButtonGroup
            className="menu"
            variant="outlined"
            aria-label="outlined button group"
        >
            <MenuLink to="/">Home</MenuLink>
            <MenuLink to="/text">Text</MenuLink>
            {/* <MenuLink to="/text-random">Text Random</MenuLink> */}
            <MenuLink to="/nasa">Nasa API</MenuLink>
            <MenuLink to="/about">About</MenuLink>
            {/* <MenuLink to="/tasker">Tasker</MenuLink> */}
        </ButtonGroup>
    );
}
