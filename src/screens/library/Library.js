import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import DefaultLayout from '~/layouts/defaultLayout/DefaultLayout';
import {
    Downloads,
    HistoryIcon,
    PlaylistIcon,
    PlaylistWhiteIcon,
    VideoInfo,
    YourMovies,
    YourVideos,
} from '../../components/icons/icons';
import TextCustomize from '../../components/text/TextCustomize';
import styles from './styles';

const Library = () => {
    return (
        <DefaultLayout>
            <View style={styles.historyLayout}>
                <View style={styles.history}>
                    <HistoryIcon />
                    <TextCustomize style={{ flex: 1 }}>History</TextCustomize>
                    <TextCustomize style={{ color: '#0961D4' }}>View all</TextCustomize>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.historyVideoLayout}
                >
                    <View style={styles.historyVideo}>
                        <Image style={styles.historyImage} source={require('../../../assets/avatar.jpg')}></Image>
                        <View style={styles.historyVideoTitle}>
                            <View style={styles.videoTitle}>
                                <TextCustomize size='sm' numberOfLines={2} style={{ marginBottom: 6 }}>
                                    【TFBOYS 王俊凱】王俊凱新歌《Beautiful【Karry Wang Junkai】
                                </TextCustomize>
                                <TextCustomize size='xxs' numberOfLines={1} style={{ color: '#616161' }}>
                                    TFBOYS 王俊凱 個人頻道 KARRY WANG JUNKAI
                                </TextCustomize>
                            </View>
                            <View style={{ flex: 1 }}>
                                <VideoInfo />
                            </View>
                        </View>
                    </View>
                    <View style={styles.historyVideo}>
                        <Image style={styles.historyImage} source={require('../../../assets/avatar.jpg')}></Image>
                        <View style={styles.historyVideoTitle}>
                            <View style={styles.videoTitle}>
                                <TextCustomize size='sm' numberOfLines={2} style={{ marginBottom: 6 }}>
                                    【TFBOYS 王俊凱】王俊凱新歌《Beautiful【Karry Wang Junkai】
                                </TextCustomize>
                                <TextCustomize size='xxs' numberOfLines={1} style={{ color: '#616161' }}>
                                    TFBOYS 王俊凱 個人頻道 KARRY WANG JUNKAI
                                </TextCustomize>
                            </View>
                            <View style={{ flex: 1 }}>
                                <VideoInfo />
                            </View>
                        </View>
                    </View>
                    <View style={styles.historyVideo}>
                        <Image style={styles.historyImage} source={require('../../../assets/avatar.jpg')}></Image>
                        <View style={styles.historyVideoTitle}>
                            <View style={styles.videoTitle}>
                                <TextCustomize size='sm' numberOfLines={2} style={{ marginBottom: 6 }}>
                                    【TFBOYS 王俊凱】王俊凱新歌《Beautiful【Karry Wang Junkai】
                                </TextCustomize>
                                <TextCustomize size='xxs' numberOfLines={1} style={{ color: '#616161' }}>
                                    TFBOYS 王俊凱 個人頻道 KARRY WANG JUNKAI
                                </TextCustomize>
                            </View>
                            <View style={{ flex: 1 }}>
                                <VideoInfo />
                            </View>
                        </View>
                    </View>
                    <View style={styles.historyVideo}>
                        <Image style={styles.historyImage} source={require('../../../assets/avatar.jpg')}></Image>
                        <View style={styles.historyVideoTitle}>
                            <View style={styles.videoTitle}>
                                <TextCustomize size='sm' numberOfLines={2} style={{ marginBottom: 6 }}>
                                    【TFBOYS 王俊凱】王俊凱新歌《Beautiful【Karry Wang Junkai】
                                </TextCustomize>
                                <TextCustomize size='xxs' numberOfLines={1} style={{ color: '#616161' }}>
                                    TFBOYS 王俊凱 個人頻道 KARRY WANG JUNKAI
                                </TextCustomize>
                            </View>
                            <View style={{ flex: 1 }}>
                                <VideoInfo />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.historyLayout}>
                <View style={styles.history}>
                    <PlaylistIcon />
                    <TextCustomize style={{ flex: 1 }}>Playlists</TextCustomize>
                    <TextCustomize style={{ color: '#0961D4' }}>View all</TextCustomize>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.historyVideoLayout}>
                    <View style={styles.historyVideo}>
                        <View style={styles.playlistVideo}>
                            <Image style={styles.historyImage} source={require('../../../assets/avatar.jpg')}></Image>
                            <View style={styles.numberVideoPlaylist}>
                                <PlaylistWhiteIcon />
                                <TextCustomize size='xxs' style={{ color: '#ffffff' }}>
                                    8
                                </TextCustomize>
                            </View>
                        </View>
                        <View style={styles.historyVideoTitle}>
                            <View style={styles.videoTitle}>
                                <TextCustomize size='sm' numberOfLines={2} style={{ marginBottom: 6 }}>
                                    SUMMERTIME - ROYWANG
                                </TextCustomize>
                                <TextCustomize size='xxs' numberOfLines={1} style={{ color: '#616161' }}>
                                    Private
                                </TextCustomize>
                            </View>
                            <View style={{ flex: 1 }}>
                                <VideoInfo />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.anotherOption}>
                <YourVideos />
                <TextCustomize size='sm' style={{ flex: 1 }}>
                    Your Videos
                </TextCustomize>
            </View>
            <View style={styles.anotherOption}>
                <Downloads />
                <View style={{ height: 42, flex: 1 }}>
                    <TextCustomize size='sm'>Downloads</TextCustomize>
                    <TextCustomize size='xs' style={{ color: '#797979' }}>
                        0 videos
                    </TextCustomize>
                </View>
            </View>
            <View style={styles.anotherOption}>
                <YourMovies />
                <TextCustomize size='sm' style={{ flex: 1 }}>
                    Your Videos
                </TextCustomize>
            </View>
        </DefaultLayout>
    );
};

export default Library;
