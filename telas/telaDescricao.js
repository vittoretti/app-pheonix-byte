import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

export default function Descricao({navigation, route }) {
  const {
    item,
    price,
    image,
    desc
  } = route.params;

  return (
    <ScrollView style={styles.maincontainer}
    contentContainerStyle={styles.scrollcontainer}>
      <View style={styles.card}>
        <Text style={styles.title}>{item}</Text>

        <Image style={styles.images} source={image} />

        <Text style={styles.price}>{price}</Text>

        <View style={styles.descBox}>
          <Text style={styles.descTitulo}>Descrição</Text>
          <Text style={styles.desc}>
            {desc ? desc : 'Produto sem descrição cadastrada.'}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.botao}
          onPress={() =>navigation.navigate('TelaCadastro')
          }>
          <Text style={styles.textoBotao}>Comprar agora</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  scrollcontainer:{
    flexGrow:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20
  },
  card: {
    backgroundColor: '#f2f2f2',
    width: 'fit-content',
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom:10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    marginTop:30
  },

  images: {
    width: 240,
    height: 240,
    borderRadius: 15,
    marginBottom: 15,
  },

  price: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 15,
  },

  descBox: {
    backgroundColor: '#ffffff',
    padding:5,
    borderRadius: 12,
    width: 'fit-content',
  },

  descTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  desc: {
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 20,
  },

  botao: {
    backgroundColor: '#00a650',
    padding: 14,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
