import React from 'react';
import { FlatList } from 'react-native';
import { ItemWrapper } from '../ItemWrapper';
import { TaskItem } from '../TaskItem'
import { styles } from './styles';

import { EditTaskArgs } from '../../pages/Todo';

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  editTask: ({ taskId, taskNewTitle } : EditTaskArgs) => void;
}



export function TasksList({ tasks, toggleTaskDone, removeTask, editTask }: TasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={{ paddingBottom: 24 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <ItemWrapper index={index}>
            <TaskItem 
              task={item}
              editTask={editTask}
              toggleTaskDone={toggleTaskDone}
              removeTask={removeTask}/>
          </ItemWrapper>
        )
      }}
      style={{
        marginTop: 32
      }}
    />
  )
}