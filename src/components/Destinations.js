import { View, Text, TouchableOpacity, Image } from "react-native";
import { destinationData } from "../constants/index";
import { LinearGradient } from "expo-linear-gradient";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Destinations() {
  return (
    <View className="mx-4 flex-row justify-between flex-wrap">
      {destinationData.map((item, index) => {
        return <DestinationCard item={item} key={index} />;
      })}
    </View>
  );
}

const DestinationCard = ({ item }) => {
  return (
    <TouchableOpacity className="flex justify-end relative p-1 mb-2">
      <Image
        source={item.image}
        style={{ width: wp(44), height: wp(65), borderRadius: 15 }}
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
        className="absolute bottom-1 left-1"
      />
    </TouchableOpacity>
  );
};
