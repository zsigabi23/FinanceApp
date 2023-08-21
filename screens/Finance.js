import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import FinanceContainer from "../components/FinanceContainer";
import BalanceCard from "../components/BalanceCard";
import NavigationCard from "../components/NavigationCard";
import FixedContainer from "../components/FixedContainer";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Finance = () => {
  return (
    <View style={styles.finance}>
      <FinanceContainer />
      <View style={styles.frame}>
        <View style={[styles.frame1, styles.framePosition]}>
          <Text
            style={[styles.saveAPercentage, styles.saveAPercentageTypo]}
          >{`Save a percentage as
you spend and get daily returns.`}</Text>
          <View style={[styles.frameChild, styles.setUpNowPosition]} />
          <Text style={[styles.setUpNow, styles.setUpNowPosition]}>
            Set up now
          </Text>
        </View>
        <View style={[styles.frame2, styles.framePosition]}>
          <Text
            style={[
              styles.balanceR1200000Container,
              styles.saveAPercentageTypo,
            ]}
          >
            <Text style={styles.balance}>{`Balance: `}</Text>
            <Text style={styles.r1200000}>R12 000.00</Text>
          </Text>
        </View>
        <BalanceCard />
        <NavigationCard />
        <FixedContainer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    position: "absolute",
    overflow: "hidden",
  },
  saveAPercentageTypo: {
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  setUpNowPosition: {
    height: 37,
    width: 157,
    top: 81,
    left: 14,
    position: "absolute",
  },
  saveAPercentage: {
    top: 22,
    color: Color.darkslategray,
    fontSize: FontSize.size_base,
    left: 14,
    textAlign: "left",
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.darkslategray,
  },
  setUpNow: {
    color: Color.white,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    width: 157,
    top: 81,
    fontSize: FontSize.size_base,
    justifyContent: "center",
  },
  frame1: {
    top: 0,
    left: 9,
    borderRadius: Border.br_mini,
    backgroundColor: "rgba(14, 245, 189, 0.3)",
    width: 320,
    height: 141,
  },
  balance: {
    color: Color.black,
  },
  r1200000: {
    color: Color.darkslategray,
  },
  balanceR1200000Container: {
    fontSize: 18,
  },
  frame2: {
    top: 161,
    left: 7,
    width: 324,
    justifyContent: "center",
  },
  frame: {
    width: 338,
    height: 695,
    marginTop: 23,
    overflow: "hidden",
  },
  finance: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    paddingHorizontal: 11,
    paddingVertical: 9,
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default Finance;
