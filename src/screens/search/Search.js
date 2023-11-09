import React, { useState } from 'react';
import { SectionList } from 'react-native';
import uuid from 'react-native-uuid';
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

    return (
        <Wrapper style={{ backgroundColor: '#fff', flex: 1 }}>
            <SearchProvider value={{ value, setValue }}>
                <SectionList
                    keyExtractor={() => uuid.v4()}
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
