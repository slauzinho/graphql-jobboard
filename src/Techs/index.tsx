import * as React from 'react';
import { FETCH_JOB_QUERY_jobs_tags } from 'schemaTypes';
import { Container, Pill } from './styles';

interface TechProps {
    tags: FETCH_JOB_QUERY_jobs_tags[] | null
    setFieldValue: any | null
}

const Techs: React.SFC<TechProps> = (props) => {
    return <Container>{props.tags && props.tags.map(tag => <Pill onClick={() => {
        if (props.setFieldValue) {
            props.setFieldValue(tag.id, tag)
        }
    }} key={tag.id}>{tag.name}</Pill>)}</Container>;
   }

export default Techs;