import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="download image from base64" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    marginBottom: 10,
  },
});

export default App;
