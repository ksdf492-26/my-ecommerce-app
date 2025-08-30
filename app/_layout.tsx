import { Stack } from "expo-router"
import { StyleSheet, Text } from "react-native"
const style = StyleSheet.create({
    text:{
        color:"black"
    }
})
function App () {
    return (
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="index" />
            <Stack.Screen name="/[id]/card"/>
        </Stack>
    )
}

export default App