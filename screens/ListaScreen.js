import { useState, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons, Entypo, MaterialIcons, Feather } from '@expo/vector-icons';
import styles from '../styles/listaStyles';
import popupStyles from '../styles/popupStyles';
import useCustomFonts from '../fonts/useCustomFonts';
import NovoItemModal from '../components/NovoItemModal';

const itensLista = [
  { id: '1', texto: 'Arroz 5kg', concluido: false },
  { id: '2', texto: 'Feijão preto', concluido: false },
  { id: '3', texto: 'Leite integral 1L', concluido: true },
  { id: '4', texto: 'Ovos (dúzia)', concluido: false },
  { id: '5', texto: 'Detergente', concluido: true },
  { id: '6', texto: 'Farinha de trigo', concluido: false },
  { id: '7', texto: 'Suco', concluido: false },
  { id: '8', texto: 'Meio da asa 1kg', concluido: false },
  { id: '9', texto: 'Vinagre', concluido: true },
];

export default function ListaScreen({ navigation }) {
  const fontsLoaded = useCustomFonts();
  const [modalVisivel, setModalVisivel] = useState(false);
  const [menuCoords, setMenuCoords] = useState(null);
  const [menuItemId, setMenuItemId] = useState(null);
  const itemRefs = useRef({});

  if (!fontsLoaded) return null;

  const itensPendentes = itensLista.filter((item) => !item.concluido);
  const itensConcluidos = itensLista.filter((item) => item.concluido);

  const abrirMenuComCoordenadas = (itemId) => {
    if (menuItemId === itemId) {
      fecharMenu();
      return;
    }
    const node = itemRefs.current[itemId];
    if (node) {
      node.measure((x, y, width, height, pageX, pageY) => {
        setMenuCoords({ top: pageY + height - 10, right: 20 });
        setMenuItemId(itemId);
      });
    }
  };
  const fecharMenu = () => {
    setMenuCoords(null);
    setMenuItemId(null);
  };

  const renderItem = ({ item, index, concluido = false }) => (
    <View 
      style={[styles.itemLinha, item.concluido && styles.itemConcluido]}
      ref={ref => itemRefs.current[item.id] = ref}
    >
      {/* Parte esquerda: número e texto */}
      <View style={styles.itemEsquerda}>
        {!concluido && <Text style={styles.itemNumero}>{index + 1}.</Text>}
        <Text style={item.concluido ? styles.itemTextoConcluido : styles.itemTexto}>
          {item.texto}
        </Text>
      </View>

      {/* Parte direita: checkbox e opções */}
      <View style={styles.itemDireita}>
        <Ionicons
          name={item.concluido ? 'checkbox' : 'square-outline'}
          size={22}
          color={item.concluido ? '#A8D8D1' : '#494A6F'}
          style={{ marginRight: 12 }}
        />
        <TouchableOpacity onPress={() => abrirMenuComCoordenadas(item.id)}>
          <Entypo name="dots-three-vertical" size={16} color="#857AA8" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.menuButton}>
          <Ionicons name="chevron-back-outline" size={26} color="#E4E7F5" />
          <Text style={styles.headerTitle}>Mercado</Text>
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

      {/* Lista de Itens Pendentes */}
      <FlatList
        data={itensPendentes}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => renderItem({ item, index })}
        ListFooterComponent={
          <>
            {itensConcluidos.length > 0 && (
              <>
                <View style={styles.divisorConcluidos}>
                  <Text style={styles.divisorTexto}>
                    <Text style={styles.seta}>{'›'}</Text>Comprados
                  </Text>
                </View>
                {itensConcluidos.map((item, index) =>
                  renderItem({ item, index, concluido: true })
                )}
              </>
            )}
          </>
        }
      />

      <NovoItemModal
        visivel={modalVisivel}
        onFechar={() => setModalVisivel(false)}
        onSalvar={(texto) => {
          console.log('Novo item adicionado:', texto);
          setModalVisivel(false);
        }}
        placeholder="Incluir item..."
      />

      {menuCoords && (
        <>
          <TouchableOpacity
            style={{ ...StyleSheet.absoluteFillObject }}
            activeOpacity={1}
            onPress={fecharMenu}
          />

          <View style={[
            popupStyles.inlineMenu,
            {
              position: 'absolute',
              top: menuCoords.top,
              right: menuCoords.right,
            }
          ]}>
            <TouchableOpacity style={popupStyles.menuItem} onPress={fecharMenu}>
              <Feather name="edit" size={16} color="rgba(28, 28, 30, 0.68)" />
              <Text style={popupStyles.menuText}>Editar</Text>
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
