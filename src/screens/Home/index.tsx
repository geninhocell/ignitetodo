import { useState } from 'react';
import { TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import uuid from 'react-native-uuid';

import Logo from '../../assets/images/logo.svg';
import Plus from '../../assets/images/plus.svg';
import { ListEmpty } from '../../components/ListEmpty';
import { Status } from '../../components/Status';
import { TodoCard } from '../../components/TodoCard';
import { styles } from './styles';

export type TodoProps = {
  uid: string;
  title: string;
  completed: boolean;
};

export function Home() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [todosCount, setTodosCount] = useState(0);
  const [todosCountFinish, setTodosCountFinish] = useState(0);

  function handleAdd() {
    if (!todo) {
      return;
    }

    const uid = uuid.v4() as string;

    const todoFormatted: TodoProps = {
      uid,
      title: todo,
      completed: false,
    };

    setTodosCount((prevState) => prevState + 1);
    setTodos((prevState) => [todoFormatted, ...prevState]);
    setTodo('');
  }

  function handleRemove(uid: string) {
    setTodos((prevState) => prevState.filter((t) => t.uid !== uid));
    setTodosCount((prevState) => prevState - 1);
  }

  function handleToggleCompleted(uid: string) {
    setTodos((prevState) =>
      prevState.map((t) => {
        if (t.uid === uid) {
          if (!t.completed) {
            setTodosCountFinish((prevState) => prevState + 1);
          } else {
            setTodosCountFinish((prevState) => prevState - 1);
          }
          return {
            ...t,
            completed: !t.completed,
          };
        }

        return t;
      })
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTodo}
          value={todo}
        />

        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Plus />
        </TouchableOpacity>
      </View>

      <View style={styles.status}>
        <Status title="Criadas" count={todosCount} />

        <Status title="Concluídas" count={todosCountFinish} />
      </View>

      <FlatList
        style={styles.list}
        data={todos}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => (
          <TodoCard
            data={item}
            onToggle={() => handleToggleCompleted(item.uid)}
            onRemove={() => handleRemove(item.uid)}
          />
        )}
        ListEmptyComponent={() => <ListEmpty />}
      />
    </View>
  );
}
