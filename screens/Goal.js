import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import NavigationSection from "../components/NavigationSection";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Goal = () => {
  return (
    <View style={styles.goal}>
      <View style={styles.nav}>
        <Image
          style={styles.batteryFullIcon}
          contentFit="cover"
          source={require("../assets/batteryfull.png")}
        />
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={[styles.signalIcon, styles.n7ChildPosition]}
          contentFit="cover"
          source={require("../assets/signal.png")}
        />
        <Text style={[styles.text, styles.textFlexBox]}>14:18</Text>
        <Text style={[styles.text1, styles.text1Typo]}>100%</Text>
        <Image
          style={styles.bluetoothBIcon}
          contentFit="cover"
          source={require("../assets/bluetoothb.png")}
        />
      </View>
      <NavigationSection />
      <Image
        style={[styles.backIcon, styles.backIconPosition]}
        contentFit="cover"
        source={require("../assets/back1.png")}
      />
      <Text style={[styles.setAGoal, styles.backIconPosition]}>Set a goal</Text>
      <Text style={[styles.goalAmount, styles.saveTypo]}>Goal Amount</Text>
      <Text style={[styles.selectSaveType, styles.saveTypo]}>
        Select save type
      </Text>
      <Text style={[styles.setTimeline, styles.saveTypo]}>Set timeline</Text>
      <View style={styles.goalChild} />
      <View style={[styles.goalItem, styles.goalLayout]} />
      <View style={[styles.goalInner, styles.goalLayout]} />
      <Text style={[styles.typeAmount, styles.textTypo5]}>Type Amount</Text>
      <Text style={[styles.weekly, styles.weeklyTypo]}>Weekly</Text>
      <Text style={[styles.monthly, styles.weeklyTypo]}>Monthly</Text>
      <View style={styles.rectangleView} />
      <Text style={[styles.text2, styles.textTypo4]}>1</Text>
      <Text style={[styles.text3, styles.textPosition3]}>2</Text>
      <Text style={[styles.text4, styles.textPosition2]}>3</Text>
      <Text style={[styles.text5, styles.textTypo4]}>4</Text>
      <Text style={[styles.text6, styles.textTypo3]}>5</Text>
      <Text style={[styles.text7, styles.textPosition1]}>6</Text>
      <Text style={[styles.text8, styles.textTypo5]}>8</Text>
      <Text style={[styles.text9, styles.textTypo5]}>9</Text>
      <Text style={[styles.text10, styles.textPosition2]}>10</Text>
      <Text style={[styles.text11, styles.textPosition]}>11</Text>
      <Text style={[styles.text12, styles.textTypo2]}>18</Text>
      <Text style={[styles.text13, styles.textTypo2]}>17</Text>
      <Text style={[styles.text14, styles.textTypo2]}>16</Text>
      <Text style={[styles.text15, styles.textTypo2]}>15</Text>
      <Text style={[styles.text16, styles.textTypo2]}>14</Text>
      <Text style={[styles.text17, styles.textTypo2]}>13</Text>
      <Text style={[styles.text18, styles.textTypo2]}>12</Text>
      <Text style={[styles.text19, styles.textTypo3]}>19</Text>
      <Text style={[styles.text20, styles.textTypo5]}>26</Text>
      <Text style={[styles.text21, styles.textTypo1]}>27</Text>
      <Text style={[styles.text22, styles.textTypo]}>28</Text>
      <Text style={[styles.text23, styles.textTypo1]}>20</Text>
      <Text style={[styles.text24, styles.textTypo]}>21</Text>
      <Text style={[styles.text25, styles.textTypo5]}>22</Text>
      <Text style={[styles.text26, styles.textTypo5]}>23</Text>
      <Text style={[styles.text27, styles.textPosition2]}>24</Text>
      <Text style={[styles.text28, styles.textTypo5]}>25</Text>
      <Text style={[styles.sun, styles.sunTypo]}>SUN</Text>
      <Text style={[styles.mon, styles.sunTypo]}>MON</Text>
      <Text style={[styles.tue, styles.sunTypo]}>TUE</Text>
      <Text style={[styles.wed, styles.sunTypo]}>WED</Text>
      <Text style={[styles.thu, styles.sunTypo]}>THU</Text>
      <Text style={[styles.fri, styles.sunTypo]}>FRI</Text>
      <Text style={[styles.sat, styles.sunTypo]}>SAT</Text>
      <View style={styles.feb}>
        <Text style={[styles.february2023, styles.textTypo5]}>
          February 2023
        </Text>
        <Image
          style={styles.materialSymbolsarrowForwardIcon}
          contentFit="cover"
          source={require("../assets/materialsymbolsarrowforwardiosrounded.png")}
        />
      </View>
      <Image
        style={[
          styles.materialSymbolsarrowForwardIcon1,
          styles.materialIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/materialsymbolsarrowforwardiosrounded1.png")}
      />
      <Image
        style={[
          styles.materialSymbolsarrowBackIoIcon,
          styles.materialIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/materialsymbolsarrowbackiosrounded.png")}
      />
      <View style={[styles.n7, styles.n7Layout]}>
        <Image
          style={[styles.n7Child, styles.n7Layout]}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <Text style={[styles.text29, styles.textTypo5]}>7</Text>
      </View>
      <Text style={[styles.canBeChanged, styles.ellipseIconPosition]}>
        Can be changed be later
      </Text>
      <View style={styles.goalChild1} />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <View style={[styles.goalChild2, styles.goalPosition]} />
      <Text style={[styles.saveGoal, styles.goalPosition]}>Save Goal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  n7ChildPosition: {
    left: 0,
    top: 0,
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  text1Typo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  backIconPosition: {
    top: 40,
    position: "absolute",
  },
  saveTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  goalLayout: {
    width: 155,
    top: 260,
    height: 50,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  textTypo5: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  weeklyTypo: {
    top: 275,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  textTypo4: {
    top: 440,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textPosition3: {
    left: 232,
    color: Color.gray_500,
  },
  textPosition2: {
    left: 272,
    color: Color.gray_500,
  },
  textTypo3: {
    left: 52,
    color: Color.gray_300,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textPosition1: {
    left: 98,
    color: Color.gray_500,
  },
  textPosition: {
    left: 308,
    color: Color.gray_300,
  },
  textTypo2: {
    top: 492,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo1: {
    left: 100,
    color: Color.gray_500,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo: {
    left: 143,
    color: Color.gray_500,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  sunTypo: {
    fontSize: FontSize.size_xs,
    top: 419,
    color: Color.gray_300,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  materialIconLayout: {
    width: 20,
    height: 20,
    top: 384,
    position: "absolute",
    overflow: "hidden",
  },
  n7Layout: {
    height: 28,
    width: 28,
    position: "absolute",
  },
  ellipseIconPosition: {
    top: 608,
    position: "absolute",
  },
  goalPosition: {
    top: 664,
    height: 50,
    width: 320,
    left: 20,
    position: "absolute",
  },
  batteryFullIcon: {
    top: 6,
    left: 309,
    width: 17,
    height: 17,
    position: "absolute",
    overflow: "hidden",
  },
  wifiIcon: {
    top: 2,
    left: 25,
    height: 13,
    width: 13,
    position: "absolute",
    overflow: "hidden",
  },
  signalIcon: {
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    left: 147,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: 11,
    color: Color.black,
    top: 8,
    position: "absolute",
  },
  text1: {
    left: 276,
    textAlign: "left",
    color: Color.black,
    fontSize: 11,
    top: 8,
  },
  bluetoothBIcon: {
    left: 260,
    top: 8,
    height: 13,
    width: 13,
    position: "absolute",
    overflow: "hidden",
  },
  nav: {
    top: 9,
    left: 18,
    width: 326,
    height: 23,
    position: "absolute",
  },
  backIcon: {
    left: 13,
    borderRadius: Border.br_5xs,
    width: 41,
    height: 40,
  },
  setAGoal: {
    left: 118,
    fontSize: FontSize.size_7xl,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  goalAmount: {
    top: 106,
    left: 20,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  selectSaveType: {
    top: 218,
    left: 20,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  setTimeline: {
    top: 328,
    left: 20,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  goalChild: {
    top: 150,
    height: 50,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    width: 320,
    left: 20,
    position: "absolute",
    backgroundColor: Color.white,
  },
  goalItem: {
    left: 20,
    backgroundColor: Color.white,
  },
  goalInner: {
    left: 185,
    backgroundColor: Color.darkslategray,
  },
  typeAmount: {
    top: 165,
    left: 37,
    color: Color.gray_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  weekly: {
    left: 68,
    color: Color.gray_200,
  },
  monthly: {
    left: 229,
    color: Color.white,
  },
  rectangleView: {
    top: 378,
    borderRadius: 7,
    backgroundColor: "#f5f5f5",
    height: 209,
    width: 320,
    left: 20,
    position: "absolute",
  },
  text2: {
    left: 189,
    color: Color.gray_500,
  },
  text3: {
    top: 440,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text4: {
    top: 440,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text5: {
    color: Color.gray_300,
    left: 307,
  },
  text6: {
    top: 466,
  },
  text7: {
    top: 466,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text8: {
    left: 186,
    top: 466,
    color: Color.gray_500,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text9: {
    left: 231,
    top: 466,
    color: Color.gray_500,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text10: {
    top: 466,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text11: {
    top: 466,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text12: {
    left: 308,
    color: Color.gray_300,
  },
  text13: {
    left: 272,
    color: Color.gray_500,
  },
  text14: {
    left: 232,
    color: Color.gray_500,
  },
  text15: {
    left: 187,
    color: Color.gray_500,
  },
  text16: {
    left: 142,
    color: Color.gray_500,
  },
  text17: {
    left: 98,
    color: Color.gray_500,
  },
  text18: {
    left: 50,
    color: Color.gray_300,
  },
  text19: {
    top: 520,
  },
  text20: {
    left: 51,
    top: 547,
    color: Color.gray_300,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text21: {
    top: 548,
  },
  text22: {
    top: 547,
  },
  text23: {
    top: 520,
  },
  text24: {
    top: 520,
  },
  text25: {
    left: 188,
    top: 520,
    color: Color.gray_500,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text26: {
    left: 233,
    top: 520,
    color: Color.gray_500,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text27: {
    top: 520,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text28: {
    left: 311,
    top: 520,
    color: Color.gray_300,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  sun: {
    left: 41,
    fontSize: FontSize.size_xs,
    top: 419,
  },
  mon: {
    left: 84,
    fontSize: FontSize.size_xs,
    top: 419,
  },
  tue: {
    left: 132,
    fontSize: FontSize.size_xs,
    top: 419,
  },
  wed: {
    left: 173,
    fontSize: FontSize.size_xs,
    top: 419,
  },
  thu: {
    left: 221,
    fontSize: FontSize.size_xs,
    top: 419,
  },
  fri: {
    left: 264,
    fontSize: FontSize.size_xs,
    top: 419,
  },
  sat: {
    left: 301,
    fontSize: FontSize.size_xs,
    top: 419,
  },
  february2023: {
    color: Color.darkslategray,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  materialSymbolsarrowForwardIcon: {
    width: 14,
    height: 14,
    marginLeft: 6,
    overflow: "hidden",
  },
  feb: {
    width: 138,
    flexDirection: "row",
    alignItems: "center",
    height: 20,
    top: 384,
    left: 41,
    position: "absolute",
  },
  materialSymbolsarrowForwardIcon1: {
    left: 307,
  },
  materialSymbolsarrowBackIoIcon: {
    left: 288,
  },
  n7Child: {
    left: 0,
    top: 0,
  },
  text29: {
    top: 4,
    left: 9,
    color: Color.white,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  n7: {
    top: 463,
    left: 136,
  },
  canBeChanged: {
    fontSize: FontSize.size_mini,
    left: 20,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  goalChild1: {
    top: 606,
    left: 297,
    backgroundColor: "#6ad64c",
    width: 43,
    height: 22,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  ellipseIcon: {
    left: 318,
    width: 18,
    height: 18,
  },
  goalChild2: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.darkslategray,
  },
  saveGoal: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: Color.white,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  goal: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
    borderRadius: Border.br_11xl,
  },
});

export default Goal;
