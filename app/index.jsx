import { Stack, useRouter } from "expo-router";
import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { ScreenHeaderBtn } from "../components";

import { COLORS, icons } from "../constants";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.right} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
