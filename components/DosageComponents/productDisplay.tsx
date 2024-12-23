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
    <View className="h-[900px] border-[1px] border-[#F6F6F6]  bg-white  ">
     {
        Products.map((item:itemsType,index)=>(
            <View key={item.id} className='h-[40px] w-[396px] border-b-[1px] border-[#F6F6F6] flex flex-row justify-between items-center'>
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