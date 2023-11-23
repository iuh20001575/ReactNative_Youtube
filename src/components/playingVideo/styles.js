import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // Video
    videoWrapper: {
        position: 'relative',
        width: '100%',
        aspectRatio: 375 / 210,
    },
    video: {
        position: 'relative',
        width: '100%',
        aspectRatio: 375 / 210,
    },
    progressBar: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 2,
        zIndex: 1,
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

    // Actions
    actions: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'space-between',
    },
    header: {
        height: 48,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    downBtn: {
        width: 35,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerRight: {
        flexDirection: 'row',
        paddingRight: 5,
    },
    body: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 42,
        alignSelf: 'center',
    },
    bodyBtn: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 9999,
        justifyContent: 'center',
        alignItems: 'center',
    },
    prevNextBtn: {
        width: 38,
        height: 38,
    },
    controlBtn: {
        width: 54,
        height: 54,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 19,
        justifyContent: 'space-between',
    },
    durationWrapper: {
        flexDirection: 'row',
    },
    currentDuration: {
        color: 'rgba(255, 255, 255, 1)',
    },
    duration: {
        color: 'rgba(255, 255, 255, 0.7)',
    },
    fullScreenBtn: {
        padding: 19,
    },
});

export default styles;
