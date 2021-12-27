import {useNavigation} from '@react-navigation/native';
import {Box, Button, Input, Stack} from 'native-base';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Header from '../../components/Header';
import {addTodo} from '../Todo/todoSlice';
import uuid from 'react-native-uuid';

const AddTodo = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [name, setName] = useState('');

  const _onAddTodo = () => {
    if (name) {
      dispatch(
        addTodo({
          id: uuid.v4(),
          title: name,
          status: false,
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
        <Button onPress={_onAddTodo} borderRadius="full" p="3">
          Create a new todo
        </Button>
      </Stack>
    </Box>
  );
};

export default AddTodo;
