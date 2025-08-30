import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { Props } from "../type"
import { useRouter } from "expo-router"
type props = {
    card: Props
}
function App({ card }: props) {
    const { id, name, bio, price, source } = card
    const router = useRouter()
    const handle_press_navigation = () => {
        router.navigate(`/${id}/card`)
    }
    const styles = StyleSheet.create({
        pressable: {
            flex: 1,
            flexDirection: 'row',
            padding: 1,
            marginBottom: 5,
            gap: 10,
            borderRadius:5
        },
        image: {
            width: 100,
            height: 150
        },
        view: {
            justifyContent: 'space-between'
        },
        textBio: {
            width: 290,
            color: "#a0a0a0ff",
            fontSize: 12
        },
        textName: {
            fontWeight: "bold",
            color: "white",
            fontSize: 17
        },
        textPrice: {
            color: "#ffffffff",
            alignSelf: 'flex-end',
            fontWeight:"bold"
        }
    })

    const { pressable, image, view, textBio, textName, textPrice } = styles

    return (
        <>
<Pressable
  onPress={handle_press_navigation}
  style={({ pressed }) => [
    pressable, // seu estilo base
    {
      backgroundColor: pressed ? "#313131ff" : "transparent",
    },
  ]}
>
                <Image style={image} source={{ uri: source.toString() }} />
                <View style={view}>
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
            </Pressable>
        </>
    )
}

export default App