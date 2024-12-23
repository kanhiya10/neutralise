import { View } from 'react-native'
import React from 'react'

interface ScreenNoType {
    currentStep: number
}

const Stepper: React.FC<ScreenNoType> = ({ currentStep }) => {
    const steps = 4;
    return (
        <View className='w-[428px] h-[4px] pr-[16px] pl-[16px] gap-[12px] flex-row justify-around'
        // className="flex-row justify-around mt-5 mb-5"
        >
            {Array.from({ length: steps }, (_, index) => {
                const stepNumber = index + 1;
                const isCompleted = currentStep > stepNumber;
                const isActive = currentStep === stepNumber;

                return (
                    <View 
                        key={stepNumber} 
                        className={`
                            w-[90px] h-1
                            ${isCompleted ? 'bg-[rgb(6,93,127)]' : ''}
                            ${isActive ? 'bg-[rgb(79,183,224)]' : ''}
                            ${!isCompleted && !isActive ? 'bg-gray-300' : ''}
                        `}
                    />
                );
            })}
        </View>
    );
}

export default Stepper;