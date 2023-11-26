import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    historyVideo: {
        width: 140,
        height: 164,
        gap: 6,
    },
    wrapper: {
        position: 'relative',
        borderRadius: 10,
        overflow: 'hidden',
    },
    historyImage: {
        width: 140,
        height: 80,
    },
    progress: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    position: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: '50%',
        backgroundColor: '#E23325',
    },
    duration: {
        position: 'absolute',
        bottom: 6,
        right: 8,
        backgroundColor: 'rgba(15, 15, 15, 0.8)',
        borderRadius: 4,
        paddingHorizontal: 6,
        height: 20,
        justifyContent: 'center',
    },
    durationText: {
        color: '#fff',
    },
    historyVideoTitle: {
        width: 140,
        height: 84,
        flexDirection: 'row',
    },
    videoTitle: {
        width: 128,
    },
    title: { marginBottom: 8 },
    desc: { color: '#616161' },
    moreBtn: { flex: 1 },
});

export default styles;
