import React from 'react';
import {Routes} from '../../utils/routes';
import Ionicons from 'react-native-vector-icons/Ionicons';

// create a component
const TabIcon = ({size, color, iconName}) => {
  if (iconName == Routes.HOME) {
    return <Ionicons size={size} color={color} name={'home'} />;
  } else if (iconName == Routes.FAVORITE) {
    return <Ionicons size={size} color={color} name="heart" />;
  }
};
export default TabIcon;
