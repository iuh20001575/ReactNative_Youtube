import React, { useState } from 'react';
import { SectionList } from 'react-native';
import SearchHeader from '~/components/searchHeader';
import SearchItem from '~/components/searchItem';
import Wrapper from '~/components/wrapper';
import styles from './styles';
import { SearchProvider } from '../../hooks';

const Search = () => {
    const [value, setValue] = useState('');
    const [searchResult, setSearchResult] = useState([
        {
            title: 'Title',
            data: new Array(100).fill({
                title: 'ruler extension f8',
                image: require('../../../assets/searchItem.png'),
            }),
        },
    ]);

    return (
        <Wrapper>
            <SearchProvider value={{ value, setValue }}>
                <SectionList
                    style={styles.list}
                    contentContainerStyle={styles.contentContainer}
                    sections={searchResult}
                    renderItem={() => <SearchItem value='ruler extension f8' />}
                    stickySectionHeadersEnabled
                    stickyHeaderIndices={[0]}
                    renderSectionHeader={() => <SearchHeader />}
                />
            </SearchProvider>
        </Wrapper>
    );
};

export default Search;
