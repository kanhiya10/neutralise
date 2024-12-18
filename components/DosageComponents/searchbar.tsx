import { View, TextInput } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

interface SearchType {
  SearchText: string;
  handleSearchText: (args: string) => void;
}

const Searchbar: React.FC<SearchType> = ({ SearchText, handleSearchText }) => {
  return (
    <View className="items-center mt-10">
      <View className="w-[90%]">
        <Ionicons name="search" size={20} color="black" className="absolute top-4 left-4 z-10" />
        <TextInput
          placeholder="Search"
          value={SearchText}
          onChangeText={handleSearchText}
          className="h-12 bg-white rounded-lg pl-12 text-xl"
        />
      </View>
    </View>
  );
};

export default Searchbar;
