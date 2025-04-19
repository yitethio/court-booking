import { Text, View, TextInput, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';


export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('');
  
  return (
    <ScrollView className="flex-1 bg-white">
      <View>
        <View className="p-4 flex-row justify-between">
          <View>
            <Text className="font-sans font-light pb-2">Welcome back</Text>
            <Text className="font-sans font-bold">Yitbarek Andualem</Text>
          </View>
          <Ionicons name="notifications-circle-sharp" size={40} color="green" />
        </View>

        {/* Search Input Field */}
        <View className="px-4 mt-2">
          <View className="relative">
            <TextInput 
              placeholder="Search courts near you"
              placeholderTextColor="#6b7280"
              returnKeyType="search"
              className="rounded-lg border border-gray-300 h-11 w-full pl-10 pr-4 text-base bg-white"
            />
            <Ionicons 
              name="location-outline" 
              size={20} 
              color="green" 
              style={{ position: 'absolute', top: 12, left: 12 }} 
            />
          </View>
        </View>

        {/* Promotional Cards Section */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="mt-4 px-4"
        >
          {/* Badminton Promo Card */}
          <TouchableOpacity className="mr-4">
            <View className="w-64 h-32 rounded-xl overflow-hidden relative">
              <Image 
                source={require('../assets/images/badminton-court.png')}
                className="absolute w-full h-full"
                resizeMode="cover"
              />
              <View className="absolute w-full h-full bg-black/30" />
              <View className="absolute top-2 left-2 bg-red-500 px-2 py-1 rounded-full">
                <Text className="text-white text-xs">20% Off</Text>
              </View>
              <View className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full">
                <Text className="text-xs">Badminton</Text>
              </View>
              <View className="absolute bottom-4 left-4">
                <Text className="text-lg font-bold text-white">Exclusive Deal</Text>
                <Text className="text-sm text-white">Book Today and Enjoy a 20% Discount!</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Tennis Promo Card */}
          <TouchableOpacity className="mr-4">
            <View className="w-64 h-32 rounded-xl overflow-hidden relative">
              <Image 
                source={require('../assets/images/tennis-court.png')}
                className="absolute w-full h-full"
                resizeMode="cover"
              />
              <View className="absolute w-full h-full bg-black/30" />
              <View className="absolute top-2 left-2 bg-blue-500 px-2 py-1 rounded-full">
                <Text className="text-white text-xs">15% Off</Text>
              </View>
              <View className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full">
                <Text className="text-xs">Tennis</Text>
              </View>
              <View className="absolute bottom-4 left-4">
                <Text className="text-lg font-bold text-white">Weekend Special</Text>
                <Text className="text-sm text-white">Special rates for weekend bookings!</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>

        {/* Category ScrollView */}
        <View>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            className="px-4 mt-4"
          >
            <TouchableOpacity 
              onPress={() => setSelectedCategory(selectedCategory === 'basketball' ? '' : 'basketball')}
              className={`mr-4 items-center ${selectedCategory === 'basketball' ? 'opacity-100' : 'opacity-70'}`}
            >
              <View className={`w-16 h-16 rounded-xl justify-center items-center ${
                selectedCategory === 'basketball' ? 'bg-green-500' : 'border-2 border-green-500'
              }`}>
                <Ionicons 
                  name={selectedCategory === 'basketball' ? 'basketball' : 'basketball-outline'} 
                  size={30} 
                  color={selectedCategory === 'basketball' ? 'white' : '#22c55e'}
                />
              </View>
              <Text className="mt-2 text-sm">Basketball</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => setSelectedCategory(selectedCategory === 'football' ? '' : 'football')}
              className={`mr-4 items-center ${selectedCategory === 'football' ? 'opacity-100' : 'opacity-70'}`}
            >
              <View className={`w-16 h-16 rounded-xl justify-center items-center ${
                selectedCategory === 'football' ? 'bg-green-500' : 'border-2 border-green-500'
              }`}>
                <Ionicons 
                  name={selectedCategory === 'football' ? 'football' : 'football-outline'} 
                  size={30} 
                  color={selectedCategory === 'football' ? 'white' : '#22c55e'}
                />
              </View>
              <Text className="mt-2 text-sm">Football</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Nearby Sport Halls */}
        <View className="px-4 mt-6">
          <Text className="text-xl font-bold mb-4">Sport halls near you</Text>
          
          <TouchableOpacity className="flex-row items-center bg-white rounded-xl p-3 mb-4 shadow-sm">
            <Image 
              source={require('../assets/images/sport-hall-1.png')}
              className="w-20 h-20 rounded-lg"
              resizeMode="cover"
            />
            <View className="flex-1 ml-3">
              <View className="flex-row justify-between items-center">
                <Text className="font-bold text-lg">Harapan Utama</Text>
                <View className="flex-row items-center">
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Text className="ml-1">4.7</Text>
                </View>
              </View>
              <View className="flex-row items-center mt-1">
                <Text className="text-red-500 font-bold">20%</Text>
                <Text className="ml-2">Rp 80.000</Text>
              </View>
              <Text className="text-gray-500 mt-1">2km from your location</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center bg-white rounded-xl p-3 mb-4 shadow-sm">
            <Image 
              source={require('../assets/images/sport-hall-2.png')}
              className="w-20 h-20 rounded-lg"
              resizeMode="cover"
            />
            <View className="flex-1 ml-3">
              <View className="flex-row justify-between items-center">
                <Text className="font-bold text-lg">GOR Garuda</Text>
                <View className="flex-row items-center">
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Text className="ml-1">4.1</Text>
                </View>
              </View>
              <Text className="mt-1">Rp 120.000</Text>
              <Text className="text-gray-500 mt-1">5km from your location</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
