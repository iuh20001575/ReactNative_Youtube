import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // Video
    videoWrapper: {
        position: 'relative',
    },
    video: {
        width: '100%',
        aspectRatio: 375 / 210,
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
