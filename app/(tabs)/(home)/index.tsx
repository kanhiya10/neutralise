import { SafeAreaView, View, Text, ScrollView, TouchableOpacity,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import Searchbar from '@/components/DosageComponents/searchbar';

import ProductDisplay from '@/components/DosageComponents/productDisplay';
import { LinearGradient } from '@/components/ui/gluestack-ui-provider/linear-gradient';
import { useRouter } from 'expo-router';
import { Button, ButtonText } from '@/components/ui/button';

interface itemsType{
  id:number;
  title:string;

}



export default function HomeScreen() {
  const [SearchText, setSearchText] = useState<string>('');

  const[currentPage,setCurrentPage]=useState<'HomePage' | 'DisplayPage'>('HomePage');

  const[Products,setProducts]=useState<itemsType[]>([]);
  const router = useRouter();
  if(Products){
    console.log(Products);
  }

  useEffect(()=>{
    const getProduct=()=>{
      if(SearchText.length>0){
      fetch(`https://dummyjson.com/products/search?q=${SearchText}&limit=10`)
    .then(res => res.json())
    .then((data)=>setProducts(data.products));
      }
      // else{
      //   setProducts([]);
      // }
    }

    getProduct()
    
  },[SearchText])

  useEffect(()=>{
    if(SearchText.length>0){
      setCurrentPage('DisplayPage');
    }
  },[SearchText])

  const handleSearchText = (newVal: string) => {
    setSearchText(newVal);
  };

  const emptySearchList=()=>{
    setSearchText('');
    setProducts([]);
    setCurrentPage('HomePage');
  }

  return (
    // <View style={{flex:1}}>

    //   {
    //     Products.length>0 ? (
    //       <LinearGradient colors={['rgba(255, 255, 255, 1)', 'rgba(195, 217, 236, 1)', 'rgba(48, 124, 190, 0.2)']} 
    //       locations={[0.5,0.7,0.2]}
    //       start={{ x: 1, y: 0 }}  
    //       end={{ x: 0, y: 1 }}  
          
    //       className='flex-1'>
      
    //       <ScrollView className={
          
    //         "flex-1 pt-[44px] "
    //       }>
          
          
            
    //         <Searchbar SearchText={SearchText} handleSearchText={handleSearchText} emptySearchList={emptySearchList} />
      
    //         {
    //           Products.length>0 ?(
    //             <ProductDisplay Products={Products}/>
    //           ):(
    //             <Instructor/>
    //           )
          
    //         }
      
      
    //         </ScrollView>
    //          </LinearGradient>
    //     ):(
    //       <View className='flex-1 bg-[#EAF2F9] pt-[44px] '>
            
    //         <View className="w-[428px] h-[48px]  px-[16px] py-[12px] flex-row items-center gap-[12px] border-b border-[#F2F1F1] border-2">
    //         <TouchableOpacity className="w-[20px] h-[20px]">
    //           <Ionicons 
    //             name="close-outline" 
    //             size={24} 
    //             color="#414040"
    //             className='bottom-[2px]'
                
    //           />
    //         </TouchableOpacity> 
            
    //         <Text className="font-poppins text-[16px] font-[500] text-[#262627]">
    //           Dosage Reminder
    //         </Text>
    //       </View>

    //       <Ionicons name='alarm-outline' size={20} color='#414040' className='position- absolute top-[60px] right-[35px]' onPress={()=>router.push('/(tabs)/(home)/(logs)/logsInfo')}/>

    //       <Searchbar SearchText={SearchText} handleSearchText={handleSearchText} emptySearchList={emptySearchList} />
      
    //   {
    //     Products.length>0 ?(
    //       <ProductDisplay Products={Products}/>
    //     ):(
    //       <Instructor/>
    //     )
    
    //   }
           
    //       </View>
    //     )
    //   }

    
   


    //    </View>


    




    <View style={{flex:1}}>

      {
        currentPage==='DisplayPage' ? (
          <LinearGradient colors={['rgba(255, 255, 255, 1)', 'rgba(195, 217, 236, 1)', 'rgba(48, 124, 190, 0.2)']} 
          locations={[0.5,0.7,0.2]}
          start={{ x: 1, y: 0 }}  
          end={{ x: 0, y: 1 }}  
            
          className='flex-1'>
      
          <ScrollView className={
          
            "flex-1 pt-[44px] "
          }>

            <View className='w-[428px] h-[40px] mt-[12px] px-[16px] gap-[10px]'>
              <Searchbar SearchText={SearchText} handleSearchText={handleSearchText} emptySearchList={emptySearchList} currentPage={currentPage} />
            </View>

            <ProductDisplay Products={Products}/>


            </ScrollView>
            </LinearGradient>

            ):(
              <View className='flex-1 bg-[#EAF2F9] pt-[44px] '>

                <View className='w-[428px] h-[48px] py-[12px] px-[16px] gap-[12px]  flex flex-row items-center'>
                  <Ionicons name='close-outline' size={22} color='#414040' className='bottom-[3px]'/>
                  <View className='h-[24px] w-[144px]'>
                    <Text className='text-[16px] font-[500] font-poppins text-[#262627]'>Dosage Reminder</Text>
                    </View>
                  </View>

                  <View className='w-[428px] h-[40px] mt-[16px] px-[16px] gap-[10px]'>
              <Searchbar SearchText={SearchText} handleSearchText={handleSearchText} emptySearchList={emptySearchList} currentPage={currentPage} />
            </View>


            <View className='mt-[285px] left-[179px] h-[70px] w-[70px]'>
            <Image source={require('../../../assets/images/search.png')} className="w-[52.49px] h-[52.49px] mt-[6.5px] ml-[6.5px] "/>
              </View>

              <View className='mt-[8px] left-[12px] h-[27px] w-[396px] flex flex-row items-center justify-center  '>
                <Text className='text-[18px] font-[500] text-[#262627]'>
                  Search Product to set reminder
                </Text>

                </View>

                <View className='w-[396px] h-[42px] mt-[8px] left-[16px]  '>
                  <Text className='text-[14px] font-[400] font-poppins text-[#525252] text-center'>
                    Lorem ipsum dolor sit amet consectetur. Maecenas socilis sit pulvinar in elit.
                  </Text>
                  </View>

                  <View className="h-[18px] w-[138px] mt-[20px] left-[145px] gap-[13px]  flex flex-row items-center justify-center ">
  <View className="w-14 border-[1px] border-[#D3D3D3]" />
  <Text className="text-[12px] font-[400]  text-[#525252]-700 text-center" >Or</Text>
  <View className="w-14 border-[1px] border-[#D3D3D3]" />
</View>

<Button size='sm' variant='outline' action='primary' className='h-[36px] w-[162px] mt-[20px] left-[133.5px] rounded-[8px] px-[16px]  gap-[8px] border-[1px] border-[#83B0D8] flex flex-row items-center justify-center '>
  <View className='w-[106px] h-[21px]  '>
  <ButtonText className='text-[14px] font-[500] font-poppins text-[#307CBE] '> Scan your med </ButtonText>
    </View>
    <Image source={require('../../../assets/images/Shape (3).png')} className='w-[20px] h-[20px] '/>
  
  </Button>




              </View>
            )

      }
      </View>
          
          

  );
}
