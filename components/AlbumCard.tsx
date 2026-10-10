import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    View,
} from "react-native";

type Props = {
  type: string;
  title: string;
  artist: string;
  image: ImageSourcePropType;
};

// Built specifically for horizontal scroll lists where vertical space is not constrained.
const AlbumCard = ({ type, title, artist, image }: Props) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Text style={styles.type}>{type}</Text>
      {/* Truncating the title guarantees the artist text stays visible and aligned across all album cards. */}
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.artist}>{artist}</Text>
    </View>
  );
};

export default AlbumCard;

const styles = StyleSheet.create({
  card: {
    width: 140,
    marginRight: 16,
  },
  image: {
    width: 140,
    height: 140,
    marginBottom: 8,
  },
  type: {
    color: "#b3b3b3",
    fontSize: 12,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 2,
  },
  artist: {
    color: "#b3b3b3",
    fontSize: 12,
  },
});
