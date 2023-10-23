import React from 'react';
import { Image, Pressable } from 'react-native';
import TextCustomize from '~/components/text';
import useSearch from '../../hooks/useSearch';
import { JumpIcon, PlayBackIcon, SearchIcon } from '../icons/icons';
import styles from './styles';

const SearchItem = ({ value, isHistory = false }) => {
    const { setValue } = useSearch();

    return (
        <Pressable onLongPress={() => {}} style={styles.container}>
            <Pressable style={styles.playBackBtn}>{(isHistory && <PlayBackIcon />) || <SearchIcon />}</Pressable>
            <TextCustomize fontWeight={500} size='md' style={styles.title}>
                {value}
            </TextCustomize>
            <Image style={styles.image} source={require('../../../assets/searchItem.png')} />
            <Pressable onPress={() => setValue(value)} style={styles.jumpBtn}>
                <JumpIcon />
            </Pressable>
        </Pressable>
    );
};

export default SearchItem;
