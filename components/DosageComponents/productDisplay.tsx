import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import {useRouter} from 'expo-router'
import {useAppDispatch,useAppSelector} from '../../redux/store';
import {Add} from '../../redux/dosageInfo_Slice'
import {ReInitialize} from '../../redux/platformCount_Slice'


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
    const dispatch=useAppDispatch();
    const{count}=useAppSelector(state=>state.CountPlatform)

    useEffect(()=>{
      dispatch(ReInitialize());
    },[])

    const handleReminder=(product:string)=>{
      dispatch(Add({ title: product }));
        router.push(`/(tabs)/(home)/dosageReminder`);
        
    }
    
  return (
    <View className="h-[900px]   bg-white  ">
     {
      Products.length>0 && 
        Products.map((item:itemsType,index)=>(
            <View key={item.id} className='h-[40px] w-[396px] border-b-[1px] border-[#F6F6F6] left-[16px] pr-[12px] pl-[12px] gap-[8px]  flex flex-row items-center'>
              <View className='h-[40px] w-[348px] pt-[8px] pb-[8px] '>
                <Text className='text-[16px] font-[400] font-poppins text-[#737373]'>{item.title}</Text>
              </View>
              <Ionicons name={ Products.length>1?"chevron-forward-outline":"add-outline"} className='' size={12} color={'#242424'} onPress={()=>handleReminder(item.title)}/>
            </View>
        )
        )
     }
    </View>
  )
}

export default ProductDisplay