import { Platform, StatusBar } from 'react-native';

const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        flex: 1,
    },
});

export default styles;
