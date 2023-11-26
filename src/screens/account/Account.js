import React from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import uuid from 'react-native-uuid';
import TextCustomize from '~/components/text/TextCustomize';
import AccountItem from '../../components/accountItem/AccountItem';
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

const accounts = [
    { icon: YourChannel, title: 'Your channel' },
    { icon: Incognito, title: 'Turn on lncognito' },
    { icon: AddAccount, title: 'Add account', separator: true },
    { icon: YouTubePremium, title: 'Get YouTube Premium' },
    { icon: Purchases, title: 'Purchases and memberships' },
    { icon: TimeWatched, title: 'Time watched' },
    { icon: YourData, title: 'Your data in Youtube', separator: true },
    { icon: Settings, title: 'Settings' },
    { icon: Help, title: 'Help & feedback', separator: true },
    { icon: YouTubeStudio, title: 'YouTube Studio' },
    { icon: YouTubeMusic, title: 'YouTube Music' },
];

const Account = ({ navigation }) => {
    const handleClose = () => navigation.goBack();

    return (
        <SafeAreaView style={styles.container}>
            <Pressable onPress={handleClose} style={styles.header}>
                <CloseIcon />
            </Pressable>
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={styles.body}>
                <View style={styles.infoLayout}>
                    <View style={styles.info}>
                        <View style={styles.ava}>
                            <Image style={styles.avaImage} source={require('../../../assets/avatar.jpg')}></Image>
                        </View>
                        <View style={{ flex: 1, gap: 5 }}>
                            <View style={styles.name}>
                                <TextCustomize fontWeight={500} size='lg'>
                                    Hoài Thương
                                </TextCustomize>
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
                    {accounts.map((accountItem) => (
                        <AccountItem key={uuid.v4()} icon={accountItem.icon} separator={accountItem.separator}>
                            {accountItem.title}
                        </AccountItem>
                    ))}
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <TextCustomize size='sm' fontWeight={500} style={{ color: 'rgba(100,100,100,0.5)' }}>
                    Privacy Policy · Terms of Service
                </TextCustomize>
            </View>
        </SafeAreaView>
    );
};

export default Account;
