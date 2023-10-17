import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';

function useRobotoFonts() {
    const [loaded] = useFonts({ Roboto_400Regular });

    if (loaded)
        return {
            fontFamily: 'Roboto_400Regular, sans-serif',
        };

    return {};
}

export default useRobotoFonts;
