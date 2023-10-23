import React, { useMemo } from 'react';
import { Platform, TextInput } from 'react-native';

const Input = ({ style, ...props }) => {
    const styles = useMemo(() => {
        const styles = Array.isArray(style) ? style : [style];

        if (Platform.OS === 'web')
            styles.push({
                outline: 'none',
            });

        return styles;
    }, []);

    return <TextInput style={styles} {...props} />;
};

export default Input;
