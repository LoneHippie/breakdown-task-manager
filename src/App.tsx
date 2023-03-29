import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { getTaskBreakdown } from '~app_contexts/api/api';

const App = () => {
   const [text, setText] = useState('');
   useEffect(() => {
      getTaskBreakdown({ task: 'Take over the world' }).then((text) => setText(text));
   }, []);
   return (
      <View>
         <Text>AIIIII</Text>
         <Text>{text}</Text>
      </View>
   );
};

export default App;
