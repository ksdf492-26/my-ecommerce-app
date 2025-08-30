"use client"
import { Stack, useRouter } from "expo-router"
import { useRoute } from '@react-navigation/native';
import {Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"
import { Data } from "../../data"
import { useState } from "react";

function App () {
    const [full,setFull] = useState<number>(300)
    const router = useRoute()
    const {id} = router.params as {id:number | null}
    const filter = Data.filter(data => data.id == Number(id))
    const styles = StyleSheet.create({
        safeareaview:{
            minHeight:'100%',
            backgroundColor:"#181818ff",
            padding:10,
            
        },
            image:{
            width:'100%',
            height:300,
            marginTop:5,
            alignSelf:'center',
            borderRadius:5
        },
        textName:{
            fontSize:25,
            fontWeight:'bold',
            color:'white',
            letterSpacing:2
        },
        textBio:{
            color:"#838181ff",
            fontSize:15,
            fontWeight:'500'
        },
        textPrice:{
            width:'100%',
            backgroundColor:"#929292ff",
            textAlign:"center",
            borderRadius:5,
            fontSize:30,
            color:"#333131ff",
            fontWeight:'600',
            marginTop:15
        },
        pressable:{
             width:'100%',
            backgroundColor:"#2a3d7aff",
            textAlign:"center",
            borderRadius:10,
            padding:15,
            marginBottom:10,
            justifyContent:"center",
            alignItems:"center"
            
            },
        textPressable:{
            fontWeight:"700",
            letterSpacing:2,
            color:'aliceblue'
        },
        imageFull:{
            height:full,
            zIndex:1
        }

    })
    const handle_press_replace = (name:string) => {
        alert(`Parabens, você acaba de adiquirir para si ${name}`)
    }
const handlePressFull = () => {
  const interval = setInterval(() => {
    setFull(prev => {
      if (prev >= 600) {
        clearInterval(interval); // para o intervalo quando atingir 600
        return 600;
      }
      return prev + 1;
    });
  }, 10);
};

    const {safeareaview,image,textName,textBio,textPrice,pressable,textPressable,imageFull} = styles
    return (
        <SafeAreaView style={safeareaview}>
            <Stack.Screen options={{headerShown:true,title:"Produtos"}} />
            {
                filter.map(({bio,id,name,price,source})=> (
            <View key={id} style={{justifyContent:"space-between",height:"100%"}}>
            <View >
            <Pressable onPress={handlePressFull}>
                  <Image style={[image]} source={{ uri: source.toString() }} resizeMode="cover" />
            </Pressable>
            <View>
                <Text style={textName}>
                    {name}
                </Text>
                <Text style={textBio}>
                    {bio}
                </Text>
            </View>
            <Text style={textPrice}>
               R$ {price}
            </Text>
           </View>
            <Pressable onPress={()=> handle_press_replace(name)} style={pressable}>
                <Text style={textPressable}>
                    Comprar agora
                </Text>
            </Pressable>
                    </View>
                ))
            }
        </SafeAreaView>
    )
}

export default App 