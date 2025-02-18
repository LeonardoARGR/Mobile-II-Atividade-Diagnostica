import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Cargos de TI</Text>
      <ScrollView>
        <Text style={styles.title}>Programador Junior</Text>
        <Text style={styles.p}>É o profissional iniciante na área, com menos experiência prática. Geralmente possui conhecimento teórico e habilidades básicas em programação. Precisa de mais supervisão e orientação, e seu trabalho envolve tarefas mais simples e de suporte, como correção de bugs e implementação de funcionalidades pequenas.</Text>
        <Image source={require('./assets/junior.jpeg')} style={styles.img}/>
        
        <Text style={styles.title}>Programador Pleno</Text>
        <Text style={styles.p}>Já possui mais experiência e independência na execução das tarefas. Sabe lidar com projetos de médio porte, desenvolvendo soluções mais complexas e utilizando boas práticas de codificação. O programador pleno pode ser responsável por liderar pequenas equipes ou orientar programadores juniores.</Text>
        <Image source={require('./assets/pleno.jpg')} style={styles.img}/>

        <Text style={styles.title}>Programador Sênior</Text>
        <Text style={styles.p}>Tem grande experiência na área e profundo conhecimento técnico. Assume responsabilidades mais estratégicas, como arquitetura de sistemas, tomada de decisões complexas e liderança de equipes. Além disso, é responsável pela definição de boas práticas, análise de riscos e pela orientação técnica das equipes de desenvolvimento.</Text>
        <Image source={require('./assets/senior.jpeg')} style={styles.img}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEE0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 20,
    textAlign: 'center',
    color: '#0D0D0D'
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    margin: 20,
    textAlign: 'center',
    backgroundColor: "#8EA67C",
    color: '#0D0D0D',
    padding: 5,
    borderRadius: 5
  },
  p: {
    fontSize: 18,
    margin: 10,
    textAlign: 'justify',
    color: '#0D0D0D',
  },
  img: {
    width: 300,
    height: 200,
    margin: 30,
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "#8EA67C"
  }
});
