import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { sortCategoryData } from "../constants/index";

export default function SortCategories() {
  const [activeSort, setActiveSort] = React.useState("All");
  return (
    <View className="mx-5 flex flex-row space-x-5 justify-center py-5 items-center">
      {sortCategoryData.map((sort, index) => {
        const isActive = sort == activeSort;
        const activeButtonClass = isActive
          ? "text-orange-500 shadow font-bold p-2 bg-gray-100 rounded-xl"
          : null;

        return (
          <TouchableOpacity onPress={() => setActiveSort(sort)} key={index}>
            <Text className={`text-bold ${activeButtonClass}`}>{sort}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
