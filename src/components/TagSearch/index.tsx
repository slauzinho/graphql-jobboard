import React from 'react';
import { FETCH_JOB_QUERY_jobs_tags } from 'schemaTypes';

interface IProps {
  filters: FETCH_JOB_QUERY_jobs_tags[] | null;
}

const TagSearch: React.SFC<IProps> = props => {
  return (
    <div>
      {props.filters &&
        props.filters.map(filter => <div key={filter.id}>{filter.name}</div>)}
    </div>
  );
};

export default TagSearch;
