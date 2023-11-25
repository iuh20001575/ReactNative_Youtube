import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    videoWrapper: {
        aspectRatio: 375 / 210,
        position: 'relative',
    },
    posterImage: {
        width: '100%',
        aspectRatio: 375 / 210,
        flex: 1,
    },
    durationView: {
        position: 'absolute',
        right: 8,
        bottom: 8,
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 4,
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
    },
    duration: {
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
});

export default styles;
