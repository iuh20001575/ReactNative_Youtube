import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'rgba(242, 242, 242, 1)',
        borderRadius: 9999,
        flexDirection: 'row',
        alignItems: 'center',
    },

    separator: {
        width: 1,
        height: 16,
        borderRightWidth: 1,
        borderColor: 'rgba(217, 217, 217, 1)',
    },

    category: {
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
});

export default styles;
