import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bgPrimary: {
        backgroundColor: 'rgba(242, 242, 242, 1)',
    },

    wrapper: {
        backgroundColor: '#fff',
    },
    container: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        gap: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputGroup: {
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 9999,
    },
    input: {
        paddingLeft: 12,
        paddingVertical: 6,
        fontSize: 16,
        lineHeight: 20,
        textDecorationLine: 'none',
        flex: 1,
        color: '#0F0F0F',
    },
    closeBtn: {
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    micBtn: {
        width: 32,
        height: 32,
        borderRadius: 9999,
        justifyContent: 'center',
        alignItems: 'center',
    },

    filtersContainer: { paddingVertical: 8 },
    filters: { paddingLeft: 12 },
});

export default styles;
