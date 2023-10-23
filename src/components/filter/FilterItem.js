import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Pressable } from 'react-native';
import TextCustomize from '../text';
import styles from './styles';

const linearColors = ['#0E7068', '#85147F', '#F27D83'];
const normalColors = ['#F2F2F2', '#F2F2F2', '#F2F2F2'];
const activeColors = ['#0F0F0F', '#0F0F0F', '#0F0F0F'];
const linearActiveColors = ['#D9FBF9', '#FFDFFA', '#FFE5E8'];

// TODO Open drawer when click explore
const FilterItem = ({ data, isFirst }) => {
    const navigation = useNavigation();
    const route = useRoute();

    const isActive = route.params?.filter === data.title;

    const Icon = data.icon;
    const paddingStyle = Icon
        ? {
              paddingHorizontal: 7,
              paddingVertical: 3,
          }
        : {
              paddingHorizontal: 11,
              paddingVertical: 7,
          };

    const handleClick = () => {
        if (Icon) {
            return;
        }

        navigation.navigate(route.name, { filter: data.title });
    };

    return (
        <Pressable onPress={handleClick}>
            <LinearGradient
                start={[0, 0]}
                end={[1, 1]}
                colors={data.special ? linearColors : normalColors}
                style={[
                    styles.filterItem,
                    isFirst && {
                        marginRight: 8,
                        marginLeft: 12,
                    },
                ]}
            >
                <LinearGradient
                    start={[0, 0]}
                    end={[1, 1]}
                    style={[paddingStyle, styles.filterItemBody]}
                    colors={isActive ? (data.special ? linearActiveColors : activeColors) : normalColors}
                >
                    {(Icon && <Icon />) || (
                        <TextCustomize size='sm' style={styles[isActive && !data.special ? 'textActive' : '']}>
                            {data.title}
                        </TextCustomize>
                    )}
                </LinearGradient>
            </LinearGradient>
        </Pressable>
    );
};

export default FilterItem;
