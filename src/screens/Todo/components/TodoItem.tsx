import {Box, Button, Checkbox, Icon} from 'native-base';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import {ITodo, toggleStatus} from '../todoSlice';

interface IProps {
  item: ITodo;
}

const TodoItem = ({item}: IProps) => {
  const {id, title, status} = item;

  const dispatch = useDispatch();

  const _onToggleStatus = () => {
    dispatch(toggleStatus(id));
  };

  return (
    <Box
      flexDir="row"
      alignItems="center"
      bg="white"
      borderRadius="sm"
      p="3"
      mt="2">
      <Box flex={1}>
        <Checkbox
          value=""
          defaultIsChecked={status}
          isChecked={status}
          onChange={_onToggleStatus}>
          {title}
        </Checkbox>
      </Box>
      <Button bg="transparent" _pressed={{bg: 'transparent'}}>
        <Icon as={Entypo} name="dots-three-vertical" color="black" size="4" />
      </Button>
    </Box>
  );
};

export default TodoItem;
