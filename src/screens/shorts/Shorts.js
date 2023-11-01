import React from 'react';
import { Text } from 'react-native';
import DefaultLayout from '~/layouts/defaultLayout';
import TextCustomize from '~/components/text';

const Short = () => {
    return (
        <DefaultLayout>
            <TextCustomize>Short page</TextCustomize>
        </DefaultLayout>
    );
};

export default Short;
