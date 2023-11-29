import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  FlatList,
  Platform,
  TouchableOpacity,
} from "react-native";

import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import CategoriesList from "../components/Categories";
import React from "react";
import Destinations from "../components/Destinations";
import SortCategories from "../components/SortCategories";

export default function HomeScreen() {
  const ios = Platform.OS === "ios";
  const topMargin = ios ? "mt-3" : "mt-10";

  const navigation = useNavigation();

  // User Name
  const [userName, setUserName] = React.useState("Francy");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className={"space-y-6 " + topMargin}
      >
        {/* Avatar */}
        <View className="flex-row justify-between items-center mx-5 mt-4 mb-5">
          <Text className="text-2xl font-bold">{`Welcome, ${userName}!`}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile Screen")}
          >
            <Image
              style={{ width: 55, height: 55 }}
              source={require("../../assets/images/avatar.png")}
            />
          </TouchableOpacity>
        </View>

        {/* Search Area */}
        <View className="bg-gray-200 p-5 mx-5 rounded-lg flex-row items-center space-x-3 mb-5">
          <MagnifyingGlassIcon size={20} strokeWidth={2} color="gray" />
          <TextInput
            className="text-gray-400 text-md font-medium"
            placeholder="Search destination..."
          />
        </View>

        {/* Categories */}
        <CategoriesList />

        {/* Sort Categories */}
        <SortCategories />

        {/* Destinations */}
        <Destinations />
      </ScrollView>
    </SafeAreaView>
  );
}
