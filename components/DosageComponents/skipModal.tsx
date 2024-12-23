import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Modal, ModalBackdrop, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@/components/ui/modal';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { ClockIcon } from '../ui/icon';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {useSpring,animated} from '@react-spring/native'


interface SkipModalProps {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  }

export default function SkipModal({ showModal, setShowModal }: SkipModalProps) {
    const router=useRouter();
    

    
  return (
     <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false)
        }}
      >
        <ModalBackdrop />
        <ModalContent className='border-[7px] border-[#E6E6E6]-100 h-[240px] pr-0 pl-0 pt-0 pb-0 w-[360px] rounded-[6px] bg-[#ffffff]'>
        <ModalHeader className=" p-[24px] h-[69px] w-[360px] ">
            {/* <Heading>Forgot password?</Heading> */}
            <Text className='text-[14px] font-[500] text-[#262627]-900'>Proceed without refill?</Text>
            {/* <Button className='h-[36px] w-[90px] rounded-[4px] p-[16px] gap-[8px] border-[1px] bg-[#307CBE]-500'><ButtonText className='text-[14px] font-[500] text-[#FEFEFF]'>Proceed without refill?</ButtonText></Button> */}
            <ModalCloseButton className='w-[18px] h-[18px] '>
                    <Ionicons name={'close-outline'} size={18} color={'#262627'} onPress={() => setShowModal(false)}/>   
            </ModalCloseButton>

          </ModalHeader>
          <ModalBody className="h-[36px] w-[360px] pr-[24px] pl-[24px]" >
            <Text className='text-[12px] font-[400] text-[#8C8C8C] '>You will not receive refill reminders for this medication.</Text>
          </ModalBody>
          <ModalFooter className="w-[360px] h-[84px] p-[24px] gap-[8px] ">
            <Button
            size={'sm'}
            variant={'outline'}
            action={'primary'}
              onPress={() => {
                setShowModal(false)
              }}
              className="w-[152px] h-[36px] rounded-[4px] p-[16px] gap-[8px] border-[1px] border-[#83B0D8]" 
            >
              <ButtonText className="text-[14px] font-[500] text-[#307CBE]-500">cancel</ButtonText>
            </Button>

            <Button
            size={'sm'}
            variant={'solid'}
            action={'primary'}
              onPress={() => {
                console.log('proceed');
                setShowModal(false);
                router.push(`/(tabs)/(home)/completion`);
              }}
              className="w-[152px] h-[36px] rounded-[4px] p-[16px] gap-[8px] border-[1px] bg-[#307CBE]-500" 
            >
              <ButtonText className='text-[14px] font-[500] text-[#FEFEFF]'>Yes</ButtonText>
            </Button>

          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}
