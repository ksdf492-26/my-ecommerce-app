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
        <Tabs>
            <Tabs.Screen name="home" options={{ headerTitle: "Inicio", headerTitleAlign: "center", tabBarIcon: () => <FontAwesome size={30} name="home" /> }} />
            <Tabs.Screen name="category" options={{ headerTitle: "Categorias", headerTitleAlign: "center", tabBarIcon: () => <FontAwesome size={30} name="th-large" /> }} />
            <Tabs.Screen name="perfil" options={{ headerTitle: "Perfil", headerTitleAlign: "center", tabBarIcon: () => <FontAwesome size={30} name="user" /> }} />
           
        </Tabs>
    )
}

export default App