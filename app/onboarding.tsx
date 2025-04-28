import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';

export default function Onboarding() {
  const router = useRouter();
  const [step, setStep] = useState<'role' | 'register'>('role');
  const [role, setRole] = useState<'customer' | 'owner' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleRegister = () => {
    // Here you would typically send the data to your backend
    console.log('Registration data:', { ...formData, role });
    router.replace('/(tabs)');
  };

  if (step === 'role') {
    return (
      <View className="flex-1 bg-white">
        <View className="relative w-full h-full">
          <Image 
            source={require('../assets/images/basketball-court.png')}
            className="absolute w-full h-full"
            resizeMode="cover"
          />
          {/* Dark overlay for better text visibility */}
          <View className="absolute w-full h-full bg-black/40" />
          
          <View className="relative p-6 flex-1 justify-center">
            <Text className="text-3xl font-bold mb-8 text-white">Who are you?</Text>
            <View className="space-y-4">
              <TouchableOpacity 
                className="bg-white rounded-xl p-4"
                onPress={() => {
                  setRole('owner');
                  setStep('register');
                }}
              >
                <Text className="text-xl text-green-500 font-semibold text-center">Court Owner</Text>
              </TouchableOpacity>
              
              <Text className="text-center text-white">Or</Text>
              
              <TouchableOpacity 
                className="bg-green-500 rounded-xl p-4"
                onPress={() => {
                  setRole('customer');
                  setStep('register');
                }}
              >
                <Text className="text-xl text-white font-semibold text-center">Customer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white p-6">
      <Text className="text-3xl font-bold mb-8">Create Account</Text>
      <Text className="text-gray-500 mb-8">
        Register as a {role === 'owner' ? 'Court Owner' : 'Customer'}
      </Text>
      
      <View className="space-y-4">
        <View>
          <Text className="text-gray-600 mb-2">Full Name</Text>
          <TextInput
            className="border border-gray-300 rounded-xl p-4 text-lg"
            placeholder="Enter your full name"
            value={formData.name}
            onChangeText={(text) => setFormData(prev => ({ ...prev, name: text }))}
          />
        </View>

        <View>
          <Text className="text-gray-600 mb-2">Phone Number</Text>
          <TextInput
            className="border border-gray-300 rounded-xl p-4 text-lg"
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            value={formData.phone}
            onChangeText={(text) => setFormData(prev => ({ ...prev, phone: text }))}
          />
        </View>

        <TouchableOpacity 
          className="bg-green-500 rounded-xl p-4 mt-8"
          onPress={handleRegister}
        >
          <Text className="text-xl text-white font-semibold text-center">Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}