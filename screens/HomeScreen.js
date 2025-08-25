import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import useCustomFonts from '../fonts/useCustomFonts';
import styles from '../styles/homeStyles';
import popupStyles from '../styles/popupStyles';
import ListaItem from '../components/ListaItem';
import NovoItemModal from '../components/NovoItemModal';
import { StyleSheet } from 'react-native';
import { useRef } from 'react';

const listasIniciais = [
    { id: '1', nome: 'Mercado', ultimaModificacao: '08/05/2025, 10:30' },
    { id: '2', nome: 'Farmácia', ultimaModificacao: '07/05/2025, 15:45' },
    { id: '3', nome: 'Aniversário', ultimaModificacao: '20/10/2024, 20:03' },
    { id: '4', nome: 'Cosméticos', ultimaModificacao: '13/07/2024, 21:12' },
    { id: '5', nome: 'Roupas', ultimaModificacao: '13/07/2024, 18:36' },
    { id: '6', nome: 'Decoração', ultimaModificacao: '04/02/2024, 09:27' },
];

export default function HomeScreen({ navigation }) {
  const fontsLoaded = useCustomFonts();
  const [listas, setListas] = useState(listasIniciais);
  const [modalVisivel, setModalVisivel] = useState(false);
  const [menuCoords, setMenuCoords] = useState(null);
  const [menuItemId, setMenuItemId] = useState(null);
  const itemRefs = useRef({});

  if (!fontsLoaded) return null;

  const adicionarLista = (texto) => {
    const novaLista = {
      id: Date.now().toString(),
      nome: texto,
      ultimaModificacao: new Date().toLocaleString('pt-BR'),
    };
    setListas((prev) => [...prev, novaLista]);
    setModalVisivel(false);
  };

  const abrirMenuComCoordenadas = (itemId) => {
    const node = itemRefs.current[itemId];
    if (node) {
      node.measure((x, y, width, height, pageX, pageY) => {
        setMenuCoords({ top: pageY + height - 20, right: 20 });
        setMenuItemId(itemId);
      });
    }
  };

  const fecharMenu = () => {
    setMenuCoords(null);
    setMenuItemId(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuButton}>
          <Ionicons name="menu" size={28} color="#E4E7F5" />
          <Text style={styles.headerTitle}>LISTAS DE COMPRAS</Text>
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => setModalVisivel(true)}>
            <Ionicons name="add-circle" size={26} color="#E4E7F5" style={styles.iconSpacing} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="search" size={20} color="#E4E7F5" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.ordenacao}>
        <Text style={styles.ordenacaoTexto}>Ordenar</Text>
        <MaterialIcons name="sort" size={20} color="#6F6F7A" />
      </TouchableOpacity>

      <FlatList
        data={listas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListaItem
            item={item}
            navigation={navigation}
            abrirMenu={() => abrirMenuComCoordenadas(item.id)}
            itemRef={(ref) => (itemRefs.current[item.id] = ref)}
          />
        )}
      />

      <NovoItemModal
        visivel={modalVisivel}
        onFechar={() => setModalVisivel(false)}
        onSalvar={adicionarLista}
        placeholder="Nova lista..."
      />

      {menuCoords && (
        <>
          <TouchableOpacity
            style={StyleSheet.absoluteFillObject}
            activeOpacity={1}
            onPress={fecharMenu}
          />
          <View style={[popupStyles.inlineMenu, {
            position: 'absolute',
            top: menuCoords.top,
            right: menuCoords.right,
          }]}>
            <TouchableOpacity style={popupStyles.menuItem} onPress={fecharMenu}>
              <Feather name="edit" size={16} color="rgba(28, 28, 30, 0.68)" />
              <Text style={popupStyles.menuText}>Renomear</Text>
            </TouchableOpacity>
            <TouchableOpacity style={popupStyles.menuItem} onPress={fecharMenu}>
              <Feather name="archive" size={16} color="rgba(28, 28, 30, 0.68)" />
              <Text style={popupStyles.menuText}>Arquivar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={popupStyles.menuItem} onPress={fecharMenu}>
              <Feather name="trash-2" size={16} color="rgba(28, 28, 30, 0.68)" />
              <Text style={popupStyles.menuText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

    </View>
  );
}
