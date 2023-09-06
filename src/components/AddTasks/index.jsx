import { useState } from 'react'
import { WithoutTask } from '../WithoutTask'
import { FormAddTask, InfoTasks } from './styles'
import { PlusCircle } from '@phosphor-icons/react'
import { Task } from '../Task'

export function AddTasks() {

  const [create, setCreate] = useState(false)
  const [textNewTask, setTextNewTask] = useState('')
  const [listTask, setListTask] = useState([])
  const [numberTaskCompleted, setNumberTaskCompleted] = useState(0)

  function handleClickCreate() {
    event.preventDefault()
    if(textNewTask === "") return alert('preencha o campo de nova tarefa 🖐🛑')

    setListTask([...listTask, textNewTask])
    setTextNewTask('')
    setCreate(true)
  }

  function isTaskCompleted(valor) {
    if (valor === true) return setNumberTaskCompleted(numberTaskCompleted + 1)
    if (valor === false ) return setNumberTaskCompleted(numberTaskCompleted - 1)


  }

  function handleKeyDown(){
    if (event.key === 'Enter') {
      handleClickCreate()
    }
  }

  function deleteTask(content, valor){
    const newListTask = listTask.filter(task=>{
      return task !== content
    })
    
    setListTask(newListTask)
    if(valor === false && numberTaskCompleted !== 0 )setNumberTaskCompleted(numberTaskCompleted - 1)
  }

  return (
    <>
      <FormAddTask>
        <textarea
          placeholder='Adicionar uma nova tarefa'
          onChange={() => setTextNewTask(event.target.value)}
          value={textNewTask}
          onKeyDown={handleKeyDown}
          required
        />

        <button type="submit" onClick={handleClickCreate}>
          Criar
          <PlusCircle />
        </button>
      </FormAddTask>

      <InfoTasks>
        <div>
          Tarefas criadas <span>{listTask.length}</span>
        </div>

        <div>
          Concluídas <span>{numberTaskCompleted} de {listTask.length}</span>
        </div>
      </InfoTasks>

      <WithoutTask
        isTaskCreated={create}
      />

      {listTask.map(task => {
        return (
        <Task 
          key={task} 
          content={task} 
          isTaskCreated={create} 
          isTaskCompleted={isTaskCompleted} 
          deleteTask={deleteTask}
        /> )
      }
      )}

    </>




  )
}