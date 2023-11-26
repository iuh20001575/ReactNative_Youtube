import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    flex1: { flex: 1 },

    historyVideo: {
        width: 140,
        height: 164,
        gap: 6,
    },
    historyImage: {
        width: 140,
        height: 80,
        borderRadius: 10,
    },
    historyVideoTitle: {
        width: 140,
        height: 84,
        flexDirection: 'row',
    },
    videoTitle: {
        width: 128,
        gap: 2,
    },
    desc: { color: '#616161' },
    playlistVideo: {
        width: 140,
        height: 80,
        borderRadius: 10,
    },
    numberVideoPlaylist: {
        position: 'absolute',
        height: 20,
        width: 140,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
        bottom: 0,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    },
    playlistNumber: {
        color: '#fff',
    },
});

export default styles;
