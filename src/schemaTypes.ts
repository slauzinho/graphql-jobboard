/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FETCH_JOB_QUERY
// ====================================================

export interface FETCH_JOB_QUERY_jobs_tags {
  __typename: "Tag";
  id: string;
  name: string;
}

export interface FETCH_JOB_QUERY_jobs_company {
  __typename: "Company";
  id: string;
  name: string;
  logoUrl: string | null;
}

export interface FETCH_JOB_QUERY_jobs_commitment {
  __typename: "Commitment";
  id: string;
  title: string;
  slug: string;
}

export interface FETCH_JOB_QUERY_jobs_cities_country {
  __typename: "Country";
  name: string;
  isoCode: string | null;
}

export interface FETCH_JOB_QUERY_jobs_cities {
  __typename: "City";
  id: string;
  name: string;
  country: FETCH_JOB_QUERY_jobs_cities_country;
}

export interface FETCH_JOB_QUERY_jobs_remotes {
  __typename: "Remote";
  name: string;
}

export interface FETCH_JOB_QUERY_jobs {
  __typename: "Job";
  id: string;
  title: string;
  createdAt: any;
  slug: string;
  tags: FETCH_JOB_QUERY_jobs_tags[] | null;
  isPublished: boolean | null;
  isFeatured: boolean | null;
  locationNames: string | null;
  updatedAt: any;
  company: FETCH_JOB_QUERY_jobs_company | null;
  commitment: FETCH_JOB_QUERY_jobs_commitment;
  cities: FETCH_JOB_QUERY_jobs_cities[] | null;
  remotes: FETCH_JOB_QUERY_jobs_remotes[] | null;
  description: string | null;
  applyUrl: string | null;
  userEmail: string | null;
  postedAt: any;
}

export interface FETCH_JOB_QUERY {
  jobs: FETCH_JOB_QUERY_jobs[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
