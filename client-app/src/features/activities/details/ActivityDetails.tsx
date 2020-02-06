import React from 'react'
import { Card, Image, Icon, Button } from 'semantic-ui-react'

export const ActivityDetails = () => {
    return (
        // fluid is used to take all the space of the 6 column grid (semantic ui uses 16 col grids, bootstrap only 12)
        // Button group is used because we want our buttons to be evenly spaced across the card's bottom
        // widths = {2} represents the nr of buttons in our button group to evenly space them
        <Card fluid>
            <Image src='/assets/placeholder.png' wrapped ui={false} />
            <Card.Content>
                <Card.Header>Title</Card.Header>
                <Card.Meta>
                    <span>Date</span>
                </Card.Meta>
                <Card.Description>
                    Description
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button basic color='blue' content='Edit' />
                    <Button basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}
