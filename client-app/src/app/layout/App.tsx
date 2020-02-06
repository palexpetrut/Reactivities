import React, { useState, useEffect, Fragment } from 'react';
import { Container } from 'semantic-ui-react'
import axios from 'axios';
import { IActivity } from '../models/activity';
import { NavBar } from '../../features/nav/NavBar';
import { ActivityDashboard } from '../../features/activities/dashboard/ActivityDashboard';

const App = () => {

  const [activities, setActivities] = useState<IActivity[]>([])

  useEffect(() => {
    axios.get<IActivity[]>('http://localhost:5000/api/activities')
      .then((response) => {
        setActivities(response.data)
      })
  }, [])
  // empty array from above used to ensure that useEffect runs one time only
  // useEffect = 3 components lifecycle methods rolled into one (compDidMount, compDidUpdate, compWillUnmount)
  // its component did mount, then [ ] which looks for property changes which causes useEffect to re-run again
  // by adding an empty array we prevent it from running a 2nd time..
  // without it, we'd send the component into a loop, it'll start everytime the comp renders
  // so its added to prevent rerun

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard activities={activities} />
      </Container>
    </Fragment>
  );
}

export default App;
