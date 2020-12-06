import React from "react";
import {Container, Header, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";


const NavMenu = () => (
    <Menu
        inverted
        pointing
        secondary
        size='large'
    >
        <Container>
            <Menu.Item as={Link} to={'/'}>
                <Header inverted size={'medium'}>Eton</Header>
            </Menu.Item>
            <Menu.Item position={'right'}>
                <Header inverted size={'small'}>A Site About Me</Header>
            </Menu.Item>
            <Menu.Menu position={'right'}>
                <Menu.Item as={Link} to={'/learning'}>
                    Learning
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
);

export default NavMenu;