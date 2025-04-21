import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SportHallDetail() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      {/* Header Image */}
      <View className="h-72 relative">
        <Image 
          source={require('../assets/images/sport-hall-1.png')}
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
          <Text className="text-2xl font-bold">Harapan Utama</Text>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={28} color="red" />
          </TouchableOpacity>
        </View>
        
        <Text className="text-gray-500 mt-1">Jl. Rosedale Simpang Herengki, Tlk. Tering</Text>
        
        <View className="flex-row items-center mt-2">
          <View className="flex-row items-center">
            <Text className="text-lg font-bold">4.7</Text>
            <Ionicons name="star" size={20} color="#FFD700" />
          </View>
          <Text className="text-gray-500 ml-2">(21 reviews)</Text>
        </View>

        <Text className="text-lg font-bold mt-6">Facility</Text>
        <View className="flex-row flex-wrap mt-3">
          <View className="w-1/2 flex-row items-center mb-4">
            <View className="w-10 h-10 bg-green-100 rounded-full items-center justify-center">
              <Ionicons name="water-outline" size={24} color="green" />
            </View>
            <View className="ml-3">
              <Text>Shower Area</Text>
              <Text className="text-gray-500 text-sm">Available</Text>
            </View>
          </View>
          
          <View className="w-1/2 flex-row items-center mb-4">
            <View className="w-10 h-10 bg-green-100 rounded-full items-center justify-center">
              <Ionicons name="restaurant-outline" size={24} color="green" />
            </View>
            <View className="ml-3">
              <Text>Canteen</Text>
              <Text className="text-gray-500 text-sm">Available</Text>
            </View>
          </View>

          <View className="w-1/2 flex-row items-center mb-4">
            <View className="w-10 h-10 bg-green-100 rounded-full items-center justify-center">
              <Ionicons name="car-outline" size={24} color="green" />
            </View>
            <View className="ml-3">
              <Text>Parking</Text>
              <Text className="text-gray-500 text-sm">Car & Motorcycle</Text>
            </View>
          </View>

          <View className="w-1/2 flex-row items-center mb-4">
            <View className="w-10 h-10 bg-green-100 rounded-full items-center justify-center">
              <Ionicons name="time-outline" size={24} color="green" />
            </View>
            <View className="ml-3">
              <Text>Open Time</Text>
              <Text className="text-gray-500 text-sm">08am - 10pm</Text>
            </View>
          </View>
        </View>

        <View className="flex-row justify-between items-center mt-4">
          <View>
            <Text className="text-gray-500">Price</Text>
            <View className="flex-row items-center">
              <Text className="text-2xl font-bold">Rp 80.000</Text>
              <Text className="text-red-500 ml-2">25% OFF</Text>
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