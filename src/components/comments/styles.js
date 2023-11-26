import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    view: { flex: 1, position: 'relative' },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    closeBtn: {
        padding: 16,
    },
    comments: { marginTop: 8, gap: 24 },
    comment: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 6,
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#E5E5E5',
    },
    input: {
        padding: 10,
        borderRadius: 4,
        backgroundColor: '#F2F2F2',
        flex: 1,
    },
});

export default styles;
