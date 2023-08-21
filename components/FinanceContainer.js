import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const FinanceContainer = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.nav}>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <View style={styles.frame1}>
          <View style={styles.frame2}>
            <Text style={styles.text}>14:18</Text>
            <Image
              style={styles.frameIcon1}
              contentFit="cover"
              source={require("../assets/frame1.png")}
            />
          </View>
          <View style={styles.frame3}>
            <Text style={styles.text1}>100%</Text>
            <Image
              style={styles.frameIcon2}
              contentFit="cover"
              source={require("../assets/frame2.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.frame4}>
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
        <Text style={styles.finance}>Finance</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameIcon: {
    position: "relative",
    width: 38,
    height: 23,
    overflow: "hidden",
  },
  text: {
    fontSize: 11,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.black,
    textAlign: "left",
    width: 19,
    marginTop: 6,
  },
  frameIcon1: {
    position: "relative",
    width: 13,
    height: 18,
    overflow: "hidden",
    marginLeft: 87,
  },
  frame2: {
    width: 126,
    height: 19,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text1: {
    fontSize: 11,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.black,
    textAlign: "left",
    width: 19,
    marginTop: 6,
  },
  frameIcon2: {
    position: "relative",
    width: 17,
    height: 23,
    overflow: "hidden",
    marginLeft: 5,
  },
  frame3: {
    width: 50,
    height: 23,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 3,
  },
  frame1: {
    width: 179,
    height: 23,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 109,
  },
  nav: {
    width: 326,
    height: 23,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 2,
  },
  backIcon: {
    position: "relative",
    borderRadius: Border.br_5xs,
    width: 37,
    height: 32,
  },
  finance: {
    position: "relative",
    fontSize: FontSize.size_7xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.black,
    textAlign: "left",
    marginLeft: 69,
  },
  frame4: {
    width: 208,
    height: 32,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginRight: 118,
    marginTop: 7,
  },
  frame: {
    width: 328,
    height: 63,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default FinanceContainer;
