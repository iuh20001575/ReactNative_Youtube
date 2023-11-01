import React, { useMemo } from 'react';
import { Text } from 'react-native';
import { useRobotoFonts } from '~/hooks';

/**
 *
 * @param {size} size xxs | xs | sm | md | lg | xl | xxl
 * @param {fontWeight} fontWeight 100 | 200 | 300 | 400 | 500 | 600 | 700
 * @returns
 */
const TextCustomize = ({ size = 'md', fontWeight = 400, style = [], children, ...props }) => {
    const font = useRobotoFonts(fontWeight);
    const styles = useMemo(() => {
        const styles = Array.isArray(style) ? style : [style];

        styles.unshift({
            color: '#0F0F0F',
        });

        switch (size) {
            case 'xxs':
                styles.push({
                    fontSize: 10,
                    lineHeight: 12,
                });
                break;
            case 'xs':
                styles.push({
                    fontSize: 12,
                    lineHeight: 14,
                });
                break;
            case 'sm':
                styles.push({
                    fontSize: 14,
                    lineHeight: 16,
                });
                break;
            case 'lg':
                styles.push({
                    fontSize: 18,
                    lineHeight: 20,
                });
                break;
            case 'xl':
                styles.push({
                    fontSize: 20,
                    lineHeight: 24,
                });
                break;
            case 'xxl':
                styles.push({
                    fontSize: 22,
                    lineHeight: 32,
                });
                break;
            default:
                styles.push({
                    fontSize: 16,
                    lineHeight: 20,
                });
        }

        styles.push({ fontWeight }, font);

        return styles;
    }, [style, font]);

    return (
        <Text selectable={false} style={styles} {...props}>
            {children}
        </Text>
    );
};

export default TextCustomize;
