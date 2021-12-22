import {Box, Text} from 'native-base';
import React from 'react';

interface IProps {
  title: string;
}

const Header: React.FC<IProps> = ({title}) => {
  return (
    <Box bg="white" p="4" safeAreaTop>
      <Text fontSize="lg" bold textAlign="center">
        {title}
      </Text>
    </Box>
  );
};

export default Header;
