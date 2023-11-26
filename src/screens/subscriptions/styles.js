import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    loading: { flex: 1, marginTop: 30 },
    subscriptionChannel: {
        flexDirection: 'row',
        flex: 1,
    },
    allChannelBtn: {
        padding: 16,
        justifyContent: 'center',
    },
    allChannelBtnText: {
        color: 'rgba(8, 96, 212, 1)',
    },
    filter: {
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
});

export default styles;
