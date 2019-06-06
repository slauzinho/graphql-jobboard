import * as React from 'react';
import { FETCH_JOB_QUERY_jobs } from 'schemaTypes';
import ReactMarkdown from 'react-markdown';
import { Container } from './styles';
import { Button } from 'styles/components';

interface JobDetailsProps {
  job: FETCH_JOB_QUERY_jobs;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job }) => (
  <Container>
    <ReactMarkdown source={job.description!} escapeHtml={false} />
    <Button>
      <a
        href={job.applyUrl ? job.applyUrl : '#'}
        rel="nofollow noreferrer noopener"
        target="_blank"
      >
        Apply
      </a>
    </Button>
  </Container>
);

export default JobDetails;
