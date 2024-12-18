import { StyleSheet,View,Text, Image, Platform } from 'react-native';



export default function TabTwoScreen() {
  return (
    <View style={styles.Container}>
      <Text className='text-5xl'>Explore</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  Container:{
    flex:1,
    
  }
})