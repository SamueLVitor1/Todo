import { styled } from 'styled-components'

export const SectionNotTask = styled.section`
  padding: 8px;
  max-width: 46rem;
  height: 15.25rem;
  margin: 1.5rem auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 8px;
  border-top: 1px solid var(--Grey-400, #333);

  img{
    width: 3.5rem;
    height: 3.5rem;
  }

  p{
    margin-top: 1rem;
  }

  p, span{
    color: var(--gray-300);
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; 
  }
`