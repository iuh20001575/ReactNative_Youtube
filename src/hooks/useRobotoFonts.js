import { Roboto_400Regular, Roboto_500Medium, useFonts } from '@expo-google-fonts/roboto';

function getWeight(fontWeight) {
    switch (+fontWeight) {
        case 500:
            return 'Medium';
        default:
            return 'Regular';
    }
}

function useRobotoFonts(weight = 400) {
    const [loaded] = useFonts({ Roboto_500Medium, Roboto_400Regular });

    if (loaded)
        return {
            fontFamily: `Roboto_${weight}${getWeight(weight)}`,
        };

    return {};
}

export default useRobotoFonts;
