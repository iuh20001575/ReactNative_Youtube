import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SectionList } from 'react-native';
import SearchHeader from '~/components/searchHeader';
import SearchItem from '~/components/searchItem';
import Wrapper from '~/components/wrapper';
import { searchHistories } from '../../data';
import { SearchProvider } from '../../hooks';
import styles from './styles';

const Search = () => {
    const [value, setValue] = useState('');
    const [searchResult] = useState([
        {
            title: 'Title',
            data: searchHistories.sort((search1, search2) => search2.isHistory - search1.isHistory),
        },
    ]);

    const focus = useIsFocused();

    useEffect(() => {
        focus && setValue('');
    }, [focus]);

    return (
        <Wrapper style={styles.container}>
            <SearchProvider value={{ value, setValue }}>
                <SectionList
                    keyExtractor={(item) => item.id}
                    style={styles.list}
                    contentContainerStyle={styles.contentContainer}
                    sections={searchResult}
                    renderItem={({ item }) => <SearchItem data={item} />}
                    stickySectionHeadersEnabled
                    stickyHeaderIndices={[0]}
                    renderSectionHeader={() => <SearchHeader />}
                />
            </SearchProvider>
        </Wrapper>
    );
};

export default Search;
