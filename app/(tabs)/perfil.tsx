import { useRouter } from "expo-router"
import { prefetch } from "expo-router/build/global-state/routing"
import { Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"

function App () {
    const navigation = useRouter()
    const styles = StyleSheet.create({
        safeareaview:{
            minHeight:'100%',
            paddingTop: StatusBar.currentHeight || 0,
            backgroundColor:"#181818ff",
            justifyContent:"center",
            alignItems:"center"
        },
        image:{
            width:200,
            height:200,
            borderRadius:10
        },
        pressable:{
            width:190,
            height:40,
            borderRadius:5,
            backgroundColor:"#0066ffff",
            alignItems:'center',
            justifyContent:"center"
        },
        text:{
            fontWeight:"bold",
            color:"aliceblue",
            fontSize:15
        },
        view:{
            alignItems:'center',
            height:300,
            gap:10
        }
    })
    const handle_press_replace = () => {
        navigation.replace('(tabs)')
    }
    const {safeareaview,image,pressable,text,view} = styles
    return (
        <SafeAreaView style={safeareaview}>

                    <Text style={text}>
                     Meu perfil
                    </Text>

        </SafeAreaView>
    )
}

export default App 