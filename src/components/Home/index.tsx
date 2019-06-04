import React, { useState, createContext } from 'react';
import { RouteComponentProps } from '@reach/router';
import fetchJobs from 'services/fetchJobs';
import { Query } from 'react-apollo';
import { FETCH_JOB_QUERY, FETCH_JOB_QUERY_jobs_tags } from 'schemaTypes';
import Job from 'components/Job';
import TagSearch from 'components/TagSearch';

export const TagCtx = createContext<FETCH_JOB_QUERY_jobs_tags[]>([]);

const Home: React.FC<RouteComponentProps> = () => {
  const [tags, setTags] = useState<FETCH_JOB_QUERY_jobs_tags[]>([]);
  const setFieldValue = (id: string, value: FETCH_JOB_QUERY_jobs_tags) => {
    const list = tags.filter(tag => tag.id !== id);
    if (tags.length === 0) {
      return setTags([value]);
    }
    if (list.length >= tags.length) {
      return setTags([...tags, value]);
    }

    return setTags([...list]);
  };
  return (
    <Query<FETCH_JOB_QUERY> query={fetchJobs}>
      {({ loading, error, data }) => {
        if (loading) {
          return <div>loading</div>;
        } else {
          return (
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              Home
              <TagSearch filters={tags} setFieldValue={setFieldValue} />
              <TagCtx.Provider value={tags}>
                {data &&
                  data.jobs.map(job => {
                    if (tags.length === 0) {
                      return (
                        <Job
                          setFieldValue={setFieldValue}
                          job={job}
                          key={job.id}
                        />
                      );
                    } else {
                      const itMatches = tags.every(tag => {
                        if (job.tags) {
                          return job.tags.indexOf(tag) > -1;
                        } else {
                          return false;
                        }
                      });
                      if (itMatches) {
                        return (
                          <Job
                            setFieldValue={setFieldValue}
                            job={job}
                            key={job.id}
                          />
                        );
                      }
                      return null;
                    }
                  })}
              </TagCtx.Provider>
            </div>
          );
        }
      }}
    </Query>
  );
};

export default Home;
