import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetScrollView,
    BottomSheetTextInput,
} from '@gorhom/bottom-sheet';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, View } from 'react-native';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';
import config from '../../config';
import Avatar from '../avatar/Avatar';
import CommentDetail from '../commentDetail/CommentDetail';
import { CloseIcon } from '../icons';
import TextCustomize from '../text/TextCustomize';
import styles from './styles';

const Comments = ({ isShow, setShow, comments, selectedVideo, setComments }) => {
    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState('');
    const { top, bottom } = useSafeAreaInsets();
    const { height, width } = useSafeAreaFrame();
    const { snapPoints } = useMemo(() => {
        const heightCalc = height - top - bottom;

        return {
            heightModel: heightCalc - (width * 210) / 375,
            snapPoints: [`${((heightCalc - (width * 210) / 375) / heightCalc) * 100}%`, '100%'],
        };
    }, [top]);
    const bottomSheetRef = useRef();

    const handleSheetChanges = useCallback((index) => {
        if (index === -1) setShow(false);
    }, []);

    const renderBackdrop = useCallback((props) => <BottomSheetBackdrop {...props} opacity={1} />, []);

    const handlePostComment = async () => {
        if (!value) return;

        try {
            const res = await fetch(`${config.ENDPOINT}/comments`, {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    videoId: selectedVideo.id,
                    avatar: 'https://plus.unsplash.com/premium_photo-1698533323307-3b89a25aaadc?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    username: 'thaoanhhaa1',
                    content: value,
                    like: 0,
                    dislike: 0,
                    comments: 0,
                    date: new Date().toISOString(),
                }),
                method: 'POST',
            });

            const data = await res.json();

            setComments((prev) => [...prev, data]);
            setValue('');
        } catch (error) {}
    };

    useEffect(() => {
        isShow && bottomSheetRef.current?.present();
    }, [isShow]);

    return (
        <BottomSheetModal
            enablePanDownToClose
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            topInset={top}
            onChange={handleSheetChanges}
            backdropComponent={renderBackdrop}
        >
            <View style={styles.view}>
                {/* Header */}
                <View style={styles.header}>
                    <TextCustomize size='lg' fontWeight={700}>
                        Comments
                    </TextCustomize>
                    <Pressable style={styles.closeBtn}>
                        <CloseIcon />
                    </Pressable>
                </View>

                {/* Comments */}
                <BottomSheetScrollView contentContainerStyle={[styles.comments, { paddingBottom: 70 + bottom }]}>
                    {/* <CommentsHeader /> */}
                    {comments.map((item) => (
                        <CommentDetail key={item.id} comment={item} />
                    ))}
                </BottomSheetScrollView>

                {/* Comment */}
                <View style={[styles.comment, { paddingBottom: (focus ? 0 : bottom) + 6 }]}>
                    <Avatar
                        source={{
                            uri: 'https://plus.unsplash.com/premium_photo-1698533323307-3b89a25aaadc?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        }}
                    />
                    <BottomSheetTextInput
                        placeholder='Add a comment...'
                        placeholderTextColor='#606060'
                        style={styles.input}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        value={value}
                        onChangeText={setValue}
                        onSubmitEditing={handlePostComment}
                    />
                </View>
            </View>
        </BottomSheetModal>
    );
};

export default Comments;
