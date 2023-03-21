import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "@/constants";

const btnContainer = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
});

const btnImg = (dimension: string) =>
  StyleSheet.create({
    img: {
      width: dimension,
      height: dimension,
      borderRadius: SIZES.small / 1.25,
    },
  });

export default {
  ...btnContainer,
  btnImg,
};
