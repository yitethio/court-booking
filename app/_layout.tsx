import { Stack } from "expo-router";
import "../global.css"
import React from 'react';

export default function AppLayout() {
  const isRegistered = false;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'white' },
      }}
    >
      <Stack.Screen 
        name="onboarding"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="(tabs)"
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      <Stack.Screen 
        name="[id]" 
        options={{ 
          presentation: 'modal',
          headerShown: false,
        }} 
      />
    </Stack>
  );
}
