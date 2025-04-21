import { Stack, Tabs } from "expo-router";
import "../global.css"
import { Ionicons } from '@expo/vector-icons';

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="[id]" 
        options={{ 
          headerShown: false,
          presentation: 'modal'
        }}
      />
    </Stack>
  );
}
