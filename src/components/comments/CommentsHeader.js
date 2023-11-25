import React, { forwardRef } from 'react';
import { View } from 'react-native';
import TextCustomize from '../text/TextCustomize';

function CommentsHeader(props, ref) {
    console.log('🚀 ~ CommentsHeader ~ props:', props);

    return (
        <View>
            <TextCustomize>jhdsjk</TextCustomize>
        </View>
    );
}

export default forwardRef(CommentsHeader);
