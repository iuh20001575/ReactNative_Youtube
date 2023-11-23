import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingLeft: 12,
        flexDirection: 'row',
    },
    avatar: {
        width: 24,
        height: 24,
        borderRadius: 12,
        marginRight: 10,
    },
    info: {
        gap: 16,
        flex: 1,
    },
    user: {
        color: '#606060',
    },
    comment: {
        marginTop: 4,
    },
    actions: {
        gap: 8,
        flexDirection: 'row',
    },
    action: {
        width: 50,
        gap: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    repliesBtn: {
        paddingVertical: 4,
    },
    repliesText: {
        color: '#065FD4',
    },
    moreBtn: {
        paddingLeft: 4,
        paddingRight: 16,
    },
});

export default styles;
