import { useState } from 'react'
import { Container } from './style'
import { Trash } from '@phosphor-icons/react'

export function Task({ isTaskCreated, content, isTaskCompleted, deleteTask}) {
  
  const [isCheckBoxClicked, setIsCheckBoxClicked] = useState()

  function handleCheckboxChecked(){
    setIsCheckBoxClicked(event.target.checked)

    isTaskCompleted(!isCheckBoxClicked)
  }

  return (
    <div style={{ padding: '0 6px' }} className={isTaskCreated ? "" : "displayNone" }>
      <Container>
        <div>
          <div className='custom-checkbox'>
            <input type="checkbox" name="" id={content} onClick={handleCheckboxChecked}/>
            <label htmlFor={content}></label>
          </div>
          <p className={isCheckBoxClicked ? "textThrough" : ""}>{content}</p>
        </div>

        <Trash className='trashImg' onClick={()=>deleteTask(content)}/>
      </Container>
    </div>
  )
}