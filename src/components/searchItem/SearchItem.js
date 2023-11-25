import React, { memo } from 'react';
import { Image, Pressable } from 'react-native';
import TextCustomize from '~/components/text';
import useSearch from '../../hooks/useSearch';
import { JumpIcon, PlayBackIcon, SearchIcon } from '../icons/icons';
import styles from './styles';

const SearchItem = ({ data }) => {
    const { setValue } = useSearch();

    return (
        <Pressable onLongPress={() => {}} style={styles.container}>
            <Pressable style={styles.playBackBtn}>{(data.isHistory && <PlayBackIcon />) || <SearchIcon />}</Pressable>
            <TextCustomize numberOfLines={2} fontWeight={500} size='md' style={styles.title}>
                {data.title}
            </TextCustomize>
            {!data.image || <Image style={styles.image} source={{ uri: data.image }} />}
            <Pressable onPress={() => setValue(data.title)} style={styles.jumpBtn}>
                <JumpIcon />
            </Pressable>
        </Pressable>
    );
};

export default memo(SearchItem);
