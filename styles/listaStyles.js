import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E4E7F5',
    },
    header: {
        backgroundColor: '#494A6F',
        paddingHorizontal: 16,
        paddingBottom: 12,
        paddingTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    menuButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        marginLeft: 10,
        fontSize: 20,
        fontFamily: 'Quicksand',
        color: '#E4E7F5',
        fontWeight: 'bold',
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconSpacing: {
        marginRight: 10,
    },
    ordenacao: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    ordenacaoTexto: {
        color: '#2F2F35',
        marginRight: 5,
        fontFamily: 'Quicksand',
    },
    itemLinha: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 16,
        marginBottom: 10,
        padding: 12,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#A8D8D1',
    },
    itemEsquerda: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemDireita: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemNumero: {
        fontSize: 14,
        color: '#4CA99B',
        marginRight: 8,
        fontFamily: 'Quicksand',
    },
    itemTexto: {
        fontSize: 16,
        color: '#2F2F35',
        fontFamily: 'Quicksand',
    },
    itemConcluido: {
        opacity: 0.6,
    },
    itemTextoConcluido: {
        fontSize: 16,
        color: '#6F6F7A',
        textDecorationLine: 'line-through',
        fontFamily: 'Quicksand',
    },
    divisorConcluidos: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 16,
        borderTopWidth: 1,
        borderColor: '#A8D8D1',
        paddingTop: 5,
    },
    divisorTexto: {
        color: '#4CA99B',
        fontSize: 14,
        fontFamily: 'Quicksand',
        fontWeight: 'bold',
    },
    seta: {
        color: '#4CA99B',
        marginRight: 5,
        fontWeight: 'bold',
        fontSize: 18,
    },
});
