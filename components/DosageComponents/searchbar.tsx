import { View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Input, InputIcon, InputField } from '@/components/ui/input';
import { ChevronLeftIcon, CloseIcon, SearchIcon } from '../ui/icon';

interface SearchType {
  SearchText: string;
  handleSearchText: (args: string) => void;
  emptySearchList:()=>void;
}

const Searchbar: React.FC<SearchType> = ({ SearchText, handleSearchText,emptySearchList }) => {
  return (
    <View className="w-[428px] h-[40px] mt-[16px] px-[16px] gap-[10px] ">
      <Input 
        size="md" 
        variant="outline" 
        className="w-[396px] h-10 rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-xl px-3 gap-2 bg-white"
      >
        {/* Left Icon Container */}
        <View className="w-4 h-[38px] py-[11px] ">
          {SearchText.length >= 1 ? (
            <TouchableOpacity onPress={() => emptySearchList()}>
              <InputIcon 
                as={ChevronLeftIcon}
                size="sm"
                color='#242424'
                className="w-4 h-4 pt-0.5"
              />
            </TouchableOpacity>
          ) : (
            <View className="w-4 h-4">
              <InputIcon 
                as={SearchIcon}
                size="sm"
                className="w-4 h-4 pt-0.5"
              />
            </View>
          )}
        </View>

        {/* Input Field */}
        <InputField 
          placeholder="Search" 
          onChangeText={handleSearchText} 
          value={SearchText}
          type="text" 
          className="w-[240px] h-[40px] py-2 font-poppins text-base font-normal leading-6 text-[#737373]"
        />

        {/* Right Icon Container */}
        {SearchText.length >= 1 && (
          <TouchableOpacity onPress={()=>handleSearchText('')}>
            <InputIcon 
              as={CloseIcon}
              size="sm"
              className="w-[13.33px] h-[13.33px] mt-[1.33px] ml-[1.34px]"
            />
          </TouchableOpacity>
        )}
      </Input>
    </View>
  );
};

export default Searchbar;