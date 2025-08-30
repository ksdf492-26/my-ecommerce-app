import { Stack, Tabs, useRouter } from "expo-router"
import { FlatList, Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"
import { Product } from "../../../type/product"
import Card from "../../../components/card"
import { Data } from "../../../data"
import { useRoute } from '@react-navigation/native';
function App () {

    const navigation = useRouter()
    const router = useRoute()
    const {id} = router.params as {id:number | null}
    const filter = Data.product.filter(data => data.categories == id)
    const categoryName = Data.category.find(data => data.id == id)?.name;

    const styles = StyleSheet.create({
        safeareaview:{
            backgroundColor:"#181818ff",
            justifyContent:"center",
        }
    })

    const {safeareaview} = styles
    return (
        <SafeAreaView style={safeareaview}>
        <Tabs.Screen options={{headerShown:true,title:categoryName}} />
             <FlatList keyExtractor={(item) => item.id.toString()} data={filter} renderItem={({item}: {item:Product}) => (<Card card={item}/> )}  />
    
        </SafeAreaView>
    )
}

export default App 