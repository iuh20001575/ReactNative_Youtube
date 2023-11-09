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
        position: 'relative',
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 99999,
    },
    status: {
        width: 12,
        height: 12,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#fff',
        position: 'absolute',
        left: 44,
        top: 44,
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
