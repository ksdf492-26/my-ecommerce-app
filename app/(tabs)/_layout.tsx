import { Stack, Tabs } from "expo-router"
import { StyleSheet, Text } from "react-native"
import FaAwesome from '@expo/vector-icons/FontAwesome'
import FontAwesome from "@expo/vector-icons/FontAwesome"
const style = StyleSheet.create({
    text: {
        color: "black"
    }
})
function App() {
    return (
        <Tabs screenOptions={{headerStyle:{backgroundColor:"#0c0c0cff"},headerTintColor:"aliceblue", tabBarStyle:{backgroundColor:"#0c0c0cff",borderColor:"transparent"}}}>
            <Tabs.Screen name="home" options={{ headerTitle: "Inicio", headerTitleAlign: "center", tabBarIcon: () => <FontAwesome color={'aliceblue'} size={30} name="home" />,title:"Home" }} />
            <Tabs.Screen name="categories"  options={{headerShown:false, tabBarIcon: () => <FontAwesome  color={'aliceblue'}size={30} name="th-large" />,title:"Categories" }} />
            <Tabs.Screen name="perfil" options={{ headerTitle: "Perfil", headerTitleAlign: "center", tabBarIcon: () => <FontAwesome color={'aliceblue'} size={30} name="user" />,title:"Perfil"}} />
           
        </Tabs>
    )
}

export default App