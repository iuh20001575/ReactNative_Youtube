import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#E5E5E5',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
    },
    icon: {
        flexShrink: 0,
        flexGrow: 0,
    },
    style1: {
        flex: 1,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
});

export default styles;
