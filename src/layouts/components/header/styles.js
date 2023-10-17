import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        flexDirection: 'row',
        gap: 3,
    },
    actions: {
        gap: 18,
        flexDirection: 'row',
    },
    avatar: {
        width: 24,
        height: 24,
        borderRadius: 9999,
    },
});

export default styles;
