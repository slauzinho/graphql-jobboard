import styled from 'styled-components';

export const Button = styled.button`
  -webkit-font-smoothing: antialiased;
  -webkit-highlight: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  box-sizing: border-box;
  display: inline-block;
  margin: 0;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  background-color: #085ff7
  border: .125rem solid #085ff7;
  border-radius: 6.25rem;
  background-repeat: repeat-x;
  appearance: none;
  cursor: pointer;
  user-select: none;
  padding: 8px 24px;
  font-weight: 700;

  :hover, :active, :focus {
    background-color: #1497ff;
    border-color: #1497ff;
  }

  :focus {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #1497ff;
    outline: none;
  }
`;
