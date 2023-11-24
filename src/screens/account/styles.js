const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    header: {
        height: 40,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 12,
    },
    body: {
        flex: 1,
        marginBottom: 40,
    },
    infoLayout: {
        height: 110,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    info: {
        height: 75,
        width: '75%',
        flexDirection: 'row',
        gap: 12,
        marginLeft: 25,
    },
    ava: {
        height: 36,
        width: 36,
    },
    avaImage: {
        height: 36,
        width: 36,
        borderRadius: 50,
    },
    name: {
        height: 45,
    },
    anotherOption: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 35,
        paddingLeft: 28,
        height: 48,
        width: '100%',
    },
    anotherOptionEnd: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 35,
        paddingLeft: 28,
        height: 48,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#E4E4E4',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: '100%',
    },
});

export default styles;
