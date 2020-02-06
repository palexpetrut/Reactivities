import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'
import { ActivityList } from './ActivityList'
import { ActivityDetails } from '../details/ActivityDetails'
import { ActivityForm } from '../form/ActivityForm'

interface IProps {
    activities: IActivity[]
}

export const ActivityDashboard: React.FC<IProps> = ({activities}) => {
    return (
        <div>
            <Grid>
                <Grid.Column width={10}>
                    <ActivityList activities ={ activities}/>
                </Grid.Column>
                <Grid.Column width={6}>
                    <ActivityDetails />
                    <ActivityForm />
                </Grid.Column>
            </Grid>
        </div>
    )
}


// old way of doing things, before using destructuring with { {activities} } instead of {props} from IProps interface

// export const ActivityDashboard: React.FC<IProps> = (props) => {
//     return (
//         <div>
//             <Grid>
//                 <Grid.Column width={10}>
//                     <List>
//                         {props.activities.map((activity) => (
//                             <List.Item key={activity.id}> {activity.title} </List.Item>
//                         ))}
//                     </List>
//                 </Grid.Column>
//             </Grid>
//         </div>
//     )
// }
