import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {Box, Checkbox, Icon, Menu, Pressable, Text} from 'native-base';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import {ITodo, removeTodo, toggleStatus} from '../todoSlice';

interface IProps {
  item: ITodo;
}

const TodoItem = ({item}: IProps) => {
  const {id, title, status} = item;
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const dispatch = useDispatch();

  const _onToggleStatus = () => {
    dispatch(toggleStatus(id));
  };

  const _onDelete = () => {
    dispatch(removeTodo(id));
  };

  const _onEdit = () => {
    navigation.navigate('AddTodo', {isEdit: true, todo: item});
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
          <Text
            flex={1}
            textDecorationLine={status ? 'line-through' : undefined}
            ml="2"
            numberOfLines={1}>
            {title}
          </Text>
        </Checkbox>
      </Box>
      <Menu
        w="190"
        trigger={triggerProps => {
          return (
            <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <Icon
                as={Entypo}
                name="dots-three-vertical"
                color="black"
                size="4"
              />
            </Pressable>
          );
        }}>
        <Menu.Item onPress={_onEdit}>Edit</Menu.Item>
        <Menu.Item onPress={_onDelete}>Delete</Menu.Item>
      </Menu>
    </Box>
  );
};

export default TodoItem;
