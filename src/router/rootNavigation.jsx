import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../utils/routes';
import TabNavigation from './tabNavigation';
import MovieList from '../screens/movieList';
import Header from '../components/router/header';
import MovieDetail from '../screens/movieList/movieDetail';
import Nottification from '../screens/nottification';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: props => <Header {...props} />,
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={Routes.TAB}
        component={TabNavigation}
      />
      <Stack.Screen name={Routes.MOVIELIST} component={MovieList} />
      <Stack.Screen name={Routes.MOVIEDETAIL} component={MovieDetail} />
      <Stack.Screen name={Routes.NOTIFICATION} component={Nottification} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
