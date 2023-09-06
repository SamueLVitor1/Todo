import { SectionNotTask } from "./styles";
import Clipboard from '../../assents/Clipboard.svg'

export function WithoutTask({ isTaskCreated }) {
  return (
    <div className={isTaskCreated ? "displayNone" : "" } >
      <SectionNotTask>
        <img src={Clipboard} alt="" />
        <p>
          Você ainda não tem tarefas cadastradas
        </p>
        <span>
          Crie tarefas e organize seus itens a fazer
        </span>
      </SectionNotTask>
    </div>
  )
}