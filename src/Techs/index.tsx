import * as React from 'react';
import { FETCH_JOB_QUERY_jobs_tags } from 'schemaTypes';
import { Container, Pill } from './styles';
import { TagCtx } from 'components/Home';

interface TechProps {
  tags: FETCH_JOB_QUERY_jobs_tags[] | null;
  setFieldValue: any | null;
}

const Techs: React.SFC<TechProps> = props => {
  const tagCtx = React.useContext<FETCH_JOB_QUERY_jobs_tags[]>(TagCtx);
  const tagNames = tagCtx.map(t => t.name);
  return (
    <Container>
      {props.tags &&
        props.tags.map(tag => {
          return (
            <Pill
              active={tagNames.indexOf(tag.name) >= 0}
              onClick={() => {
                if (props.setFieldValue) {
                  props.setFieldValue(tag.id, tag);
                }
              }}
              key={tag.id}
            >
              {tag.name}
            </Pill>
          );
        })}
    </Container>
  );
};

export default Techs;
