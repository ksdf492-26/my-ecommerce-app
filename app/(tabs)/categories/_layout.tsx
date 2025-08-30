import { Stack } from "expo-router"
import { StyleSheet } from "react-native"

const style = StyleSheet.create({
  text: {
    color: "black"
  }
})

function App() {
  return (
    <Stack screenOptions={{headerStyle:{backgroundColor:"#0c0c0cff"},headerTintColor:"aliceblue"}}>
      <Stack.Screen name="list" options={{title:"Categorias",headerTitleAlign:"center",headerShown:true} }/>
      <Stack.Screen name="[id]"  /> {/* rota dinâmica */}
    </Stack>
  )
}

export default App
