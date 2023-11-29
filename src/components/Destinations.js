import { View, Text, TouchableOpacity, Image } from "react-native";
import { destinationData } from "../constants/index";
import { LinearGradient } from "expo-linear-gradient";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SortCategories from "./SortCategories";
import { HeartIcon } from "react-native-heroicons/solid";
import React from "react";

export default function Destinations() {
  return (
    <View className="mx-4 flex flex-row justify-between flex-wrap">
      {destinationData.map((item, index) => {
        return <DestinationCard item={item} key={index} />;
      })}
    </View>
  );
}

const DestinationCard = ({ item }) => {
  const [isFavourite, toggleFavourite] = React.useState(false);
  return (
    <TouchableOpacity
      className="flex justify-end relative p-4 py-6 space-y-2 mb-5"
      style={{ width: wp(44), height: wp(65) }}
    >
      {/* Destination Image */}
      <Image
        source={item.image}
        style={{ width: wp(44), height: wp(65), borderRadius: 15 }}
        className="absolute"
      />

      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={{
          width: wp(44),
          height: hp(15),
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className="absolute bottom-0"
      />

      {/* Like Button */}
      <TouchableOpacity
        className="bg-gray-50/30 absolute top-2 right-2 p-2 rounded-full"
        onPress={() => toggleFavourite(!isFavourite)}
      >
        <HeartIcon
          size={25}
          strokeWidth={2}
          color={isFavourite ? "red" : "white"}
        />
      </TouchableOpacity>

      {/* Info */}
      <Text style={{ fontSize: wp(4) }} className="text-white font-semibold">
        {item.title}
      </Text>
      <Text style={{ fontSize: wp(2.2) }} className="text-white">
        {item.shortDescription}
      </Text>
    </TouchableOpacity>
  );
};
