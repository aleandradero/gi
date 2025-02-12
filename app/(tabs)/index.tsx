import {View, StyleSheet} from "react-native";
import {Image} from "expo-image"

const PlaceholderImage = require("@/assets/images/image.jpg")

export default function Index() {

  return (
    <View style={styles.container}>
      <Image source={PlaceholderImage} style={styles.image}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292E",
  },
  imageContainer:{
    flex:1,
  },
  image:{
    width:320,
    height:440,
    borderRadius: 18,
  },
});
