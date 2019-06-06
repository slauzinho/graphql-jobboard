import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #fffbf6;
  padding-right: 5rem;
  padding-left: 5rem;
  border: 2px solid;
  border-radius: 5px;
  border-color: #d3d3d3;
  border-left-width: 8px;
  border-left-color: ${props => props.theme.colors.primary};
  margin-bottom: 5rem;
  align-items: center;

  img {
    margin-right: 5rem;
    border-radius: 50%;
  }

  :hover,
  :focus {
    border-left-color: ${props => props.theme.colors.featured};
  }

  &:hover + div,
  &:focus + div {
    border-left-color: ${props => props.theme.colors.featured};
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: ${props => props.theme.text.dark};
  line-height: 1.5;
  cursor: pointer;

  :hover,
  :focus {
    text-decoration: underline;
  }
`;

export const SubTitleWrapper = styled.div`
  display: flex;
`;

export const SubTitle = styled.h3`
  color: ${props => props.theme.text.primary};
`;

export const Company = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-weight: 700;
  margin-right: 1rem;
`;

export const Commitment = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 1rem;
  }
  button {
    margin-top: 1rem;
  }
`;
export const JobContentWrapper = styled.div`
  flex: 1;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
