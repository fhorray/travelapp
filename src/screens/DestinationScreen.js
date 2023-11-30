import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/solid";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

export default function DestinationScreen(props) {
  const item = props.route.params;
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = React.useState(false);

  console.log(item);

  return (
    <View className="bg-white flex-1">
      {/* Main Info */}
      <View>
        <Image source={item.image} style={{ width: wp(100), height: hp(55) }} />
        <StatusBar style="light" />
        <LinearGradient
          className="absolute "
          colors={["transparent", "rgba(3,105,161,0.8)"]}
          style={{ width: wp(100), height: hp(55) }}
          start={{ x: 0.9, y: 0 }}
          end={{ x: 0.9, y: 1 }}
        />
        <Text className="text-white text-3xl font-bold absolute bottom-14 w-full text-center p-4">
          {item?.title}
        </Text>
      </View>

      {/* Like and GO Back Button! */}
      <SafeAreaView className="flex-row items-center justify-between absolute w-full px-5 mt-5">
        {/* GO BACK BUTTON */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-gray-50 p-2 rounded-full"
        >
          <ChevronLeftIcon size={wp(7)} stroke={2} color="blue" />
        </TouchableOpacity>

        {/* FAVOURITE BUTTON */}
        <TouchableOpacity
          className="bg-gray-50 p-2 rounded-full"
          onPress={() => toggleFavourite(!isFavourite)}
        >
          <HeartIcon
            size={25}
            strokeWidth={4}
            color={isFavourite ? "red" : "gray"}
          />
        </TouchableOpacity>
      </SafeAreaView>

      {/* INFO AREA */}
      <View className="bg-white -mt-14 mx-4 p-5 rounded-t-xl">
        <ScrollView>
          <Text className="font-bold text-2xl mb-4 text-gray-500">About:</Text>
          <Text className="text-black">{item?.longDescription}</Text>
        </ScrollView>
      </View>
    </View>
  );
}
