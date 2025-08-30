import { useRouter } from "expo-router"
import { prefetch } from "expo-router/build/global-state/routing"
import { FlatList, Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"
import { Data } from "../../../data" 
import { Category } from "../../../type/category"
import CategoryItem from "../../../components/categoryItem"
function App() {
    const categories = Data.category
    const navigation = useRouter()
    const styles = StyleSheet.create({
        safeareaview: {
            minHeight: '100%',
            paddingTop: StatusBar.currentHeight || 0,
            backgroundColor: "#181818ff",
            alignItems: "center",
            padding:10
        },
        image: {
            width: 200,
            height: 200,
            borderRadius: 10
        },
        pressable: {
            width: "100%",
            height: 100,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: "center",
            backgroundColor:"red",
        },
        text: {
            fontWeight: "bold",
            color: "aliceblue",
            fontSize: 15
        }
    })
    const handle_press_replace = () => {
        navigation.navigate('categories/1')
    }
    const { safeareaview, image, pressable, text } = styles
    return (
        <SafeAreaView style={safeareaview}>
            {
                <FlatList
                data={categories}
                renderItem={({item} : {item:Category}) => (<CategoryItem data={item}/>)}
                keyExtractor={(item) => item.id.toString()}
                />

            }
        </SafeAreaView>
    )
}

export default App 