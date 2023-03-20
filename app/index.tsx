import { Stack, useRouter } from "expo-router";
import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import {
  NearByJobs,
  PopularJobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

import { COLORS, icons, images, SIZES } from "../constants";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
              handlePress={() => {}}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              dimension="100%"
              handlePress={() => {}}
            />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <PopularJobs />
          <NearByJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
