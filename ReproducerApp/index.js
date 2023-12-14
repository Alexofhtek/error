import { useState} from 'react';
import { View, ScrollView, SafeAreaView} from 'react-native';

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
          <Stack.Screen
            options={{
              headerLeft: () => (
                <ScreenHeaderBtn   />
              ),
              
            }}
          />
        </SafeAreaView>
    )
        }
    

        
export default Home;
