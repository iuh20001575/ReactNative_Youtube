import { Image, View } from 'react-native';

function Poster({ source, style }) {
    return (
        <View style={style[0]}>
            <Image source={source} style={style[1]} />
        </View>
    );
}

export default Poster;
