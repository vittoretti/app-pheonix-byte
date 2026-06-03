import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import {MascaraCpf} from '../mascaras/mascaraCPF';
import {MascaraTel} from '../mascaras/mascaraTel';

export default function TelaCadastro({ navigation }) {
  //Define as variáveis para armazenar os dados
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  
  //funções para aplicar a máscara nos valores puxando da funções dos arquivos de máscara
  function Mascara(value:string) {
     const cpfmascarado=MascaraCpf(value)
     setCpf(cpfmascarado);
  }
  function Mascara2(value:string){
    const telmascarado=MascaraTel(value)
    setTelefone(telmascarado);
  }

  return (
    //Faz que a caixa de texto não seja tampada pelo teclado
     <KeyboardAvoidingView
     style={styles.container}
     behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
    <ScrollView style={styles.container}>
      <Text style={styles.paragraph}></Text>
      <View style={styles.subcontainer}>
        <Text style={styles.paragraph}>Antes de finalizar a compra, insira suas informações abaixo:</Text>
        <TextInput
          style={styles.caixatexto}
          placeholder="Nome Completo"
          value={nome}
          onChangeText={setNome}
        />
         <TextInput
          style={styles.caixatexto}
          placeholder="exemplo123@gmail.com"
          value={email}
          onChangeText={setEmail}
        />
         <TextInput
          style={styles.caixatexto}
          placeholder="(00) 00000-0000"
          value={telefone}
          //Puxa a função de máscara de telefone para aplicar ela no valor "setTelefone"
          onChangeText={Mascara2}
          //Altera o teclado para um teclado de telefone
          keyboardType='phone-pad'
          //Restringe o número de caracteres máximos para 14
          maxLength={14}
        />
         <TextInput
          style={styles.caixatexto}
          placeholder="000.000.000-00"
          value={cpf}
          //Puxa a função de máscara de CPF para aplicar ela no valor "setCpf"
          onChangeText={Mascara}
          keyboardType="numeric"
          //Restringe o número de caracteres máximos para 14 (incluindo os pontos e hífen)
          maxLength={14}
        />
        <TextInput
          style={styles.caixatexto}
          placeholder="Endereco sem número "
          value={endereco}
          onChangeText={setEndereco}
        />
        <TextInput
          style={styles.caixatexto}
          placeholder="Número do endereço"
          value={numero}
          onChangeText={setNumero}
          keyboardType='numeric'
        />
        <TouchableOpacity
          style={styles.botao}
            onPress={() =>{
              //Verifica se os dados estão preenchidos, se não estiverem, um pop-up é acionado avisando que ainda faltam dados a serem preenchidos
              if (!nome.trim()|| !email.trim() || !telefone.trim() || !cpf.trim() || !endereco.trim() || !numero.trim())
            {
             Alert.alert('Erro no Cadastro',
             'Por favor, preencha todos os dados antes de prosseguir com a compra.');
            } 
            //Executa o pop-up de compra realizada e leva o usuário de volta para a tela inicial
            else{
              Alert.alert(
              'Compra realizada com sucesso!',
              'Dados cadastrados:'+
              '\nNome: ' +
                nome +
                '\nEmail: ' +
                email +
                '\nTelefone: ' +
                telefone +
                '\nCPF: ' +
                cpf +
                '\nEndereço: ' +
                endereco +
                ', ' +
                numero +
                '\nUm E-Mail com a confirmação do seu pedido será enviado em breve.' +
                '\nObrigado por comprar na PheonixByte! '
              );
              //Reseta o histórico de navegação para não ser possível voltar para a tela de cadastro
               navigation.reset({
                 index:0,
                 routes: [{name:'TelaProdutos'}]
               });
            }
            }}>
          <Text style={styles.textobotao}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  botao: {
    borderRadius: 10,  
    backgroundColor: 'rgb(22, 201, 17)',
    margin: 10,
  },
  caixatexto: {
    borderRadius: 5,
    marginVertical: 10,
    textAlign: 'center',
    backgroundColor: '#ffffff',
    height:50,
    marginHorizontal:14
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  subcontainer: {
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'white'
  },
  textobotao: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    color:'white'
  },
});
