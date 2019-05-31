import styled from 'styled-components';

export const Pill = styled.div`
    background-color: ${({theme}) => theme.colors.secondary};
    border-radius: 5px;
    border: 1px solid ${({theme}) => theme.colors.secondary};
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 1rem;
    text-transform: uppercase;
`;
