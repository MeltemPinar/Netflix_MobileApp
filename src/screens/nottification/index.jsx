//import liraries
import React from 'react';
import {View, FlatList} from 'react-native';
import {screenStyles} from '../../styles/screenStyles';
import {useSelector} from 'react-redux';
import NottificationCard from '../../components/nottification/notificationCard';

// create a component
const Nottification = () => {
  const {nottifications} = useSelector(state => state.nottification);
  console.log(nottifications);
  return (
    <View style={screenStyles.container}>
      <FlatList
        data={nottifications}
        renderItem={({item}) => <NottificationCard item={item} />}
      />
    </View>
  );
};

//make this component available to the app
export default Nottification;
