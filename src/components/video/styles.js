import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    videoContainer: { flex: 1, width: '100%', aspectRatio: 375 / 210 },
    poster: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    video: { flex: 1, width: '100%', height: '100%' },
});

export default styles;
