import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    textColor: {
        color: '#fff',
    },

    // Header
    headerLayout: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    headerIcon: {
        padding: 12,
    },
    bodyLayout: {
        width: '100%',
        position: 'relative',
    },

    videoWrapper: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 },
    video: { width: '100%', height: '100%' },

    musicWrapper: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },

    actionLayout: {
        position: 'absolute',
        bottom: 63,
        right: 4,
    },
    actionItem: {
        alignItems: 'center',
        gap: 4,
    },
    imageMusicLayout: {
        width: 40,
        height: 40,
        position: 'absolute',
        bottom: 15,
        right: 10,
    },
    imageMusic: {
        width: 40,
        height: 40,
        borderRadius: 5,
    },
    infoLayout: {
        paddingRight: 71,
        position: 'absolute',
        left: 16,
        bottom: 15,
        gap: 11,
    },
    chanelLayout: {
        height: 32,
        marginBottom: 0,
        marginLeft: 0,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        paddingLeft: 0,
    },
    subButtonLayout: {
        width: 78,
        height: 26,
        borderRadius: 4,
    },
    channelItem: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 32,
        marginLeft: 0,
        marginBottom: 0,
        gap: 8,
    },
    imageChannelLayout: {
        width: 32,
        height: 32,
    },
    imageChannel: {
        width: 32,
        height: 32,
        borderRadius: 50,
    },
    progressBar: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 2,
    },
    loaded: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    viewed: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        backgroundColor: 'rgba(226, 51, 37, 1)',
        zIndex: 2,
    },
    point: {
        position: 'absolute',
        right: 0,
        top: -1,
        width: 4,
        height: 4,
        backgroundColor: 'rgba(226, 51, 37, 1)',
        borderRadius: 2,
    },
});

export default styles;
