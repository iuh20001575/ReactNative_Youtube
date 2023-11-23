import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textSecondary: {
        color: 'rgba(100, 100, 100, 1)',
    },

    container: {
        backgroundColor: '#fff',
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
