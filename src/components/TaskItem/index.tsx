import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity, Image, View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { EditTaskArgs } from '../../pages/Todo';
import { Task } from '../TaskList';
import { styles } from './styles';
import trashIcon from '../../assets/icons/trash/trash.png'
import editIcon from '../../assets/icons/edit/edit.png'

interface TasksItemProps {
  task: Task;
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  editTask: ({ taskId, taskNewTitle }: EditTaskArgs) => void;
}

export function TaskItem({ task, editTask, removeTask, toggleTaskDone }: TasksItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskTitleValue, setNewTaskTitleValue] = useState(task.title);
  const textInputRef = useRef<TextInput>(null);

  function handleStartEditing() {
    setIsEditing(true);
  }
  function handleCancelEditing() {
    setNewTaskTitleValue(task.title);
    setIsEditing(false);
  }
  function handleSubmitEditing() {
    editTask({ taskId: task.id, taskNewTitle: task.title });
    setIsEditing(false);
  }

  useEffect(() => {
    if (textInputRef.current) {
      if (isEditing) {
        textInputRef.current.focus();
      } else {
        textInputRef.current.blur();
      }
    }
  }, [isEditing])


  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.taskButton}
          onPress={() => toggleTaskDone(task.id)}
        >
          <View
            style={task.done ? styles.taskMarkerDone : styles.taskMarker}
          >
            {task.done && (
              <Icon
                name="check"
                size={12}
                color="#FFF"
              />
            )}
          </View>

          <TextInput
            value={newTaskTitleValue}
            onChangeText={setNewTaskTitleValue}
            editable={isEditing}
            onSubmitEditing={handleSubmitEditing}
            style={task.done ? styles.taskTextDone : styles.taskText}
            ref={textInputRef}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.iconsContainer}>
        {isEditing ? (
          <TouchableOpacity
            onPress={handleCancelEditing}>
            <Icon name='X' size={24} color="#b2b2b2" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handleStartEditing}


          >
            <Image source={trashIcon} />
          </TouchableOpacity>

        )}

        <View style={styles.iconsDevider} />

        <TouchableOpacity
          onPress={() => removeTask(task.id)}
          disabled={isEditing}
        >
          <Image source={trashIcon} style={{ opacity: isEditing ? 0.2 : 1 }} />
        </TouchableOpacity>
      </View>



    </View>
  )
}

export default TaskItem;