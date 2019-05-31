import React from 'react';
import { RouteComponentProps } from '@reach/router';
import fetchJobs from 'services/fetchJobs';
import { Query } from 'react-apollo';
import { FETCH_JOB_QUERY } from 'schemaTypes';
import Job from 'components/Job';

const Home: React.FC<RouteComponentProps> = () => (
  <Query<FETCH_JOB_QUERY> query={fetchJobs}>
    {({ loading, error, data }) => {
      if (loading) {
        return <div>loading</div>;
      } else {
        return (
          <div style={{maxWidth: "1200px", margin: "0 auto"}}>
            Home
            {data && data.jobs.map(job => <Job job={job} key={job.id}/>)}
          </div>
        );
      }
    }}
  </Query>
);

export default Home;
