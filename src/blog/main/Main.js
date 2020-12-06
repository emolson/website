import React from 'react';
import { Grid, Image, Header, Container, Message } from 'semantic-ui-react'

import ethanTwoSunglassesPhoto from '../photos/ETHANTWOSUNGLASSES.png';


function Main() {
    return (
        <>
            <Grid centered padded stackable>
                <Grid.Column verticalAlign={'middle'} width={10}>
                    <Container textAlign={'center'}>
                        <Header as='h1'>A Site About Me</Header>
                        <p>Here's a little space for me to post whatever I want for all zero people that see this.</p>
                        <p>It'll be a way for me to journal and document things worth remembering.</p>
                        <p>I have a bright future ahead of me.</p>

                    </Container>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Image centered style={{maxHeight:'500px'}} src={ethanTwoSunglassesPhoto} />
                </Grid.Column>
            </Grid>

            <Grid padded centered style={{fontSize:'1.2em', paddingTop:'20px'}}>
            <Message color={'violet'}>
                <Message.Header>Content</Message.Header>
                <Message.List>
                    <Message.Item>Tomorrow You'll Wish You Started Today</Message.Item>
                    <Message.Item>All We Have To Decide, Is What To Do With The Time That Is Given Us</Message.Item>
                </Message.List>
            </Message>
            </Grid>
            </>
    );
}

export default Main;
