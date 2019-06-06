import * as React from 'react';
import { FETCH_JOB_QUERY_jobs_tags } from 'schemaTypes';
import { Container, Pill } from 'components/Techs/styles';

interface IProps {
  filters: FETCH_JOB_QUERY_jobs_tags[] | null;
  setFieldValue: any
}

const TagSearch: React.SFC<IProps> = props => {
  return (
    <Container>
      {props.filters &&
        props.filters.map(filter => <Pill active={true} onClick={() => props.setFieldValue(filter.id, filter)} key={filter.id}>{filter.name} &times;</Pill>)}
    </Container>
  );
};

export default TagSearch;
