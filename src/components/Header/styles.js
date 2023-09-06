import { styled } from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 12.5rem;
  background: var(--gray-700);
  display: flex;
  align-items: center;
  justify-content: center;

   
   img{
    width: 1.375rem;
    height: 2rem;
    margin-top: 12px;
   }

   p{
    color: var(--blue);
    font-size: 2.5rem;
    font-weight: 900;
    margin-left: 0.75rem;

    span{
      color: var(--purple-dark);
    }
   }
`