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
                <View className="w-[360px] h-[189px]  bg-[#FFFFFF] rounded-[6px] max-w-[360px] border-orange-500 border-2">
                    {/* Header */}
                    <View className="flex-row justify-between items-center border-2 h-[69px] w-[360px] p-[24px]">
                        <Text className="text-[14px] font-[500] font-poppins text-[#262627]">
                            Proceed Without Refill?
                        </Text>
                        <TouchableOpacity onPress={() => setShowModal(false)}>
                            <Ionicons name={'close-outline'} size={18} color={'#8E8E8E'} onPress={() => setShowModal(false)}/>   
                        </TouchableOpacity>
                    </View>

                    {/* Body */}
                    <View className=' h-[36px] w-[360px] pr-[24px] pl-[24px] gap-[8px] flex flex-row items-center border-2'>
                    <Text className="text-[12px] font-[400] text-[#8C8C8C]">
                        We wont be able to remind you to refill if you skip you to refill if you skip
                    </Text>
                    </View>
                   

                    {/* Footer */}
                    <View className="flex-row gap-[8px] h-[84px] w-[360px] p-[24px] gap-[8px]">
                        <Button size='sm' action='primary' variant='outline' 
                            className=" h-[36px] w-[152px] justify-center items-center border-[1px] border-[#83B0D8] p-[16px] gap-[8px] rounded-[4px]"
                            onPress={handleCancel}
                        >
                            <ButtonText className="text-[#307CBE] text-[14px] font-[500] font-poppins">Cancel</ButtonText>
                        </Button>
                        <Button size='sm' action='primary' variant='solid'  
                            className=" h-[36px] w-[152px] justify-center items-center border-[1px] border-[#83B0D8] p-[16px] gap-[8px] rounded-[4px] bg-[#307CBE]"
                            onPress={handleProceed}
                        >
                            <ButtonText className="text-[#307CBE] text-[14px] font-[500] font-poppins">Yes</ButtonText>
                        </Button>

                    </View>
                </View>
            </View>
        </Modal>
    );
}