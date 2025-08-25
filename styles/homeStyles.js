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
    listaItem: {
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
    listaInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listaNome: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2F2F35',
        fontFamily: 'Quicksand',
    },
    listaData: {
        fontSize: 12,
        color: '#6F6F7A',
        fontFamily: 'Quicksand',
        fontStyle: 'italic',
        opacity: 0.7,
        marginTop: 2
    },
    iconesAcoes: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    seta: {
        fontSize: 20,
        marginRight: 10,
        color: '#857AA8',
        fontFamily: 'Quicksand',
        fontWeight: 'bold',
    },
});
