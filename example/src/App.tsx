import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { check } from 'test-old-module';

const TIMES_TO_CHECK = 100000;

export default function App() {
  const [executionTime, setExecutionTime] = React.useState<number | null>(null);

  const checkExecutionTime = async () => {
    const startTime = performance.now();

    for (let i = 0; i < TIMES_TO_CHECK; i++) {
      //@ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const result = await check(); // Call check function TIMES_TO_CHECK times
    }

    const endTime = performance.now();
    setExecutionTime(endTime - startTime); // Calculate the time taken to execute 1000 calls
  };

  React.useEffect(() => {
    checkExecutionTime();
  }, []);

  return (
    <View style={styles.container}>
      <Text>
        {`Time Taken to Execute ${TIMES_TO_CHECK.toLocaleString()} Calls: `}
        {executionTime ? `${executionTime.toFixed(2)} ms` : 'Calculating...'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
