import { useFonts, Quicksand_400Regular } from '@expo-google-fonts/quicksand';

export default function useCustomFonts() {
  const [loaded] = useFonts({
    'Quicksand': Quicksand_400Regular,
  });
  return loaded;
}

/*
import * as Font from 'expo-font';
import { useState, useEffect } from 'react';

export default function useCustomFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Quicksand': require('../assets/fonts/Quicksand-VariableFont_wght.ttf'),
        // Você pode carregar mais variações aqui, como:
        // 'Quicksand-Bold': require('../assets/fonts/Quicksand-Bold.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  return fontsLoaded;
}
*/