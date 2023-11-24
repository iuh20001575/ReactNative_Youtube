const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
    historyLayout: {
        height: 212,
        justifyContent: 'center',
        paddingLeft: 12,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#b2b2b2',
    },
    history: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        width: '95%',
    },
    historyVideoLayout: {
        flexDirection: 'row',
        gap: 12,
    },
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
    },
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
        bottom: 0,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    },
    anotherOption: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 35,
        paddingLeft: 28,
        height: 60,
        width: '100%',
    },
});

export default styles;
