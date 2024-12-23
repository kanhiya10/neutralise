import { SafeAreaView, View, Text, ScrollView, TouchableOpacity,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import Searchbar from '@/components/DosageComponents/searchbar';
import Instructor from '@/components/DosageComponents/instructor';
import ProductDisplay from '@/components/DosageComponents/productDisplay';
import { LinearGradient } from '@/components/ui/gluestack-ui-provider/linear-gradient';

interface itemsType{
  id:number;
  title:string;

}

export default function HomeScreen() {
  const [SearchText, setSearchText] = useState<string>('');

  const[Products,setProducts]=useState<itemsType[]>([]);

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

  const handleSearchText = (newVal: string) => {
    setSearchText(newVal);
  };

  const emptySearchList=()=>{
    setProducts([]);
  }

  return (
    <View style={{flex:1}}>

      {
        Products.length>0 ? (
          <LinearGradient colors={['rgba(255, 255, 255, 1)', 'rgba(195, 217, 236, 1)', 'rgba(48, 124, 190, 0.2)']} 
          locations={[0.5,0.7,0.2]}
          start={{ x: 1, y: 0 }}  
          end={{ x: 0, y: 1 }}  
          
          className='flex-1'>
      
          <ScrollView className={
            // Products.length === 0 
            //   ? "flex-1 bg-[#EAF2F9] pt-[44px]" 
            //   : "flex-1 bg-gradient-to-b from-white via-[#C3D9EC] to-[#307CBE33] pt-[44px]"
            "flex-1 pt-[44px]"
          }>
          {/* {
            Products.length===0 && (
              <View className="w-[428px] h-[48px]  px-[16px] py-[12px] flex-row items-center gap-[12px] border-b border-[#F2F1F1]">
            <TouchableOpacity className="w-[20px] h-[20px]">
              <Ionicons 
                name="close-outline" 
                size={20} 
                color="#414040"
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity> */}
            
            {/* Dosage Reminder Text */}
            {/* <Text className="font-poppins text-[16px] font-[500] text-[#262627]">
              Dosage Reminder
            </Text>
          </View>
            )
          } */}
          
            
            <Searchbar SearchText={SearchText} handleSearchText={handleSearchText} emptySearchList={emptySearchList} />
      
            {
              Products.length>0 ?(
                <ProductDisplay Products={Products}/>
              ):(
                <Instructor/>
              )
          
            }
      
      
            </ScrollView>
             </LinearGradient>
        ):(
          <View className='flex-1 bg-[#EAF2F9] pt-[44px]'>
            
            <View className="w-[428px] h-[48px]  px-[16px] py-[12px] flex-row items-center gap-[12px] border-b border-[#F2F1F1]">
            <TouchableOpacity className="w-[20px] h-[20px]">
              <Ionicons 
                name="close-outline" 
                size={20} 
                color="#414040"
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity> 
            
            <Text className="font-poppins text-[16px] font-[500] text-[#262627]">
              Dosage Reminder
            </Text>
          </View>

          <Searchbar SearchText={SearchText} handleSearchText={handleSearchText} emptySearchList={emptySearchList} />
      
      {
        Products.length>0 ?(
          <ProductDisplay Products={Products}/>
        ):(
          <Instructor/>
        )
    
      }
           
          </View>
        )
      }

    
   


       </View>
    

  );
}
