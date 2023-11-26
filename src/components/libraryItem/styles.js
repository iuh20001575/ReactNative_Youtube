import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    flex1: { flex: 1 },

    anotherOption: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 35,
        paddingLeft: 28,
        height: 60,
        width: '100%',
    },
    desc: { color: '#797979' },
});

export default styles;
