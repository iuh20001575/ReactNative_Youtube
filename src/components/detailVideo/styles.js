import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        elevation: 10,
        width: '100%',
        position: 'absolute',
        zIndex: 9999,
        overflow: 'hidden',
    },

    // Side
    side: {
        paddingLeft: 8,
        paddingTop: 6,
    },
    sideText: {
        lineHeight: 20,
    },
    sideChannelName: {
        color: '#666',
    },
    sideBtn: {
        padding: 16,
    },

    //
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 106,
        height: 54,
        zIndex: 1,
    },
    playerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
});

export default styles;
