import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function Completion() {
  const router = useRouter();
  const [showContent, setShowContent] = useState(false); // State to control content visibility
  const animation = new Animated.Value(0); // Animation value for opacity

  useEffect(() => {
    // Set a delay of 1.5 seconds before showing the content
    const timer = setTimeout(() => {
      setShowContent(true); // Make content visible after the delay
    }, 1500);

    return () => clearTimeout(timer); // Clean up the timer when the component unmounts
  }, []);

  useEffect(() => {
    if (showContent) {
      // Trigger fade-in animation when content becomes visible
      Animated.spring(animation, {
        toValue: 1,           // End value for opacity (fully visible)
        mass: 1,              // Physical mass (default is 1)
        stiffness: 100,       // Stiffness (controls the "bounciness" of the animation)
        damping: 15,          // Damping (controls the "settling" of the animation)
        useNativeDriver: true, // Use native driver for performance
      }).start();
    }
  }, [showContent]); // Run animation when content is shown

  const animatedStyle = {
    opacity: animation, // Apply fade-in animation
  };

  return (
    <View className='h-[926px] w-[428px] bg-[#F6FDF7]'>
      {showContent && ( // Render the content only after the delay
        <Animated.View style={animatedStyle}>
          <View className='h-[120px] w-[120px] mt-[332px] ml-[154px]'>
            <Image source={require('../../../assets/logos/check.png')} className='h-[120px] w-[120px]' />
          </View>

          <View className='w-[197px] h-[30px] mt-[26px] ml-[116px]'>
            <Text className='text-[20px] font-[500] font-poppins text-[#404040] text-center'>
              Successfully added
            </Text>
          </View>

          <View className='h-[24px] w-[353px] mt-[10px] ml-[38px]'>
            <Text className='text-[16px] font-[400] font-poppins text-[#404040] text-center'>
              Your medication has been successfully added.
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => router.back()}
            className='h-[40px] w-[353px] ml-[38px] bg-[#307CBE] rounded-[4px] mt-[24px] justify-center items-center'
          >
            <Text className='text-[16px] font-[500] font-poppins text-[#FFFFFF] text-center'>
              Go back
            </Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
}
