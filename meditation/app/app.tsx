import React from 'react';
import { SafeAreaView, Text } from 'react-native';


const Message = () => {
    return (
        <SafeAreaView>
            <Text>Message</Text>
        </SafeAreaView>
    );
};

function App() {
    return (
        <SafeAreaView>
            <Message />
        </SafeAreaView>
    );
}

export default App;