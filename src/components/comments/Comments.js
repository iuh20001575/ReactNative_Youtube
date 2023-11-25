import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetScrollView,
    BottomSheetTextInput,
} from '@gorhom/bottom-sheet';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, View } from 'react-native';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';
import uuid from 'react-native-uuid';
import { comments } from '../../data';
import Avatar from '../avatar/Avatar';
import CommentDetail from '../commentDetail/CommentDetail';
import { CloseIcon } from '../icons';
import TextCustomize from '../text/TextCustomize';
import styles from './styles';

const Comments = ({ isShow, setShow }) => {
    const { top, bottom } = useSafeAreaInsets();
    const { height, width } = useSafeAreaFrame();
    const [index, setIndex] = useState(-1);
    const { snapPoints, heightModel } = useMemo(() => {
        const heightCalc = height - top - bottom;

        return {
            heightModel: heightCalc - (width * 210) / 375,
            snapPoints: [`${((heightCalc - (width * 210) / 375) / heightCalc) * 100}%`, '100%'],
        };
    }, [top]);
    const bottomSheetRef = useRef();

    const handleSheetChanges = useCallback((index) => {
        if (index === -1) setShow(false);

        setIndex(index);
    }, []);

    const renderBackdrop = useCallback((props) => <BottomSheetBackdrop {...props} opacity={1} />, []);

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
                <BottomSheetScrollView
                    // stickyHeaderIndices={[0]}
                    // invertStickyHeaders={true}
                    contentContainerStyle={styles.comments}
                    // StickyHeaderComponent={CommentsHeader}
                >
                    {/* <CommentsHeader /> */}
                    {comments.map((item) => (
                        <CommentDetail key={uuid.v4()} comment={item} />
                    ))}
                </BottomSheetScrollView>

                {/* Comment */}
                <View style={[styles.comment, { paddingBottom: bottom }]}>
                    <Avatar
                        source={{
                            uri: 'https://plus.unsplash.com/premium_photo-1698533323307-3b89a25aaadc?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        }}
                    />
                    <BottomSheetTextInput
                        placeholder='Add a comment...'
                        placeholderTextColor='#606060'
                        style={styles.input}
                    />
                </View>
            </View>
        </BottomSheetModal>
    );
};

export default Comments;
