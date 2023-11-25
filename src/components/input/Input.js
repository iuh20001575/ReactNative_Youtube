import React, { forwardRef, useMemo } from 'react';
import { Platform, TextInput } from 'react-native';

const Input = ({ style, ...props }, ref) => {
    const styles = useMemo(() => {
        const styles = Array.isArray(style) ? style : [style];

        if (Platform.OS === 'web')
            styles.push({
                outline: 'none',
            });

        return styles;
    }, []);

    return <TextInput style={styles} {...props} ref={ref} />;
};

export default forwardRef(Input);
