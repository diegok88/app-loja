import { View, Text, StyleSheet } from "react-native";


export default function About(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Acadêmico: Diego Davi Kotz</Text>
            <Text style={styles.text}>Matéria: Desenvolvimento para Dispositivo Móvel</Text>
            <Text style={styles.text}>Curso: Engenharia de Software</Text>
            <Text style={styles.text}>Período: 5º Semestre</Text>
            <Text style={styles.text}>Cursando Engenharia de Software, busco o aprimoramento
                para desenvolvimento web e mobile, sem experiência no mercado.
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    text:{
        fontSize: 20,
    }
})