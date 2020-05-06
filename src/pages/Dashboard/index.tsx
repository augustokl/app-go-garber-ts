import React from 'react';
import { View, TouchableNativeFeedback, Text } from 'react-native';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <TouchableNativeFeedback onPress={() => signOut()}>
        <Text style={{ color: '#fff' }}>Sign Out</Text>
      </TouchableNativeFeedback>
    </View>
  );
};

export default Dashboard;
