import { Link, router } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { FeatureCard } from '../components/FeatureCard';
import { PrimaryButton } from '../components/PrimaryButton';
import { SectionHeading } from '../components/SectionHeading';
import { onboardingSteps, savedFoods, scanFlow, userProfileFeatures } from '../lib/features';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.tagline}>🥫 allens</Text>
        <Text style={styles.title}>Smart Allergy Scanner</Text>
        <Text style={styles.description}>
          Social login → camera → OCR → translation → allergy highlights. Everything you shared in
          the spec captured in one loop.
        </Text>
        <PrimaryButton label="Start scan flow" onPress={() => router.push('/camera')} />
        <Link href="/(auth)/login" style={styles.linkText}>
          Go to login storyboard
        </Link>
      </View>

      <SectionHeading title="Flow overview" subtitle="As discussed earlier" />
      <View style={styles.grid}>
        {onboardingSteps.map((step) => (
          <FeatureCard key={step.title} title={step.title} description={step.description} />
        ))}
      </View>

      <SectionHeading title="Camera & OCR" subtitle="Live pipeline" />
      <View style={styles.grid}>
        {scanFlow.map((step) => (
          <FeatureCard
            key={step.title}
            title={step.title}
            description={step.description}
            tone={step.tone}
          />
        ))}
      </View>

      <SectionHeading title="Saved history" />
      <View style={styles.grid}>
        {savedFoods.map((step) => (
          <FeatureCard
            key={step.title}
            title={step.title}
            description={step.description}
            tone={step.tone}
          />
        ))}
      </View>

      <SectionHeading title="User info" />
      <View style={styles.grid}>
        {userProfileFeatures.map((step) => (
          <FeatureCard
            key={step.title}
            title={step.title}
            description={step.description}
            tone={step.tone}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 28,
    backgroundColor: '#ffffff',
  },
  hero: {
    gap: 12,
    padding: 24,
    borderRadius: 24,
    backgroundColor: '#e2e8f0',
  },
  tagline: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0f172a',
  },
  description: {
    fontSize: 16,
    color: '#0f172a',
    lineHeight: 22,
  },
  linkText: {
    color: '#2563eb',
    fontSize: 14,
  },
  grid: {
    gap: 12,
  },
});
