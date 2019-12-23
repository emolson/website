import React from 'react'
import {
    Segment
} from 'semantic-ui-react'

import NavigationMenu from './NavigationMenu';


const ResponsiveTopNav = () => {
        return (
                <Segment
                    inverted
                    textAlign='center'
                    vertical
                >
                    <NavigationMenu/>
                </Segment>
        )
};

export default ResponsiveTopNav;