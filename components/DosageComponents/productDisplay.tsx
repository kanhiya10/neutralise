import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import {useRouter} from 'expo-router'

interface itemsType{
    id:number;
    title:string;
  
  }

interface ProductsType{
    Products:itemsType[]
}
// interface ItemsType{
//     id:number;

// }

const ProductDisplay:React.FC<ProductsType>=({Products})=> {
    const router=useRouter();

    const handleReminder=(product:string)=>{
        router.push(`/(tabs)/(home)/dosageReminder?product=${product}`);
    }
    
  return (
    <View className="flex-1 mt-1  bg-white ">
     {
        Products.map((item:itemsType,index)=>(
            <View key={item.id} className='h-16 w-full border-b-[0.2px] flex flex-row justify-between items-center'>
                <Text className='text-lg font-light ml-5'>{item.title}</Text>
                <Ionicons name={ Products.length>1?"chevron-forward-outline":"add-outline"} className='mr-5' size={25} color={'black'} onPress={()=>handleReminder(item.title)}/>
            </View>
        )
        )
     }
    </View>
  )
}

export default ProductDisplay