import { View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Input, InputIcon, InputField } from '@/components/ui/input';
import { ChevronLeftIcon, CloseIcon, SearchIcon } from '../ui/icon';
import { Ionicons } from '@expo/vector-icons';

interface SearchType {
  SearchText: string;
  handleSearchText: (args: string) => void;
  emptySearchList:()=>void;
  currentPage:string;
}

const Searchbar: React.FC<SearchType> = ({ SearchText, handleSearchText,emptySearchList,currentPage }) => {
  
  return (
   
      <Input 
        size="md" 
        variant="outline" 
        className="w-[396px] h-[40px] rounded-[12px]  px-[12px] gap-[8px] bg-[#FFFFFF]"
      >
        {/* Left Icon Container */}
        <View className="w-[16px] h-[38px] py-[11px] ">
          { currentPage==='DisplayPage' ? (
            <TouchableOpacity onPress={() => emptySearchList()}>
              <Ionicons name="chevron-back" size={15} color="#242424" />
              
            </TouchableOpacity>
          ) : (
            <View >
              {/* <InputIcon 
                as={SearchIcon}
                size="sm"
                color='#242424'
                
              /> */}
              <Ionicons name="search" size={15} color="#242424" />
            </View>
          )}
        </View>

        {/* Input Field */}
        <InputField 
          placeholder="Search" 
          onChangeText={handleSearchText} 
          value={SearchText}
          type="text" 
          className={currentPage==='DisplayPage' ? "w-[324px] h-[40px] py-[8px] text-[16px] font-[400] font-poppins text-[#262627] flex flex-row items-center  " : "w-[240px] h-[40px]  py-[8px] text-[16px] font-[400] font-poppins text-[#262627] flex flex-row items-center "}
          placeholderTextColor='#737373'
          
        />

        {/* Right Icon Container */}
        {SearchText.length >= 1 && (
          <TouchableOpacity onPress={()=>handleSearchText('')}>
            {/* <InputIcon 
              as={CloseIcon}
              size="sm"
              color='#242424'
              className="w-[13.33px] h-[13.33px] mt-[1.33px] ml-[1.34px]"
            /> */}
             <Ionicons name='close-outline' size={15} color='#242424' className=''/>
            
          </TouchableOpacity>
        )}
      </Input>
   
  );
};

export default Searchbar;