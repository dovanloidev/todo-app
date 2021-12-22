import React, {useState} from 'react';
import {Box, Button, Checkbox, Icon} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';

interface IProps {
  title: string;
  status: boolean;
}

const TodoItem: React.FC<IProps> = ({title, status}) => {
  const [isChecked, setIsChecked] = useState(status);

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
          isChecked={isChecked}
          onChange={setIsChecked}>
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
