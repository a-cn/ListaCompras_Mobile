import React, { useState } from 'react';
import { Modal, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/modalStyles';

export default function NovoItemModal({ visivel, onFechar, onSalvar, placeholder }) {
  const [texto, setTexto] = useState('');

  const salvar = () => {
    if (texto.trim()) {
      onSalvar(texto);
      setTexto('');
    }
  };

  return (
    <Modal transparent visible={visivel} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            placeholder={placeholder || "Digite aqui..."}
            placeholderTextColor="#94949E"
            value={texto}
            onChangeText={setTexto}
          />
          <View style={styles.botoes}>
            <TouchableOpacity onPress={salvar}>
              <Ionicons name="checkmark-circle" size={26} color="#40CFCB" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onFechar}>
              <Ionicons name="close-circle-outline" size={26} color="#FEB75A" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
