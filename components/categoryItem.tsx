import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Category } from "../type/category";
import { useNavigation, useRouter } from "expo-router";
type Props = {
    data: Category
}
export default function CategoryItem({ data }: Props) {
    const navigate = useRouter()

    const styles = StyleSheet.create({
        pressable:{
            minWidth:"100%",
            height:150,
            marginBottom:15,
            position:"relative",
            justifyContent:"center",
            alignItems:'center',
        },
        text:{
            fontWeight:"700",
            fontSize:20,
            textTransform:"capitalize",
            position:"absolute",
            color:"white",
            zIndex:2
        },
        image:{
            width:"100%",
            height:"100%",
            borderRadius:5,
        },
        view:{
            width:"100%",
            height:"100%",
            position:"absolute",
            backgroundColor:"#0000006e",
            zIndex:1
        }
    })
    const {pressable,text,image,view} = styles
    return (
        <Pressable style={pressable} onPress={() =>  navigate.navigate(`categories/${data.id}`)}>
            <View style={view}></View>
            <Image style={image} resizeMode="cover" source={{uri:data.source}} />
            <Text style={text}>
                {data.name}
            </Text>
        </Pressable>
    )
}