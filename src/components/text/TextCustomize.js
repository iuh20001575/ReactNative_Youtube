import React, { useMemo } from 'react';
import { Text } from 'react-native';
import { useRobotoFonts } from '~/hooks';

const TextCustomize = ({ style = [], children, ...props }) => {
    const font = useRobotoFonts();
    const styles = useMemo(() => {
        const styles = Array.isArray(style) ? style : [style];

        styles.push(font);

        return styles;
    }, [style, font]);

    return (
        <Text style={styles} {...props}>
            {children}
        </Text>
    );
};

export default TextCustomize;
