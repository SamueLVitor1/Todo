import styled from 'styled-components'

export const Container = styled.li`
  padding: 8px;
  max-width: 46rem;
  color: var(--gray-100);
  font-size: 0.875rem;
  margin: 1.5rem auto;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 8px;
  border: 1px solid var(--Gray-400, #333);
  background: var(--Gray-500, #262626);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);

  div:first-child{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  .custom-checkbox{
    input{
      display: none;
    }

    input + label:before {
    content: '';
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: none;
      border: 1px solid var(--blue);
      display: inline-block;
      vertical-align: middle;
      cursor: pointer; 
    }

    input:checked + label:before {
      background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 10 10'%3E%3Cg class='nc-icon-wrapper' stroke-width='1' fill='%23555555'%3E%3Cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' data-cap='butt' d='M2.83 4.72l1.58 1.58 2.83-2.83'/%3E%3C/g%3E%3C/svg%3E");
      background-color: var(--purple-dark);
      background-position: center;
      border: none;
      padding: 1px;
    }

    
  }

  .trashImg{
    cursor: pointer;
    width: 1.15rem;
    height: 1.15rem;
    padding: 5px 5.522px 5px 6px;

    transition: all 0.2s;
    &:hover{
      color: var(--danger);
      border-radius: 4px;
      background: var(--Gray-400, #333);
    }
  }

  .textThrough{
    color: var(--gray-300);
    text-decoration: line-through;
  } 
  
`