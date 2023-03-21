import { useRouter } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

import styles from "./Welcome.style";
import { icons, SIZES } from "../../../constants";

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, Prinart</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}></View>
      </View>
    </View>
  );
};

export default Welcome;
