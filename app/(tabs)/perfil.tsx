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

        text:{
            fontWeight:"bold",
            color:"aliceblue",
            fontSize:15
        },

    })

    const {safeareaview,text} = styles
    return (
        <SafeAreaView style={safeareaview}>

                    <Text style={text}>
                     Meu perfil
                    </Text>

        </SafeAreaView>
    )
}

export default App 