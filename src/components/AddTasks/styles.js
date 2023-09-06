import { styled } from 'styled-components'

export const FormAddTask = styled.form`
  padding: 8px;
  max-width: 46rem;
  margin: -40px auto;
  display: grid;
  grid-template-columns: 1fr 5.625rem;
  grid-template-rows: 3.375rem;
  grid-column-gap: 8px;

  textarea{
  resize: none;
  border: none;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--gray-700);
  color: var(--gray-300) ;
  background: var(--gray-500);
 }

 button{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  color: var(--gray-100);
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 140%;
  background: var(--blue-dark);
  border-radius: 8px;

  transition: background 0.2s;
  &:hover{
    background: var(--blue);
  }
 }

 @media (max-width: 680px) {
  grid-template-columns: 1fr 3.75rem;

  button{
    font-size: 0.81rem;
    gap: 4px;
  }
 }
`

export const InfoTasks = styled.section`
  padding: 8px;
  max-width: 46rem;
  margin: 4rem auto;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  div:first-child{
    color: var(--blue);
    font-size: 0.875rem;
    font-weight: 700;
  }

  div:last-child{
    color: var(--purple);
    font-size: 0.875rem;
    font-weight: 700;
  }

  span{
      padding: 2px 8px;
      border-radius: 999px;
      background: var(--Gray-400, #333);
      color: var(--gray-200);
      margin-left: 8px;
    }
`