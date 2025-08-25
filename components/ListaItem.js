import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import styles from '../styles/homeStyles';

export default function ListaItem({ item, navigation, abrirMenu, itemRef }) {
  const threeDotsRef = useRef(null);

  return (
    <View ref={itemRef}>
      <TouchableOpacity
        style={styles.listaItem}
        onPress={() => navigation.navigate('ListaScreen')}
        activeOpacity={0.8}
      >
        <View style={styles.listaInfo}>
          <View>
            <Text style={styles.listaNome}>
              <Text style={styles.seta}>{'›'}</Text>
              {item.nome}
            </Text>
            <Text style={styles.listaData}>Última edição: {item.ultimaModificacao}</Text>
          </View>
        </View>
        <View style={styles.iconesAcoes}>
          <TouchableOpacity style={styles.iconSpacing}>
            <Feather name="edit" size={20} color="#857AA8" />
          </TouchableOpacity>
          <TouchableOpacity ref={threeDotsRef} onPress={() => abrirMenu(item.id)}>
            <Entypo name="dots-three-vertical" size={16} color="#857AA8" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}
