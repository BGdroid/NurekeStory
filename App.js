import React from "react";

import { Text, View, StatusBar, SafeAreaView } from "react-native";
import NStory from "./lib/NStory";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar backgroundColor={"red"} />
      <Text>dsklfj ksdnfkl sdl</Text>

      <NStory data={"yyyyyyeeeeesssss"} />
    </SafeAreaView>
  );
};

export default App;
