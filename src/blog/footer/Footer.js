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
                    This shouldnt be here,
                    Oh man.. this really really shouldnt be here
                    Really fucked this one up bad
                    <NavigationMenu/>
                </Segment>
        )
};

export default ResponsiveTopNav;