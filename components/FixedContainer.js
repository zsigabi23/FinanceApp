import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const FixedContainer = () => {
  return (
    <View style={[styles.frame, styles.framePosition]}>
      <View style={[styles.fixed, styles.fixedLayout]}>
        <Image
          style={[styles.materialSymbolslockOutlineIcon, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/materialsymbolslockoutline.png")}
        />
        <Text style={[styles.fixed1, styles.fixed1Typo]}>Fixed</Text>
        <Text
          style={[styles.saveDailyWeekly, styles.saveTypo]}
        >{`save daily, weekly
and monthly torwards
target. up to 15% p.a`}</Text>
        <Text style={[styles.r150000, styles.fixed1Typo]}>R1 500.00</Text>
      </View>
      <View style={[styles.safebox, styles.fixedLayout]}>
        <Text style={[styles.r250000, styles.fixed1Typo]}>R2 500.00</Text>
        <View style={[styles.frame1, styles.framePosition]}>
          <Image
            style={styles.belllIcon}
            contentFit="cover"
            source={require("../assets/belll.png")}
          />
          <Text
            style={[styles.saveDailyWeekly1, styles.saveTypo]}
          >{`save daily, weekly
and monthly torwards
target. up to 15% p.a`}</Text>
          <Text style={[styles.safebox1, styles.fixed1Typo]}>Safebox</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    overflow: "hidden",
    position: "absolute",
  },
  fixedLayout: {
    width: 151,
    borderWidth: 2,
    borderColor: "#38514b",
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
    top: 0,
    height: 183,
    position: "absolute",
  },
  fixed1Typo: {
    textAlign: "left",
    color: Color.darkslategray,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  saveTypo: {
    color: Color.gray_500,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  materialSymbolslockOutlineIcon: {
    top: 13,
    width: 24,
    height: 24,
    left: 14,
    position: "absolute",
    overflow: "hidden",
  },
  fixed1: {
    top: 43,
    left: 14,
  },
  saveDailyWeekly: {
    top: 75,
    left: 13,
  },
  r150000: {
    top: 143,
    left: 14,
  },
  fixed: {
    left: 0,
  },
  r250000: {
    top: 140,
    left: 13,
  },
  belllIcon: {
    width: 30,
    height: 30,
    left: 0,
    top: 0,
    position: "absolute",
  },
  saveDailyWeekly1: {
    top: 65,
    left: 0,
  },
  safebox1: {
    top: 33,
    left: 1,
  },
  frame1: {
    top: 10,
    left: 12,
    width: 114,
    height: 101,
    position: "absolute",
    overflow: "hidden",
  },
  safebox: {
    left: 169,
  },
  frame: {
    top: 406,
    left: 9,
    width: 320,
    height: 183,
    overflow: "hidden",
    position: "absolute",
  },
});

export default FixedContainer;
