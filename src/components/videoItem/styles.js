import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    video: {
        aspectRatio: 1.7,
        position: 'relative',
    },
    poster: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    duration: {
        position: 'absolute',
        right: 8,
        bottom: 8,
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 4,
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        color: '#fff',
    },
    body: {
        paddingTop: 12,
        paddingBottom: 24,
        paddingLeft: 12,
        paddingRight: 8,
        gap: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    avatarBtn: {
        width: 28,
        height: 28,
    },
    avatarImage: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
    },
    info: {
        flex: 1,
        gap: 4,
    },
    title: {
        color: '#0F0F0F',
    },
    desc: {
        color: '#666666',
    },
    moreBtn: {},
});

export default styles;
