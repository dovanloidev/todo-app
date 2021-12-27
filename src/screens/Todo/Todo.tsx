import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {Box, Fab, FlatList, Icon} from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../components/Header';
import {useAppSelector} from '../../store/hooks';
import {todoListSelector} from '../../store/selectors';
import TodoItem from './components/TodoItem';
import {ITodo} from './todoSlice';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

interface ITodoItem {
  item: ITodo;
  index: number;
}

const Todo = ({navigation}: IProps) => {
  const todoList = useAppSelector(todoListSelector);

  const _onAddTodo = () => {
    navigation.navigate('AddTodo');
  };

  const _renderItem = ({item}: ITodoItem) => {
    return <TodoItem item={item} />;
  };

  return (
    <Box flex={1}>
      <Header title="Todo" />
      <FlatList data={todoList} renderItem={_renderItem} />
      <Fab
        onPress={_onAddTodo}
        placement="bottom-right"
        colorScheme="blue"
        size="sm"
        icon={<Icon as={AntDesign} size="sm" color="white" name="plus" />}
        renderInPortal={false}
      />
    </Box>
  );
};

export default Todo;
