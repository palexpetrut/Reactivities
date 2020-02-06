import React from 'react'
import { Item, Button, Label, Segment } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'

interface IProps {
    activities: IActivity[]
}

export const ActivityList: React.FC<IProps> = ({ activities }) => {
    return (
        // clearing used to clear any other floated content
        // divided used to add a divider in between each item
        <Segment clearing>
            <Item.Group divided>

                {activities.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button floated='right' content='View' color='blue' />
                                <Label basic content={activity.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}

            </Item.Group>
        </Segment>
    )
}
