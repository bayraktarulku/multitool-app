import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import { LinearGradient } from './LinearGradient';

const { width } = Dimensions.get('window');

export const HelloWorld: React.FC = () => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const scaleAnim = React.useRef(new Animated.Value(0.3)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 10,
        friction: 3,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, scaleAnim]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.card,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}>
        <LinearGradient
          colors={['#667eea', '#764ba2']}
          style={styles.gradient}>
          <View style={styles.content}>
            <Text style={styles.emoji}>👋</Text>
            <Text style={styles.title}>Hello World</Text>
            <Text style={styles.subtitle}>Modern React Native App</Text>
            <View style={styles.divider} />
            <Text style={styles.description}>
              Bu modern ve güzel bir mobil uygulama tasarımıdır
            </Text>
          </View>
        </LinearGradient>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  card: {
    width: width * 0.85,
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 15,
  },
  gradient: {
    padding: 40,
  },
  content: {
    alignItems: 'center',
  },
  emoji: {
    fontSize: 72,
    marginBottom: 16,
  },
  title: {
    fontSize: 42,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    opacity: 0.9,
    marginBottom: 20,
  },
  divider: {
    width: 60,
    height: 4,
    backgroundColor: '#ffffff',
    borderRadius: 2,
    marginBottom: 20,
    opacity: 0.7,
  },
  description: {
    fontSize: 15,
    color: '#ffffff',
    textAlign: 'center',
    opacity: 0.85,
    lineHeight: 22,
  },
});

