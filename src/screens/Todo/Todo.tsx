import {Box, FlatList} from 'native-base';
import React from 'react';
import Header from '../../components/Header';
import TodoItem from './components/TodoItem';

const Todo = () => {
  const _renderItem = ({item, index}) => {
    return <TodoItem title="Learn react native" status={index % 2 === 0} />;
  };

  return (
    <Box flex={1}>
      <Header title="Todo" />
      <FlatList data={[1, 1, 1, 1, 1, 1]} renderItem={_renderItem} />
    </Box>
  );
};

export default Todo;
