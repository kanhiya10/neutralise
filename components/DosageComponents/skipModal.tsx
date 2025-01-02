import { View, Text, TouchableOpacity, Modal } from 'react-native'
import {Button, ButtonText} from '@/components/ui/button'
import React from 'react'
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
interface SkipModalProps {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SkipModal({ showModal, setShowModal }: SkipModalProps) {
    const router = useRouter();

    const handleCancel = () => {
        setShowModal(false);
    };

    const handleProceed = () => {
        setShowModal(false);
        router.push('/(tabs)/(home)/completion');
    };

    return (
        <Modal
            visible={showModal}
            transparent={true}
            animationType="fade"
            onRequestClose={() => setShowModal(false)}
        >
            <View className="flex-1 justify-center items-center bg-black/50">
                <View className="w-[360px] h-[189px]  bg-[#FFFFFF] rounded-[6px] max-w-[360px] ">
                    {/* Header */}
                    <View className="flex-row justify-between items-center h-[69px] w-[360px] p-[24px]">
                        <Text className="text-[14px] font-[500] font-poppins text-[#262627]">
                            Proceed Without Refill?
                        </Text>
                        <TouchableOpacity onPress={() => setShowModal(false)}>
                            <Ionicons name={'close-outline'} size={18} color={'#8E8E8E'} onPress={() => setShowModal(false)}/>   
                        </TouchableOpacity>
                    </View>

                    {/* Body */}
                    <View className=' h-[36px] w-[360px] pr-[66px] pl-[24px] gap-[8px]   '>
                    <Text className="text-[12px] font-[400] text-[#8C8C8C]">
                        we wont be able to remind you to refill if you skip 
                    </Text>
                    </View>
                   

                    {/* Footer */}
                    <View className="flex-row gap-[8px] h-[84px] w-[360px] p-[24px] gap-[8px]">
                        <TouchableOpacity 
                            onPress={handleCancel}
                            className="h-[36px] w-[152px] justify-center items-center border-[1px] border-[#83B0D8] rounded-[4px]"
                        >
                            <Text className="text-[#307CBE] text-[14px] font-[500] font-poppins">Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={handleProceed}
                            className="h-[36px] w-[152px] justify-center items-center rounded-[4px] bg-[#307CBE]"
                        >
                            <Text className="text-[#FFFFFF] text-[14px] font-[500] font-poppins">Yes</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </Modal>
    );
}