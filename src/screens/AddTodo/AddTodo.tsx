import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {Box, Button, Input, Stack} from 'native-base';
import React, {useState} from 'react';
import uuid from 'react-native-uuid';
import {useDispatch} from 'react-redux';
import Header from '../../components/Header';
import {addTodo, ITodo, updateTodo} from '../Todo/todoSlice';

type IParams = {
  params: {
    isEdit: boolean;
    todo: ITodo;
  };
};

interface IProps {
  route: RouteProp<IParams, 'params'>;
  navigation: NavigationProp<ParamListBase>;
}

const AddTodo = ({route: {params}, navigation}: IProps) => {
  const {isEdit, todo} = params || {};

  const dispatch = useDispatch();
  const [name, setName] = useState(todo?.title || '');

  const _onAddTodo = () => {
    if (name) {
      dispatch(
        addTodo({
          id: uuid.v4().toString(),
          title: name,
          status: false,
        }),
      );
      navigation.goBack();
    }
  };

  const _onEdit = () => {
    if (name) {
      dispatch(
        updateTodo({
          ...todo,
          title: name,
        }),
      );
      navigation.goBack();
    }
  };

  return (
    <Box flex={1}>
      <Header title="Add Todo" />
      <Stack m="3" space="5">
        <Input
          placeholder="Name Todo"
          bg="white"
          borderRadius="full"
          p="4"
          value={name}
          onChangeText={setName}
        />
        <Button
          onPress={isEdit ? _onEdit : _onAddTodo}
          borderRadius="full"
          p="3">
          {isEdit ? 'Update todo' : 'Create a new todo'}
        </Button>
      </Stack>
    </Box>
  );
};

export default AddTodo;
