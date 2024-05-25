import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack initialRouteName='auth/login'>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="auth/login" options={{ headerShown: false }} />
      <Stack.Screen name="auth/signup" options={{ headerShown: false }} />
    </Stack>
  );
}
