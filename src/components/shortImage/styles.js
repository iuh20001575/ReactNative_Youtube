import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    gap8: {
        gap: 8,
    },
    container: {
        paddingHorizontal: 12,
        gap: 8,
    },
    item: {
        flex: 1,
        aspectRatio: 3 / 5,
        borderRadius: 8,
        overflow: 'hidden',
    },
    wrapper: {
        width: '100%',
        height: '100%',
    },
    itemTitle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 8,
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {
            width: 0,
            height: 2,
        },
        textShadowRadius: 4,
    },
    moreBtn: {
        position: 'absolute',
        top: 8,
        right: 17,
    },
});

export default styles;
