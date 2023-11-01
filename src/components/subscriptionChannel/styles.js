import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 14,
        width: 72,
        userSelect: 'none',
    },
    header: {
        width: '100%',
        aspectRatio: 1 / 1,
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 99999,
    },
    name: {
        width: '100%',
        color: 'rgba(104, 104, 104, 1)',
        opacity: 0.8,
        marginTop: 6,
        textAlign: 'center',
    },
});

export default styles;
