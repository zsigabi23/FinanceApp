import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const BalanceCard = () => {
  return (
    <View style={[styles.frame, styles.framePosition1]}>
      <View style={styles.targLayout}>
        <Text style={styles.saveDailyWeekly}>{`save daily, weekly
and monthly torwards
target. up to 15% p.a`}</Text>
        <Text style={[styles.target, styles.targetTypo]}>Target</Text>
        <Text style={[styles.r300000, styles.targetTypo]}>R3 000.00</Text>
        <Image
          style={styles.mditargetArrowIcon}
          contentFit="cover"
          source={require("../assets/mditargetarrow.png")}
        />
      </View>
      <View style={[styles.walle, styles.targLayout]}>
        <Text style={styles.saveDailyWeekly1}>{`save daily, weekly
and monthly torwards
target. up to 15% p.a`}</Text>
        <View style={[styles.frame1, styles.framePosition1]}>
          <View style={[styles.frame2, styles.framePosition]}>
            <Text style={[styles.wallet, styles.walletPosition]}>Wallet</Text>
          </View>
          <Image
            style={[styles.frameIcon, styles.walletPosition]}
            contentFit="cover"
            source={require("../assets/frame3.png")}
          />
          <View style={[styles.frame3, styles.framePosition]}>
            <Text style={[styles.wallet, styles.walletPosition]}>
              R5 000.00
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition1: {
    overflow: "hidden",
    position: "absolute",
  },
  targetTypo: {
    color: Color.darkslategray,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  targLayout: {
    width: 151,
    borderWidth: 2,
    borderColor: "#38514b",
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
    height: 183,
  },
  framePosition: {
    height: 20,
    left: 5,
    overflow: "hidden",
    position: "absolute",
  },
  walletPosition: {
    top: 0,
    position: "absolute",
  },
  saveDailyWeekly: {
    top: 73,
    textAlign: "left",
    color: Color.gray_500,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    left: 14,
    position: "absolute",
  },
  target: {
    top: 41,
    left: 13,
    position: "absolute",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  r300000: {
    top: 141,
    left: 14,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  mditargetArrowIcon: {
    top: 11,
    width: 24,
    height: 24,
    left: 12,
    overflow: "hidden",
    position: "absolute",
  },
  saveDailyWeekly1: {
    top: 71,
    left: 12,
    textAlign: "left",
    color: Color.gray_500,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  wallet: {
    left: 0,
    color: Color.darkslategray,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  frame2: {
    top: 37,
    width: 55,
  },
  frameIcon: {
    width: 19,
    left: 5,
    top: 0,
    height: 24,
    overflow: "hidden",
  },
  frame3: {
    top: 133,
    width: 84,
  },
  frame1: {
    top: 4,
    left: 8,
    width: 89,
    height: 153,
  },
  walle: {
    marginLeft: 18,
  },
  frame: {
    top: 204,
    left: 9,
    width: 320,
    flexDirection: "row",
    alignItems: "center",
    height: 183,
    overflow: "hidden",
  },
});

export default BalanceCard;
