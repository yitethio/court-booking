import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
export default function SportHallDetail() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const facility = params.facility ? JSON.parse(params.facility as string) : [];

  return (
    <View className="flex-1 bg-white">
      {/* Header Image */}
      <View className="h-72 relative">
        <Image 
          source={{ uri: params.image as string }}
          className="w-full h-full"
          resizeMode="cover"
        />
        <TouchableOpacity 
          className="absolute top-12 left-4 bg-white rounded-full p-2"
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View className="flex-1 px-4 pt-4 -mt-6 bg-white rounded-t-3xl">
        <View className="flex-row justify-between items-center">
          <Text className="text-2xl font-bold">{params.name}</Text>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={28} color="red" />
          </TouchableOpacity>
        </View>
        
        <Text className="text-gray-500 mt-1">{params.category}</Text>
        
        <View className="flex-row items-center mt-2">
          <View className="flex-row items-center">
            <Text className="text-lg font-bold">{params.rating}</Text>
            <Ionicons name="star" size={20} color="#FFD700" />
          </View>
        </View>

        <Text className="text-lg font-bold mt-6">Facility</Text>
        <View className="flex-row flex-wrap mt-3">
          {facility.map((item: string, index: number) => (
            <View key={index} className="w-1/2 flex-row items-center mb-4">
              <View className="w-10 h-10 bg-green-100 rounded-full items-center justify-center">
                <Ionicons name="checkmark-circle-outline" size={24} color="green" />
              </View>
              <View className="ml-3">
                <Text>{item}</Text>
                <Text className="text-gray-500 text-sm">Available</Text>
              </View>
            </View>
          ))}
        </View>

        <View className="flex-row justify-between items-center mt-4">
          <View>
            <Text className="text-gray-500">Price</Text>
            <View className="flex-row items-center">
              <Text className="text-2xl font-bold">{params.price}</Text>
              {params.discount && (
                <Text className="text-red-500 ml-2">{params.discount}</Text>
              )}
            </View>
          </View>
          <TouchableOpacity className="bg-green-500 px-8 py-3 rounded-xl">
            <Text className="text-white font-bold text-lg">Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}