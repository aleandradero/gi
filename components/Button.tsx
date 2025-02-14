import { FontAwesome } from "@expo/vector-icons";
import {StyleSheet, View, Pressable, Text} from "react-native";

type Props ={
    label: string;
    theme?: "primary"; // ? para sinalizar que o prop é opcional 
    onPress?: () => void;
    
};

export default function Button({label, theme, onPress}: Props) {
    if (theme === "primary"){
        return (
            <View style={[styles.buttonContainer, {borderWidth:4, borderColor: "#FFD33D", borderRadius: 18}
            ]}
            >
                <Pressable 
                    style={[styles.button, { backgroundColor: "#FFF"}]}
                    onPress={onPress}
                >
                    <FontAwesome 
                        name="picture-o" 
                        size={18} 
                        color={ "#836FFF"}
                        style={styles.buttonIcon}
                    />
                    <Text style={[styles.buttonLabel, {color: "#6A5ACD"}]}>
                        {label}
                    </Text>
                </Pressable>
            </View>
     );
   }  
}



const styles = StyleSheet.create({
    buttonContainer:{
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
    },
    button:{
        borderRadius: 10,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    buttonLabel:{
        color: "#FFF",
        fontSize: 16,
    },
    buttonIcon:{
        paddingRight: 8

    },
});