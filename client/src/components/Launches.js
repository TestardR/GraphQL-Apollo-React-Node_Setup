import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_success
    }
  }
`;

function Launches() {
  return (
    <Fragment>
      <h1 className="display-4 my-3">Launches</h1>
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log(error);

          return (
            <Fragment>
              {data.launches.map((launch, i) => {
                return <LaunchItem launch={launch} key={i} />;
              })}
            </Fragment>
          );
        }}
      </Query>
    </Fragment>
  );
}

export default Launches;
