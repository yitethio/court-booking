import { Text, View, TextInput, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Index() {
  return (
    <View>
     <View className="p-4 flex-row justify-between ">
      <View>
        <Text className="font-sans font-light pb-2">welcom back</Text>
        <Text className="font-sans font-bold">Yitbarek Andualem</Text>
      </View>
      <Ionicons name="notifications-circle-sharp" size={40} color="green" />
     </View>
     <View className="px-4">
       <TextInput 
         placeholder="Search courts near you"
         className="rounded-lg border h-10 w-full px-3 pl-10"
       />
       <View className="absolute left-7 top-3">
         <Ionicons name="location-outline" size={20} color="green" />
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
           {/* Semi-transparent overlay */}
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
           {/* Semi-transparent overlay */}
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
    </View>
  );
}
