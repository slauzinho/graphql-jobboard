import { gql } from 'apollo-boost';

export default gql`
  query FETCH_JOB_QUERY {
    jobs {
      id
      title
      createdAt
      slug
      tags {
        id
        name
      }
      isPublished
      isFeatured
      locationNames
      createdAt
      updatedAt
      company {
        id
        name
        logoUrl
      }
      commitment {
        id
        title
        slug
      }
      cities {
        id
        name
        country {
          name
          isoCode
        }
      }
      remotes {
        name
      }
      description
      applyUrl
      userEmail
      postedAt
    }
  }
`;
