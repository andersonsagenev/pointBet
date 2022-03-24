import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { COLORS }  from '../../theme';

import { styles } from './styles';

export function Load () {
  return (
        <View style={styles.container}>
            <ActivityIndicator
            size='large'
            color={COLORS.primary}
            />

      </View>
  )

}

export default Load;