import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SectionList,
  Image,
  StatusBar,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
//Define cada item e suas respectivas categorias
const DATA = [
  {
    title: 'Periféricos',
    data: [
      {
        id: '1',
        title: 'Headset Gamer Redragon Zeus Lite H510-LT P3 Preto',
        price: 'R$ 205,90',
        image: require('../assets/zeuslite.webp'),
        desc: 'O headset Zeus Lite oferece som de 53mm, microfone com redução de ruído e design confortável. Conta com microfone removível e controladora integrada para mais praticidade.',
      },
      {
        id: '2',
        title:
          'Teclado Mecânico Redragon Yi Pro, RGB, Switch Brown, Wireless, Preto, K625P-KBS-PT-BROWN',
        price: 'R$ 409,99',
        image: require('../assets/k625p-kbs-pt-brown7.jpg'),
        desc: 'O teclado mecânico Redragon Yi Pro foi desenvolvido para oferecer versatilidade, conforto e desempenho em um design moderno e funcional. Equipado com switches Brown, proporciona feedback tátil suave e silencioso, ideal para quem busca equilíbrio entre digitação confortável e resposta rápida em jogos.',
      },
      {
        id: '3',
        title:
          'Teclado Mecanico A+ Plus Gasket Zion, 75%, RGB, Tri-Mode, Switch Gateron Amarelo, Preto, AKW500',
        price: 'R$ 699,99',
        image: require('../assets/akw5004.jpg'),
        desc: 'O Teclado Mecânico Zion da Aplus Tech é a escolha definitiva para quem busca excelência em design, tecnologia e desempenho. Criado para elevar o nível de qualquer setup, ele combina o conforto da construção Gasket Mount com a precisão dos switches Gateron Yellow, entregando uma digitação suave, responsiva e silenciosa.',
      },
      {
        id: '4',
        title:
          'Mouse Gamer Redragon Prism Pro, 26000DPI, 5 Botoes, Tri-Mode, Preto, M997-PRO-1K',
        price: 'R$ 389,99',
        image: require('../assets/m997-pro-1k9.jpg'),
        desc: 'O Mouse Gamer Redragon Prism Pro foi desenvolvido para quem busca precisão, velocidade e versatilidade em jogos e no uso diário. Com ajuste de até 26000 DPI, 5 botões e conectividade Tri-Mode, o modelo oferece controle eficiente dos movimentos, respostas ágeis e liberdade para alternar entre diferentes modos de conexão conforme a necessidade do setup. É uma opção completa para quem deseja desempenho gamer, praticidade e maior flexibilidade em um único periférico.',
      },
      {
        id: '5',
        title:
          'Mouse Gamer Havit MS955WB, RGB, 26000DPI, 6 Botoes, USB, Preto, MS955WB',
        price: 'R$ 289,99',
        image: require('../assets/ms955wb2155.jpg'),
        desc: 'Mouse Gamer da Havit, modelo MS955WB, marca líder de mercado gamer. O grande diferencial deste modelo e o melhor da marca até o momento é que é Tri-Mode, tem três tipos de conexão, sendo vai cabo USB / Type-C, Bluetooth 5.0 e Wireless 2.4Ghz com o dongle e base de carregamento magnético. Para usar via cabo usb basta conectar o cabo USB / Type-c no mouse e no computador. Para usar modo bluetooth, posicione o switch embaixo do mouse em "BT", um led azul começa a piscar no topo do mouse e depois é só fazer o processo de pareamento com o seu computador. Para usar no modo Wireless 2.4Ghz, conecte o cabo USB no PC e o Type-c na dock. Depois posicione o switch embaixo do mouse em "2.4G" e estará pronto para uso.',
      },
      {
        id: '6',
        title: 'Headset Gamer Logitech G335 Preto, 981-000977',
        price: 'R$ 489,99',
        image: require('../assets/981-0009772.jpg'),
        desc: 'Qualidade de áudio a nível de jogo combinado a cores divertidas e vibrantes. Leve, com faixa de cabeça ajustável e almofadas com espuma de memória para transformar o jogo em uma experiência verdadeiramente agradável. Os controles integrados e a conexão plug-and-play permitem que você mergulhe rapidamente no jogo. Escolha o seu G335 e jogue com seu estilo.',
      },
    ],
  },
  {
    title: 'Consoles',
    data: [
      {
        id: '7',
        title: 'Nintendo Switch OLED 64GB - Branco',
        price: 'R$ 2.700,00',
        image: require('../assets/NS_OLED.webp'),
        desc: 'O novo sistema conta com uma tela OLED de 7 polegadas, um amplo e resistente suporte ajustável, dock com entrada Lan integrada com fio, 64 GB de armazenamento interno e áudio aprimorado Tela OLED de 7 polegadas: Cores vivas e contraste nítido quando você joga em qualquer lugar; Suporte amplo e ajustável: Você pode abrir o novo suporte mais resistente para facilitar a visualização; Encontre o seu melhor ângulo: Suporte ajustável para encontrar o ângulo de visão ideal; Entrada Lan com fio: Conecte-se online usando a entrada LAN da dock ao jogar no Modo TV; 64GB de armazenamento interno: Salve jogos em seu Switch com 64GB de armazenamento interno. Áudio aprimorado: Desfrute do áudio aprimorado dos alto-falantes integrados do Nintendo Switch Oled.',
      },
      {
        id: '8',
        title: 'PlayStation 5 Slim Edição Digital 825GB - Branco',
        price: 'R$ 4.029,00',
        image: require('../assets/PS5.webp'),
        desc: 'O PlayStation® 5 Digital Edition é o console de nova geração que carrega todo o legado construído pela Sony ao longo de décadas de história no mundo dos games. Dentre suas inúmeras inovações, a principal delas é o carregamento através de SSDs (Solid State Drives), que permite minimizar o tempo de carregamento de todos os processos dentro do console, eliminando para sempre telas de loading e horas de instalação. Desfrute da fluidez de taxas de quadros a 120Hz e resoluções que atingem até 8K, e maximize sua experiência neste console que fez história.',
      },
      {
        id: '9',
        title: 'Nintendo Switch 2 128GB - Preto',
        price: 'R$ 4.279,00',
        image: require('../assets/Nintendo_Switch2.jpg'),
        desc: 'Comece a sua próxima aventura de videogames com o Nintendo Switch 2 — repleto de melhorias e maneiras de se conectar e jogar com outros! Seus jogos ganham vida numa tela vívida de 7,9 polegadas e 1080p, que mostra o poder de processamento e capacidade gráfica do console. A dock melhorada também é compatível com resolução de até 4K e taxas de quadros de até 120 fps em jogos e TV compatíveis.',
      },
      {
        id: '10',
        title: 'Xbox Series X 1TB - Preto',
        price: 'R$ 4.735,00',
        image: require('../assets/Xbox_SeriesX.webp'),
        desc: 'O Xbox Series X é um dos dois sucessores dos consoles de nova geração da Microsoft, que traz consigo um poder de processamento avantajado unido à uma biblioteca de jogos retrocompatíveis que quebra paradigmas. Dentre suas inúmeras inovações, a principal dela é o carregamento através de SSDs (Solid State Drives), que permite minimizar o tempo de carregamento de todos os processos dentro do console, eliminando para sempre telas de loading e horas de instalação. Desfrute da fluidez de taxas de quadros a 120 Hz e resoluções que atingem até 8K, e maximize sua experiência neste console que fez história.',
      },
      {
        id: '11',
        title: 'ASUS ROG Xbox Ally AMD Ryzen Z2 16GB',
        price: 'R$ 4.949,00',
        image: require('../assets/ROG_Ally.webp'),
        desc: 'O ROG Xbox Ally coloca a experiência de console na palma da sua mão para jogar tudo em qualquer lugar. Equipado com chip gráfico de última geração e bateria de alta capacidade, esse console portátil garante horas de gameplay com ótima qualidade gráfica na tela fluida de alta resolução. O amplo armazenamento ainda permite carregar seus jogos favoritos de Xbox e das demais plataformas de PC em um só lugar. Por fim, o design ergonômico garante não só mais conforto, como também mais liberdade, ao incluir portas USB-C para conexão direta com TVs, carregadores portáteis e periféricos.',
      },
    ],
  },
  {
    title: 'Componentes',
    data: [
      {
        id: '12',
        title: 'Placa de Vídeo Asus TUF Gaming Geforce RTX 5090 OC',
        price: 'R$ 22.599,99',
        image: require('../assets/tuf-rtx5090-32g-gaming9.jpg'),
        desc: 'A arquitetura NVIDIA Blackwell é elevada por um resfriamento e entrega de energia aprimorados, fortificada com reforços robustos para uma durabilidade excepcional. Trave, carregue e domine com a TUF Gaming GeForce RTX™ 5090, projetada para resistir às condições mais severas e oferecer desempenho incomparável.',
      },
      {
        id: '13',
        title: 'INNO3D Placa Gráfica RTX 4060 Ti X3 OC 8GB Gddr6',
        price: 'R$ 3.215,00',
        image: require('../assets/rtx4060.webp'),
        desc: 'A INNO3D apresenta a sua nova INNO3D GeForce® RTX 4060 Ti X3 OC DLSS 3, uma GPU NVIDIA de última geração, equipada com a revolucionária arquitetura Ada. O design de dois slots da INNO3D X3 OC é perfeitamente adequado para montagens de formato compacto. Esta placa de vídeo mais recente não apenas oferece um desempenho excepcional, mas também apresenta um design moderno e elegante que adiciona apelo visual à sua configuração. Experimente o futuro dos jogos com a inovadora arquitetura Ada e a INNO3D GeForce® RTX 4060 Ti X3 OC DLSS 3.',
      },
      {
        id: '14',
        title:
          'Placa de Video Gigabyte Radeon RX 7600 Gaming OC, 8GB, GDDR6, 128-bit, GV-R76GAMING-OC-8GD',
        price: 'R$ 1.659,99',
        image: require('../assets/rx7600.jpg'),
        desc: 'A placa gráfica AMD Radeon™ RX 7600 estabeleceu um novo nível de desempenho para gamers e streamers. Apresentando unidades de computação AMD RDNA™ 3 unificadas e velocidades de clock extremamente rápidas, para permitir desempenho avançado de jogos com alta taxa de atualização em 1080p.',
      },
      {
        id: '15',
        title:
          'Placa-Mãe Gigabyte B550M Aorus Elite Rev. 1.3, AMD AM4, Micro ATX, DDR4, Preto - B550M AORUS ELITE',
        price: 'R$ 679,99',
        image: require('../assets/Aorus_Elite.webp'),
        desc: 'Libere todo o potencial dos processadores AMD Ryzen de 3ª e 4ª geração com a placa-mãe Gigabyte B550M Aorus Elite. Projetada para oferecer desempenho excepcional, ela conta com recursos avançados como VRM digital de alta qualidade, slots DDR4 de alta velocidade, e conectividade ultrarrápida. Ideal para gamers que buscam uma plataforma sólida para construir um PC poderoso e personalizável.',
      },
      {
        id: '16',
        title:
          'Processador AMD Ryzen 7 5700X, 8-Core, 16-Threads, 3.4GHz (4.6GHz Turbo), Cache 36MB, AM4, 100-100000926WOF',
        price: 'R$ 1.149,99',
        image: require('../assets/ryzen7.jpg'),
        desc: 'Processador AMD Ryzen 7 5700X com 8 núcleos e 16 threads, Socket AM4 e temperatura máxima 95°C.',
      },
      {
        id: '17',
        title:
          'Processador AMD Ryzen 5 5600GT, 6-Core, 12-Threads, 3.6GHz (4.6GHz Turbo), Cache 19MB, AM4, 100-100001488BOX-BR',
        price: 'R$ 877,99',
        image: require('../assets/ryzen5600GT.jpg'),
        desc: 'Aproveite seus jogos favoritos com a CPU AMD Ryzen™ 5 5600GT. Apresenta 6 núcleos de alto desempenho, gráficos AMD Radeon™ integrados e clocks acelerados de até 4,6 GHz , atualize para o desempenho premiado da arquitetura “Zen 3”.',
      },
    ],
  },
];

export default function TelaProdutos({ navigation, route }) {
  const { colors } = useTheme();
  return (
    <View style={styles.maincontainer}>
      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          //Linha de código para renderizar os itens como botões apertáveis
          <TouchableOpacity
            style={styles.item}
            //Código para fazer que os botões mandem para a próxima tela, assim como os dados para a descrição do produto também
            onPress={() =>
              navigation.navigate('telaDescricao', {
                item: item.title,
                price: item.price,
                image: item.image,
                desc: item.desc,
              })
            }>
            <Image source={item.image} style={styles.images} />
            <View style={styles.subcontainer}>
              <Text style={[styles.title, { color: colors.text }]}>
                {item.title}
              </Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={[styles.header, { color: 'red' }]}>{title}</Text>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  maincontainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 5,
  },
  subcontainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 6,
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
  },
  header: {
    marginTop: 20,
    marginLeft: 5,
    fontSize: 40,
    fontWeight: 'bold',
  },
  images: {
    width: 120,
    height: 120,
    borderRadius: 4,
    marginRight: 15,
  },
  price: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
  },
});
