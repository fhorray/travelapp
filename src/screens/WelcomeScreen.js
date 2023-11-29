import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex items-center justify-end h-full">
      {/* background image */}
      <Image
        source={require("../../assets/images/welcome.png")}
        className="h-full w-full justify-end absolute"
      />
      <LinearGradient
        className="absolute"
        colors={["transparent", "rgba(3,105,161,0.8)"]}
        style={{ width: "100%", height: 340 }}
        start={{ x: 0.9, y: 0 }}
        end={{ x: 0.9, y: 1 }}
      />

      {/* Titles */}
      <View className="p-5 pb-14 space-y-9">
        <View className="space-y-4">
          <Text className="text-white text-4xl font-bold">
            Traveling made easy!
          </Text>
          <Text className="text-white">
            Lorem ipsum sit amet dolor ensenctun aeolor amet!
          </Text>
        </View>

        {/* Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="p-5 bg-orange-300 rounded-full items-center"
        >
          <Text className="text-white font-bold text-5">Let's Go!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
