import { FontAwesome } from "@expo/vector-icons";
import { Pressable, View, Text, StyleSheet } from "react-native";

type Props = {
  label: string;
  onPress?: () => void;
}

export default function ButtonCategory({label, onPress}: Props) {
  return (
    <View style={[styles.container,
      {borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18},
    ]}>
      <Pressable 
        style={[styles.botao, {backgroundColor: '#fff'}]} 
        onPress={onPress}
      >
        <FontAwesome name="list-alt" size={18} color="#25292e" style={styles.icone} />
        <Text style={[styles.texto, {color: '#25292e'}]}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  botao: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  icone: {
    paddingRight: 8,
  },
  texto: {
    color: '#fff',
    fontSize: 16,
  }
});