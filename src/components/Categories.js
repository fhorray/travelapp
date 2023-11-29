import { ScrollView, Image, TouchableOpacity, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { categoriesData } from "../constants/index";

export default function CategoriesList() {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ paddingHorizontal: 15 }}
      className="space-x-4 py-5 mx-5"
      showsHorizontalScrollIndicator={false}
    >
      {categoriesData.map((categorie, index) => (
        <TouchableOpacity key={index} className="items-center space-y-2">
          <Image
            source={categorie.image}
            style={{ width: wp(20), height: wp(19) }}
            className="rounded-lg"
          />
          <Text
            className="text-neutral-700 font-medium"
            style={{ fontSize: wp(3) }}
          >
            {categorie.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
