import { StyleSheet, ViewStyle } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "@/constants";

type Styles = {
  selectedJob: string;
  item: {
    job_id: string;
  };
};

const container = ({ item, selectedJob }: Styles) =>
  StyleSheet.create({
    container: {
      width: 250,
      padding: SIZES.xLarge,
      backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
      borderRadius: SIZES.medium,
      justifyContent: "space-between",
      ...SHADOWS.medium,
      shadowColor: COLORS.white,
    },
  });

const logoContainer = ({ item, selectedJob }: Styles) =>
  StyleSheet.create({
    logoContainer: {
      width: 50,
      height: 50,
      backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
      borderRadius: SIZES.medium,
      justifyContent: "center",
      alignItems: "center",
    },
  });

const logoImage = StyleSheet.create({
  logoImage: {
    width: "70%",
    height: "70%",
  },
});

const companyName = StyleSheet.create({
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
});

const infoContainer = StyleSheet.create({
  infoContainer: {
    marginTop: SIZES.large,
  },
});

const jobName = ({ item, selectedJob }: Styles) =>
  StyleSheet.create({
    jobName: {
      fontSize: SIZES.large,
      fontFamily: FONT.medium,
      color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
    },
  });

const infoWrapper = StyleSheet.create({
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

const publisher = ({ item, selectedJob }: Styles) =>
  StyleSheet.create({
    publisher: {
      fontSize: SIZES.medium - 2,
      fontFamily: FONT.bold,
      color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
    },
  });

const location = StyleSheet.create({
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default {
  container,
  logoContainer,
  jobName,
  publisher,
  ...logoImage,
  ...companyName,
  ...infoContainer,
  ...infoWrapper,
  ...location,
};
