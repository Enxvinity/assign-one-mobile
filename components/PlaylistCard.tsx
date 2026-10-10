import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Props = {
  name: string;
  image: ImageSourcePropType;
};

// Extracted into a standalone component to prevent code duplication in the main grid layout.
const PlaylistCard = ({ name, image }: Props) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      {/* Restricting text to two lines ensures long playlist titles do not break the uniform height of the container. */}
      <Text style={styles.name} numberOfLines={2}>
        {name}
      </Text>
    </View>
  );
};

export default PlaylistCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: "#282828",
    width: "48%", // Using a percentage allows two items to fit side by side regardless of the physical screen size.
    marginVertical: 4,
    overflow: "hidden",
    height: 56,
  },
  image: {
    width: 56,
    height: 56,
    backgroundColor: "#282828",
  },
  name: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
    paddingHorizontal: 8,
    flex: 1,
  },
});
