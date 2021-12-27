import {useNavigation} from '@react-navigation/native';
import {Box, IconButton, Text} from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IProps {
  title: string;
}

const Header: React.FC<IProps> = ({title}) => {
  const navigation = useNavigation();

  const isGoBack = navigation.canGoBack();

  const _onGoBack = () => {
    navigation.goBack();
  };

  return (
    <Box bg="white" safeAreaTop flexDir="row" alignItems="center">
      {isGoBack && (
        <IconButton
          onPress={_onGoBack}
          p="4"
          borderRadius="full"
          _icon={{
            as: Ionicons,
            name: 'arrow-back',
            size: 'md',
          }}
          _pressed={{bg: 'gray.100'}}
        />
      )}
      <Text flex={1} fontSize="lg" bold textAlign="center">
        {title}
      </Text>
      {isGoBack && (
        <IconButton onPress={_onGoBack} disabled p="4" opacity={0} />
      )}
    </Box>
  );
};

export default Header;
