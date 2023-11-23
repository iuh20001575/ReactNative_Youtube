import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Image, Pressable, ScrollView, View } from 'react-native';
import uuid from 'react-native-uuid';
import Category from '~/components/category';
import TextCustomize from '~/components/text';
import Wrapper from '~/components/wrapper';
import Comment from '../../components/comment/Comment';
import {
    CutIcon,
    DislikeIcon,
    DownArrowIcon,
    DownloadIcon,
    LikeIcon,
    NotificationIcon,
    SaveIcon,
    ShareIcon,
} from '../../components/icons/icons';
import VideoCustomize from '../../components/video/VideoCustomize';
import VideoItem from '../../components/videoItem/VideoItem';
import { comments, videos } from '../../data';
import styles from './styles';
import { useRoute } from '@react-navigation/native';
import PlayingVideo from '../../components/playingVideo/PlayingVideo';

const categories = [
    {
        icon: ShareIcon,
        title: 'Share',
    },
    {
        icon: DownloadIcon,
        title: 'Download',
    },
    {
        icon: CutIcon,
        title: 'Clip',
    },
    {
        icon: SaveIcon,
        title: 'Save',
    },
];

const comment = comments[0];

const DetailVideo = () => {
    const route = useRoute();
    const video = route.params.video;

    return (
        <Wrapper style={styles.container}>
            <ScrollView>
                {/* Video */}
                <PlayingVideo video={video} />

                {/* Info video */}
                <View style={styles.info}>
                    <TextCustomize numberOfLines={2} fontWeight={500} size='lg'>
                        All 12 useState & useEffect Mistakes Junior React Developers Still Make in 2023
                    </TextCustomize>
                    <View style={styles.description}>
                        <TextCustomize size='xs' ellipsizeMode='clip' numberOfLines={1} style={styles.desc}>
                            270K views 3 days ago Config 2022 270K views 3 days ago Config 2022
                        </TextCustomize>
                        <Pressable>
                            <TextCustomize fontWeight={500} size='xs'>
                                ...more
                            </TextCustomize>
                        </Pressable>
                    </View>
                </View>

                {/* Channel */}
                <View style={styles.channelWrapper}>
                    <View style={styles.channel}>
                        <Image source={require('../../../assets/avatar.jpg')} style={styles.avatar} />
                        <View style={styles.channelInfo}>
                            <TextCustomize fontWeight={500} size='sm'>
                                Figma
                            </TextCustomize>
                            <TextCustomize size='xs' style={styles.textSecondary}>
                                62.4K
                            </TextCustomize>
                        </View>
                    </View>
                    <Pressable style={styles.subscriptionBtn}>
                        <NotificationIcon />
                        <DownArrowIcon />
                    </Pressable>
                </View>

                {/* Categories */}
                <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={styles.categories}>
                    <Category.Wrapper isView>
                        <Category.Wrapper>
                            <Category icon={LikeIcon}>652</Category>
                        </Category.Wrapper>
                        <Category.Separator />
                        <Category.Wrapper>
                            <Category icon={DislikeIcon}></Category>
                        </Category.Wrapper>
                    </Category.Wrapper>

                    {categories.map((category) => (
                        <Category.Wrapper key={uuid.v4()}>
                            <Category icon={category.icon}>{category.title}</Category>
                        </Category.Wrapper>
                    ))}
                </ScrollView>

                {/* Comments */}
                <View style={styles.comments}>
                    <View style={styles.commentHeader}>
                        <TextCustomize fontWeight={700} size='sm' style={styles.commentTitle}>
                            Comments
                        </TextCustomize>
                        <TextCustomize size='xs' style={styles.commentCount}>
                            32
                        </TextCustomize>
                    </View>
                    <Comment comment={comment} />
                </View>

                {/* Videos */}
                <FlatList
                    keyExtractor={() => uuid.v4()}
                    data={videos}
                    renderItem={({ item }) => <VideoItem video={item} />}
                    style={styles.videos}
                />
            </ScrollView>
        </Wrapper>
    );
};

export default DetailVideo;
