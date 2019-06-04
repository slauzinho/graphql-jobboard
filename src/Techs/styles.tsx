import styled from 'styled-components';

interface PillProps {
  readonly active: boolean | null;
}

export const Pill = styled.div<PillProps>`
  background-color: ${props =>
    props.active ? props.theme.colors.primary : props.theme.colors.secondary};
  border-radius: 5px;
  border: 1px solid
    ${props =>
      props.active ? props.theme.colors.primary : props.theme.colors.secondary};
  color: ${props => (props.active ? 'white' : 'black')};
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  margin-top: 1.5rem;

  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 1rem;
  text-transform: uppercase;
`;
