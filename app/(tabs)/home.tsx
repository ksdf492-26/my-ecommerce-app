import { useRouter } from "expo-router"
import { FlatList, Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"
import { Product } from "../../type/product"
import Card from "../../components/card"
import { Data } from "../../data"
function App () {
    const navigation = useRouter()
    const styles = StyleSheet.create({
        safeareaview:{
            backgroundColor:"#181818ff",
            justifyContent:"center",
        }
    })
    const handle_press_replace = () => {
        navigation.replace('(tabs)')
    }
    const {safeareaview} = styles
    return (
        <SafeAreaView style={safeareaview}>
             <FlatList keyExtractor={(item) => item.id.toString()} data={Data.product} renderItem={({item}: {item:Product}) => (<Card card={item}/> )}  />
        </SafeAreaView>
    )
}

export default App 