import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { PrimaryButton } from '@/components/PrimaryButton';
import { SectionHeading } from '@/components/SectionHeading';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <SectionHeading title="Social login" subtitle="Mocked for now" />
      <View style={styles.card}>
        <Text style={styles.copy}>
          Here we will drop Google / Apple / Kakao / Naver providers. For now this button just
          routes you back to the storyboard so we can focus on the scan flow.
        </Text>
        <PrimaryButton label="Continue" onPress={() => router.replace('/camera')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    gap: 16,
  },
  card: {
    padding: 24,
    borderRadius: 24,
    backgroundColor: '#f8fafc',
    gap: 16,
  },
  copy: {
    fontSize: 16,
    color: '#0f172a',
    lineHeight: 22,
  },
});
