import styled from "@emotion/styled";

export const Card = styled("div")`
  padding: 0.25rem;
  padding-bottom: 0.75rem;
  border: 0.0125rem solid var(--colors-primary-text);
  margin: 0.5rem 0;
  border-radius: 0.5rem;
  a {
    color: var(--colors-primary-text);
  }
  h4 {
    margin: 0.5rem 0;
  }
`;
export const Select = styled("select")`
  option {
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
  }
  font-size: inherit;
  font-weight: inherit;
  border: none;
  border-bottom: 0.0125em solid var(--colors-primary-text);
  color: inherit;
  outline: none;
`;