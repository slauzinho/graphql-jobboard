import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    padding: 2rem 5rem;
    margin-top: -5.5rem;
    margin-bottom: 5rem;
    border: 2px solid #d3d3d3;
    border-radius: 5px;
    border-top: none;
    border-left: 8px solid ${props => props.theme.colors.primary};
`;