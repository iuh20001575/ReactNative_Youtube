import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 40,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        userSelect: 'none',
    },
    playBackBtn: {
        marginRight: 24,
    },
    title: {
        color: 'rgba(18, 18, 18, 1)',
        flex: 1,
    },
    image: {
        width: 44,
        height: 33,
        marginRight: 18,
    },
    jumpBtn: {
        justifyContent: 'center',
        paddingHorizontal: 12,
        height: '100%',
    },
});

export default styles;
