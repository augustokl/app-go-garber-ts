import React from 'react';
import { View, TouchableNativeFeedback, Text } from 'react-native';

const Profile: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <TouchableNativeFeedback onPress={() => {}}>
        <Text style={{ color: '#fff' }}>Sign Out</Text>
      </TouchableNativeFeedback>
    </View>
  );
};

export default Profile;
