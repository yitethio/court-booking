import { Text, View, TextInput } from "react-native";
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
    </View>
  );
}
