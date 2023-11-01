import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';

function getWeight(fontWeight) {
    switch (+fontWeight) {
        case 500:
            return 'Medium';
        case 700:
            return 'Bold';
        default:
            return 'Regular';
    }
}

function useRobotoFonts(weight = 400) {
    const [loaded] = useFonts({ Roboto_500Medium, Roboto_400Regular, Roboto_700Bold });

    if (loaded)
        return {
            fontFamily: `Roboto_${weight}${getWeight(weight)}`,
        };

    return {};
}

export default useRobotoFonts;
