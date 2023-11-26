const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
    loading: {
        padding: 40,
        alignItems: 'center',
    },

    historyLayout: {
        height: 212,
        justifyContent: 'center',
        paddingLeft: 12,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#b2b2b2',
    },
    historyVideoLayout: {
        flexDirection: 'row',
        gap: 12,
    },
});

export default styles;
