import React from "react";
import { Image, TouchableOpacity } from "react-native";

import styles from "./ScreenHeaderBtn.style";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension).img}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;