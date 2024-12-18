import { SafeAreaView, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import Searchbar from '@/components/DosageComponents/searchbar';
import Instructor from '@/components/DosageComponents/instructor';
import ProductDisplay from '@/components/DosageComponents/productDisplay';

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
      if(SearchText.length>0)
      fetch(`https://dummyjson.com/products/search?q=${SearchText}&limit=10`)
    .then(res => res.json())
    .then((data)=>setProducts(data.products));
    }

    getProduct()
    
  },[SearchText])

  const handleSearchText = (newVal: string) => {
    setSearchText(newVal);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#e2f1f3]">
      <Ionicons name="close-outline" size={30} color="black" className="absolute top-[57px] left-5" />
      <Text className="text-xl ml-16">Dosage Reminder</Text>
      <Searchbar SearchText={SearchText} handleSearchText={handleSearchText} />

      {
        Products.length>0 ?(
          <ProductDisplay Products={Products}/>
        ):(
          <Instructor/>
        )
    
      }
    
    </SafeAreaView>
  );
}
