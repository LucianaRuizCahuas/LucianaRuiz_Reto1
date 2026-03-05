import { useEffect, useRef } from 'react';
import { StyleSheet, View, Pressable, Animated } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { router } from 'expo-router';

export default function HomeScreen() {

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ThemedView style={styles.container}>

      {/* Logo */}
      <Animated.Image
        source={require('@/assets/images/Angoma.jpeg')}
        style={[styles.logo, { opacity: fadeAnim }]}
        resizeMode="contain"
      />

      {/* Título */}
      <Animated.View style={{ opacity: fadeAnim, marginBottom: 12 }}>
        <ThemedText type="title" style={styles.title}>
          Angoma Tours
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Viaja seguro de Cañete a Huancayo
        </ThemedText>
      </Animated.View>

      {/* Descripción */}
      <ThemedText style={styles.description}>
        Plataforma móvil para gestión de reservas, control de pasajeros,
        monitoreo de viajes en tiempo real y administración de rutas.
        Sistema exclusivo para el equipo administrativo de Angoma Tours.
      </ThemedText>

      {/* Botón principal */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => {
          router.push('/dashboard');
        }}
      >
        <ThemedText style={styles.buttonText}>
          Ingresar al Panel
        </ThemedText>
      </Pressable>

      {/* Footer */}
      <ThemedText style={styles.footer}>
        Transporte interprovincial • Servicio confiable y puntual
      </ThemedText>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    backgroundColor: '#0E3B43', // Azul turístico elegante
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#BDE0E6',
    textAlign: 'center',
    marginTop: 4,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 48,
    lineHeight: 26,
    color: '#E0F2F1',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 56,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.97 }],
  },
  buttonText: {
    color: '#0E3B43',
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    fontSize: 12,
    color: '#A5D6A7',
    textAlign: 'center',
  },
});