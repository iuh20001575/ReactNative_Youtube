import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textSecondary: {
        color: 'rgba(100, 100, 100, 1)',
    },

    container: {
        backgroundColor: '#fff',
    },

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
        width: '30%',
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

    // Info
    info: {
        padding: 12,
        gap: 4,
    },
    description: {
        flexDirection: 'row',
        gap: 8,
    },
    desc: {
        color: 'rgba(100, 100, 100, 1)',
        flex: 1,
    },

    // Channel
    channelWrapper: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        gap: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    channel: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        flex: 1,
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    channelInfo: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    subscriptionBtn: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 999,
        backgroundColor: 'rgba(242, 242, 242, 1)',
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
    },

    // Categories
    categories: {
        gap: 16,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },

    // Comments
    comments: {
        marginHorizontal: 12,
        marginVertical: 8,
        backgroundColor: 'rgba(242, 242, 242, 1)',
        borderRadius: 12,
        padding: 12,
    },
    commentHeader: {
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
    },
    commentCount: { color: 'rgba(100, 100, 100, 1)' },

    // Videos
    videos: {
        paddingTop: 16,
        gap: 10,
    },
});

export default styles;
