import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import FAB from './components/FAB';

export default function App() {
  const [count, setCount] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>

      {/* <Pressable
        style={styles.floatingButton}
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      >
        <Text style={{ color: 'white', fontSize: 20 }}>+1</Text>
      </Pressable> */}

      <FAB
        label="+1"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        position="right"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textHuge: {
    fontSize: 120,
    fontWeight: '100',
  },
});
