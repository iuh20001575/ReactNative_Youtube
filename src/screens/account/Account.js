import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextCustomize from '~/components/text/TextCustomize';
import {
    AddAccount,
    Back,
    CloseIcon,
    Help,
    Incognito,
    Purchases,
    Settings,
    TimeWatched,
    YouTubeMusic,
    YouTubePremium,
    YouTubeStudio,
    YourChannel,
    YourData,
} from '../../components/icons/icons';
import styles from './styles';

const Account = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <CloseIcon />
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={styles.body}>
                <View style={styles.infoLayout}>
                    <View style={styles.info}>
                        <View style={styles.ava}>
                            <Image style={styles.avaImage} source={require('../../../assets/avatar.jpg')}></Image>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={styles.name}>
                                <TextCustomize size='lg'>Hoài Thương Xinh Đẹp</TextCustomize>
                                <TextCustomize>@hoaiThuongXinhDep</TextCustomize>
                            </View>
                            <View style={{ height: 20, marginTop: 10 }}>
                                <TextCustomize style={{ color: '#1367D6' }}>Manage your Google Account</TextCustomize>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: 15 }}>
                        <Back />
                    </View>
                </View>
                <View>
                    <View style={styles.anotherOption}>
                        <YourChannel />
                        <TextCustomize style={{ flex: 1 }}>Your channel</TextCustomize>
                    </View>
                    <View style={styles.anotherOption}>
                        <Incognito />
                        <TextCustomize style={{ flex: 1 }}>Turn on lncognito</TextCustomize>
                    </View>
                    <View style={styles.anotherOptionEnd}>
                        <AddAccount />
                        <TextCustomize style={{ flex: 1 }}>Add account</TextCustomize>
                    </View>
                    <View style={styles.anotherOption}>
                        <YouTubePremium />
                        <TextCustomize style={{ flex: 1 }}>Get YouTube Premium</TextCustomize>
                    </View>
                    <View style={styles.anotherOption}>
                        <Purchases />
                        <TextCustomize style={{ flex: 1 }}>Purchases and memberships</TextCustomize>
                    </View>
                    <View style={styles.anotherOption}>
                        <TimeWatched />
                        <TextCustomize style={{ flex: 1 }}>Time watched</TextCustomize>
                    </View>
                    <View style={styles.anotherOptionEnd}>
                        <YourData />
                        <TextCustomize style={{ flex: 1 }}>Your data in Youtube</TextCustomize>
                    </View>
                    <View style={styles.anotherOption}>
                        <Settings />
                        <TextCustomize style={{ flex: 1 }}>Settings</TextCustomize>
                    </View>
                    <View style={styles.anotherOptionEnd}>
                        <Help />
                        <TextCustomize style={{ flex: 1 }}>Help & feedback</TextCustomize>
                    </View>
                    <View style={styles.anotherOption}>
                        <YouTubeStudio />
                        <TextCustomize style={{ flex: 1 }}>YouTube Studio</TextCustomize>
                    </View>
                    <View style={styles.anotherOption}>
                        <YouTubeMusic />
                        <TextCustomize style={{ flex: 1 }}>YouTube Music</TextCustomize>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <TextCustomize size='sm' style={{ color: '#646464' }}>
                    Privacy Policy · Terms of Service
                </TextCustomize>
            </View>
        </SafeAreaView>
    );
};

export default Account;
