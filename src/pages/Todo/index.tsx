import React, { useState } from 'react';
import { Alert, View } from 'react-native';

import { Header } from '../../components/Headers';
import { TasksList, Task } from '../../components/TaskList';
import { TodoInput } from '../../components/TodoInput';
import { styles } from './styles';

export type EditTaskArgs = {
  taskId: number;
  taskNewTitle: string;
}

export function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const taskWithSameTitle = tasks.find( task => task.title === newTaskTitle)

    if(taskWithSameTitle){
      return Alert.alert('Tarefa já Cadastrada', 'Você nao pode cadastrar mesmo nome');
    }
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    setTasks(oldTasks => [...oldTasks, newTask]);
  }

  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map(task => ({ ...task }));
    const foundItem = updatedTasks.find(item => item.id === id);
    if(!foundItem)
    return;

    foundItem.done = !foundItem.done;
    setTasks(updatedTasks);

    //TODO - toggle task done if exists
  }

  function handleRemoveTask(id: number) {
    Alert.alert('Remover Tarefa', 'Tem certeza que você deseja remover?', [
    {
      style: 'cancel',
      text: 'Não'
    },
    {
      style: 'destructive',
      text: 'Sim',
      onPress: () => {
         const updateTask = tasks.filter(task => task.id !== id);
       setTasks(updateTask);
      }
    }])
  }

  function handleEditTask({ taskId, taskNewTitle }: EditTaskArgs) {
    const updatedTasks = tasks.map(task => ({ ...task }));

    const foundItem = updatedTasks.find(item => item.id === taskId);

    if(!foundItem)
    return;

    foundItem.title = taskNewTitle;
    setTasks(updatedTasks);

  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
        editTask={handleEditTask}
      />
    </View>
  )
}