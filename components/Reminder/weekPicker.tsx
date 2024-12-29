import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { format, startOfWeek, addDays, subDays, isSameDay } from "date-fns";
import CalendarPicker from "../DosageComponents/calenderPicker";
import { Ionicons } from "@expo/vector-icons";
import { Button, ButtonText } from "@/components/ui/button";

const WeekPicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Today's date
  const [week, setWeek] = useState(getWeekDates(new Date())); // Current week's dates

  const [isVisible, setIsVisible] = useState(false);

  // Function to get the week dates
  function getWeekDates(date: Date) {
    const startOfTheWeek = startOfWeek(date, { weekStartsOn: 1 }); // Week starts on Monday
    return Array.from({ length: 7 }, (_, index) =>
      addDays(startOfTheWeek, index)
    );
  }

  // Function to handle day selection
  const handleDaySelect = (date: Date) => {
    setSelectedDate(date);
    setWeek(getWeekDates(date));
  };

  // Function to navigate weeks
  const handleWeekChange = (direction: string) => {
    const newDate =
      direction === "prev"
        ? subDays(week[0], 7)
        : addDays(week[0], 7);
    setWeek(getWeekDates(newDate));
  };

  return (
    <View className='w-[428px] h-[131px]  py-[12px] px-[16px] gap-[10px] bg-[#EAF2F9] '>
      {/* Header */}
      <View className="w-[396px] h-[18px] flex flex-row items-center justify-center" >
       
        <Text className="text-[12px] font-[400] font-poppins text-[#8C8C8C]">
          {format(week[0], "MMMM")} {/* Display month */}
        </Text>
      
      </View>

      {/* Horizontal Week View */}
      <View className="w-[396px] h-[48px] gap-[20px] flex flex-row items-center ">

        <TouchableOpacity onPress={()=>handleWeekChange('prev')}>
            <Ionicons name="chevron-back-outline" size={12} color="#414040" />
        </TouchableOpacity>


     <View className="w-[332px] h-[48px] flex flex-row justify-between items-center ">
      <FlatList
        horizontal
        data={week}
        keyExtractor={(item) => item.toISOString()}
        style={{width:'100%'}}
        contentContainerStyle={{ 
            flex: 1,
            justifyContent: 'space-between',
            width: '100%'
          }}
        renderItem={({ item }) => (
          <TouchableOpacity className='w-[28px] h-[48px] gap-[4px] '
         
            onPress={() => handleDaySelect(item)}
          >
            <View className='h-[18px] w-[28px] gap-[10px]'>
                <Text className="text-[12px] font-[400] font-poppins text-[#404040]">{format(item, "EEE")}</Text>
            </View>
            <View className={isSameDay(item, selectedDate) ? 'h-[26px] w-[26px] gap-[10px] py-[4px] rounded-[999px] bg-[#307CBE] justify-center items-center' : 'h-[26px] w-[26px] gap-[10px] py-[4px] justify-center items-center '}>
                <Text className={isSameDay(item, selectedDate) ? "text-[12px] font-[400] font-poppins text-[#FFFFFF]" : "text-[12px] font-[400] font-poppins text-[#404040]"}>{format(item, "d")}</Text>
            </View>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
        
      />
      </View>

      <TouchableOpacity onPress={()=>handleWeekChange('next')}>
      <Ionicons name="chevron-forward-outline" size={12} color="#414040" />
      </TouchableOpacity>

      </View>

      <Button size="sm" variant="outline" action="primary" className="h-[18px] w-[150px] border-[0px] mx-auto" onPress={()=>setIsVisible(true)}>
        <ButtonText className="text-[12px] font-[500] font-poppins text-[#307CBE]">Customize Selection</ButtonText>
      </Button>
     
      {isVisible && (
        <CalendarPicker 
        selectedDate={selectedDate}
        onDateChange={(date)=>{
          setSelectedDate(date);
          setIsVisible(false);
        }}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        />
      )}
    </View>
  );
};



export default WeekPicker;