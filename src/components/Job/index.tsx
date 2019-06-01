import React from 'react';
import { FETCH_JOB_QUERY_jobs } from 'schemaTypes';
import {
  Container,
  Title,
  SubTitle,
  SubTitleWrapper,
  Company,
  Commitment,
  InnerWrapper,
  JobContentWrapper,
  DetailsContainer,
} from 'components/Job/styles';
import { distanceInWords } from 'date-fns';
import Techs from 'Techs';

import random from 'static/random.svg';

interface JobProps {
  job: FETCH_JOB_QUERY_jobs;
  setFieldValue: any;
}

const Job: React.FC<JobProps> = ({ job, setFieldValue }) => {
  return (
    <div>
      <Container>
        <img
          src={
            !job.company
              ? random
              : job.company.logoUrl
              ? job.company.logoUrl
              : random
          }
          width="100px"
          height="100px"
        />
        <InnerWrapper>
          <JobContentWrapper>
            <Title>{job.title}</Title>
            <SubTitleWrapper>
              <Company>{job.company && job.company.name}</Company>
              <>
                {job.cities &&
                  job.cities.map(city => (
                    <SubTitle key={city.id}>
                      {city.name}, {city.country.name}
                    </SubTitle>
                  ))}
              </>
            </SubTitleWrapper>
            <Techs tags={job.tags} setFieldValue={setFieldValue} />
          </JobContentWrapper>
          <DetailsContainer>
            <Commitment>
              <svg
                width="20"
                height="20"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Page-1" fill="none" fillRule="evenodd">
                  <g id="noun_Calendar_1585331" fill="#000" fillRule="nonzero">
                    <path
                      d="M12.82597,1.95847 L11.66125,1.95847 L11.66125,0.79375 L10.885,0.79375 L10.885,1.95847 L4.675,1.95847 L4.675,0.79375 L3.89875,0.79375 L3.89875,1.95847 L2.73472,1.95847 C1.66453,1.95847 0.79375,2.82925 0.79375,3.89944 L0.79375,12.82666 C0.79375,13.89685 1.66453,14.76763 2.73472,14.76763 L12.82597,14.76763 C13.89616,14.76763 14.76694,13.89685 14.76694,12.82666 L14.76694,5.83972 L14.76694,5.06347 L14.76694,3.89875 C14.76625,2.82856 13.89547,1.95847 12.82597,1.95847 Z M13.99,12.82597 C13.99,13.46767 13.46767,13.99 12.82597,13.99 L2.73472,13.99 C2.09233,13.99 1.57,13.46767 1.57,12.82597 L1.57,5.83972 L13.99,5.83972 L13.99,12.82597 Z M13.99,5.06347 L1.57,5.06347 L1.57,3.89875 C1.57,3.25636 2.09233,2.73403 2.73472,2.73403 L3.89944,2.73403 L3.89944,3.51028 L4.675,3.51028 L4.675,2.73472 L10.885,2.73472 L10.885,3.51097 L11.66125,3.51097 L11.66125,2.73472 L12.82597,2.73472 C13.46767,2.73472 13.99,3.25636 13.99,3.89875 L13.99,5.06347 Z"
                      id="Shape"
                    />
                  </g>
                </g>
              </svg>
              {distanceInWords(new Date(job.createdAt), new Date())} ago
            </Commitment>
            <Commitment>
              <svg
                width="20"
                height="20"
                viewBox="0 0 46 46"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Page-1" fill="none" fillRule="evenodd">
                  <g id="noun_clock_1570938" fill="#98989E" fillRule="nonzero">
                    <path
                      d="M23,0.2299793 C10.449038,0.2299793 0.23,10.4490173 0.23,23.0000138 C0.23,35.5508378 10.448969,45.7700138 23,45.7700138 C35.551031,45.7700138 45.77,35.5508378 45.77,23.0000138 C45.77,10.4490173 35.550962,0.2299793 23,0.2299793 Z M23,4.3699793 C33.313568,4.3699793 41.63,12.6864803 41.63,23.0000138 C41.63,33.3133748 33.313568,41.6300138 23,41.6300138 C12.686432,41.6300138 4.37,33.3133748 4.37,23.0000138 C4.37,12.6864803 12.686432,4.3699793 23,4.3699793 Z M23,7.8199793 C21.856808,7.8199793 20.93,8.7467873 20.93,9.8899793 L20.93,23.0000138 C20.93,23.5716098 21.159149,24.0916628 21.53375,24.4661948 L29.8353125,32.7677918 C30.6436682,33.5761958 31.9594085,33.5761958 32.7678125,32.7677918 C33.5761751,31.9594568 33.5761682,30.6436268 32.7678125,29.8352918 L25.07,22.1375138 L25.07,9.8899793 C25.07,8.7467873 24.143261,7.8199793 23,7.8199793 Z"
                      id="Shape"
                    />
                  </g>
                </g>
              </svg>
              {job.commitment && job.commitment.title}
            </Commitment>
            <Commitment>
              <svg
                width="20"
                height="17"
                viewBox="0 0 37 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Page-1" fill="none" fillRule="evenodd">
                  <g id="noun_remote_584216" fill="#000" fillRule="nonzero">
                    <path
                      d="M6.06904,7.656367 C6.17806,7.719847 6.29743,7.750207 6.41542,7.750207 C6.65278,7.750207 6.88462,7.627387 7.01227,7.407277 C7.38487,6.767647 8.07073,6.370207 8.80351,6.370207 L22.60351,6.370207 C22.98508,6.370207 23.29351,6.061087 23.29351,5.680207 C23.29351,5.298637 22.98508,4.990207 22.60351,4.990207 L8.80351,4.990207 C7.58152,4.990207 6.43819,5.650537 5.81995,6.713137 C5.62813,7.042267 5.73922,7.465237 6.06904,7.656367"
                      id="Path"
                    />
                    <path
                      d="M35.915887,27.676441 L31.573717,23.334271 L31.573717,20.859931 C31.573717,20.478361 31.265287,20.169931 30.883717,20.169931 C30.502147,20.169931 30.193717,20.478361 30.193717,20.859931 L30.193717,22.929931 L17.773717,22.929931 C17.392837,22.929931 17.083717,23.238361 17.083717,23.619931 C17.083717,24.001501 17.392837,24.309931 17.773717,24.309931 L30.598057,24.309931 L34.940227,28.652101 C35.242447,28.955011 35.130667,29.304151 35.089957,29.404201 C35.047867,29.503561 34.880197,29.829931 34.452397,29.829931 L2.475727,29.829931 C2.047927,29.829931 1.878877,29.503561 1.837477,29.404201 C1.796077,29.304151 1.684987,28.955011 1.987207,28.652101 L5.151547,25.487761 C5.421337,25.217971 5.421337,24.781891 5.151547,24.512101 C4.881757,24.242311 4.445677,24.242311 4.175887,24.512101 L1.011547,27.676441 C0.408487,28.279501 0.236677,29.144071 0.563047,29.932741 C0.889417,30.720031 1.622197,31.209931 2.475727,31.209931 L34.452397,31.209931 C35.305237,31.209931 36.038017,30.720031 36.364387,29.932741 C36.690757,29.144071 36.518947,28.279501 35.915887,27.676441"
                      id="Path"
                    />
                    <path
                      d="M28.123786,1.54 L32.263786,1.54 C33.162166,1.54 33.921166,2.11891 34.206826,2.92 L26.180746,2.92 C26.466406,2.11891 27.225406,1.54 28.123786,1.54 L28.123786,1.54 Z M32.263786,17.41 L28.123786,17.41 C26.982526,17.41 26.053786,16.48126 26.053786,15.34 L34.333786,15.34 C34.333786,16.48126 33.405046,17.41 32.263786,17.41 L32.263786,17.41 Z M26.053786,13.96 L34.333786,13.96 L34.333786,4.3 L26.053786,4.3 L26.053786,13.96 Z M28.123786,18.79 L32.263786,18.79 C34.166116,18.79 35.713786,17.24233 35.713786,15.34 L35.713786,3.61 C35.713786,1.70767 34.166116,0.16 32.263786,0.16 L28.123786,0.16 C26.221456,0.16 24.673786,1.70767 24.673786,3.61 L24.673786,15.34 C24.673786,17.24233 26.221456,18.79 28.123786,18.79 L28.123786,18.79 Z"
                      id="Shape"
                    />
                    <path
                      d="M8.113786,15.685 C8.113786,14.3533 9.197086,13.27 10.528786,13.27 C11.860486,13.27 12.943786,14.3533 12.943786,15.685 C12.943786,17.0167 11.860486,18.1 10.528786,18.1 C9.197086,18.1 8.113786,17.0167 8.113786,15.685 M14.323786,15.685 C14.323786,13.59292 12.621556,11.89 10.528786,11.89 C8.436016,11.89 6.733786,13.59292 6.733786,15.685 C6.733786,17.77708 8.436016,19.48 10.528786,19.48 C12.621556,19.48 14.323786,17.77708 14.323786,15.685"
                      id="Shape"
                    />
                    <path
                      d="M10.288183,26.286367 C8.103643,24.226027 3.973993,19.358077 3.973993,15.685207 C3.973993,12.070297 6.914083,9.130207 10.528993,9.130207 C14.143213,9.130207 17.083993,12.070297 17.083993,15.685207 C17.083993,19.315987 12.943993,24.206017 10.753933,26.284987 C10.687693,26.347777 10.604893,26.379517 10.522093,26.380207 L10.520023,26.380207 C10.437223,26.380207 10.354423,26.349157 10.288183,26.286367 L10.288183,26.286367 Z M6.733993,26.380207 C6.352423,26.380207 6.043993,26.688637 6.043993,27.070207 C6.043993,27.451087 6.352423,27.760207 6.733993,27.760207 L14.323993,27.760207 C14.704873,27.760207 15.013993,27.451087 15.013993,27.070207 C15.013993,26.688637 14.704873,26.380207 14.323993,26.380207 L12.606583,26.380207 C14.488213,24.409567 18.463993,19.763797 18.463993,15.685207 C18.463993,11.309917 14.904283,7.750207 10.528993,7.750207 C6.153013,7.750207 2.593993,11.309917 2.593993,15.685207 C2.593993,19.764487 6.600133,24.444757 8.439673,26.380207 L6.733993,26.380207 Z"
                      id="Shape"
                    />
                  </g>
                </g>
              </svg>
              {job.remotes && <div>Remote Allowed</div>}
            </Commitment>
          </DetailsContainer>
        </InnerWrapper>
        {/* <div>{job.description}</div> */}
      </Container>
    </div>
  );
};

export default Job;