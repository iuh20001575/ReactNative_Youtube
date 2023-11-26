import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { formatRelativeTimeShort } from '../../utils';
import { CommentIcon, DislikeIcon, LikeIcon, MoreIcon } from '../icons';
import TextCustomize from '../text/TextCustomize';
import Action from './Action';
import styles from './styles';

const CommentDetail = ({ comment }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: comment.avatar }} style={styles.avatar} />
            <View style={styles.info}>
                <View>
                    <TextCustomize style={styles.user}>
                        @{comment.username} · {formatRelativeTimeShort(new Date(comment.date))}{' '}
                        {comment.isEdited && '(edited)'}
                    </TextCustomize>
                    <TextCustomize numberOfLines={4} style={styles.comment}>
                        {comment.comment}
                    </TextCustomize>
                </View>

                <View style={styles.actions}>
                    <Action icon={LikeIcon} number={comment.like} />
                    <Action icon={DislikeIcon} number={comment.dislike} />
                    <Action icon={CommentIcon} number={comment.replies} />
                </View>

                <Pressable style={styles.repliesBtn}>
                    <TextCustomize fontWeight={500} size='sm' style={styles.repliesText}>
                        470 replies
                    </TextCustomize>
                </Pressable>
            </View>
            <Pressable style={styles.moreBtn}>
                <MoreIcon />
            </Pressable>
        </View>
    );
};

export default CommentDetail;
