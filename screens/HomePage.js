import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import FinanceSection from "../components/FinanceSection";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HomePage = () => {
  return (
    <View style={styles.homePage}>
      <View style={styles.nav}>
        <Image
          style={styles.batteryFullIcon}
          contentFit="cover"
          source={require("../assets/batteryfull1.png")}
        />
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi1.png")}
        />
        <Image
          style={[styles.signalIcon, styles.signalIconPosition]}
          contentFit="cover"
          source={require("../assets/signal1.png")}
        />
        <Text style={[styles.text, styles.selectFlexBox]}>14:18</Text>
        <Text style={styles.text1}>100%</Text>
        <Image
          style={styles.bluetoothBIcon}
          contentFit="cover"
          source={require("../assets/bluetoothb1.png")}
        />
      </View>
      <Image
        style={styles.homePageChild}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={styles.homePageItem}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={styles.homePageInner}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Text
        style={[styles.selectGoalThat, styles.forYouTypo1]}
      >{`Select goal that you
want to achieve`}</Text>
      <Text style={[styles.selectACategory, styles.selectFlexBox]}>
        select a category from the list below
      </Text>
      <View style={[styles.rectangleView, styles.signalIconPosition]} />
      <Text style={[styles.mostCommon, styles.forYouTypo]}>Most common</Text>
      <Text style={[styles.trendingGoals, styles.forYouTypo]}>
        Trending Goals
      </Text>
      <Text style={[styles.forYou, styles.forYouTypo]}>For you</Text>
      <View style={[styles.homePageChild1, styles.homeChildLayout]} />
      <View style={[styles.homePageChild2, styles.homeChildLayout]} />
      <Text style={[styles.property, styles.propertyTypo]}>Property</Text>
      <Text style={[styles.motorVehicle, styles.propertyTypo]}>
        Motor Vehicle
      </Text>
      <View style={[styles.homePageChild3, styles.homeChildLayout]} />
      <Image
        style={[styles.clipart7675121Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/clipart767512-1.png")}
      />
      <Image
        style={[styles.clipart12717691Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/clipart1271769-1.png")}
      />
      <Image
        style={[styles.clipart34031Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/clipart3403-1.png")}
      />
      <Text style={[styles.travelling, styles.forYouTypo]}>Travelling</Text>
      <View style={[styles.trend1, styles.trendPosition]}>
        <Text style={[styles.gadgets, styles.homeTypo]}>Gadgets</Text>
        <Text style={[styles.work, styles.workTypo]}>Work</Text>
        <View style={[styles.trend11, styles.childLayout]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/pngitem-1452743-1.png")}
          />
        </View>
      </View>
      <View style={[styles.trend2, styles.trendPosition]}>
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Text style={[styles.smartHome, styles.workTypo]}>Smart home</Text>
        <View style={[styles.trend2Child, styles.childLayout]} />
        <Image
          style={styles.pngwing1Icon}
          contentFit="cover"
          source={require("../assets/pngwing-1.png")}
        />
      </View>
      <View style={[styles.f1, styles.f1Position]}>
        <Text style={[styles.hiking, styles.hikingTypo]}>Hiking</Text>
        <Text style={[styles.ladakah, styles.schoolTypo]}>Ladakah</Text>
        <View style={[styles.f1Child, styles.childLayout]} />
        <Image
          style={styles.lovepikCom611370159AutumnAIcon}
          contentFit="cover"
          source={require("../assets/lovepik-com611370159autumn-ascends-hiking-men-and-women-cartoon-1.png")}
        />
      </View>
      <View style={[styles.f2, styles.f1Position]}>
        <Text style={[styles.education, styles.hikingTypo]}>Education</Text>
        <Text style={[styles.school, styles.schoolTypo]}>School</Text>
        <View style={[styles.f2Child, styles.childLayout]} />
        <Image
          style={[styles.clipart254731Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/clipart25473-1.png")}
        />
      </View>
      <FinanceSection />
    </View>
  );
};

const styles = StyleSheet.create({
  signalIconPosition: {
    left: 0,
    position: "absolute",
  },
  selectFlexBox: {
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  forYouTypo1: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  forYouTypo: {
    color: Color.black,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  homeChildLayout: {
    height: 151,
    width: 136,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  propertyTypo: {
    top: 420,
    color: Color.black,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  iconLayout1: {
    width: 100,
    position: "absolute",
  },
  trendPosition: {
    height: 74,
    top: 522,
    position: "absolute",
  },
  homeTypo: {
    color: Color.aquamarine_100,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    top: 9,
    position: "absolute",
  },
  workTypo: {
    color: Color.gray_100,
    fontSize: FontSize.size_smi,
    top: 37,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  childLayout: {
    width: 83,
    borderRadius: Border.br_3xs,
    height: 74,
    left: 0,
    top: 0,
    position: "absolute",
  },
  f1Position: {
    top: 651,
    height: 74,
    position: "absolute",
  },
  hikingTypo: {
    top: 11,
    color: Color.aquamarine_100,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  schoolTypo: {
    top: 42,
    color: Color.gray_100,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 50,
    width: 60,
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
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  text: {
    left: 147,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: 11,
    textAlign: "left",
    color: Color.white,
    top: 8,
  },
  text1: {
    left: 276,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.white,
    fontSize: 11,
    top: 8,
    position: "absolute",
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
    width: 326,
    height: 23,
    left: 18,
    top: 9,
    position: "absolute",
  },
  homePageChild: {
    top: 70,
    left: 252,
    width: 150,
    height: 150,
    position: "absolute",
  },
  homePageItem: {
    top: 88,
    left: 269,
    width: 115,
    height: 115,
    position: "absolute",
  },
  homePageInner: {
    top: 105,
    left: 291,
    width: 80,
    height: 80,
    position: "absolute",
  },
  selectGoalThat: {
    top: 137,
    left: 19,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  selectACategory: {
    top: 203,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratRegular,
    left: 18,
  },
  rectangleView: {
    top: 238,
    backgroundColor: Color.white,
    width: 360,
    height: 562,
    borderRadius: Border.br_11xl,
  },
  mostCommon: {
    top: 263,
    left: 20,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  trendingGoals: {
    top: 489,
    left: 20,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  forYou: {
    top: 617,
    left: 20,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  homePageChild1: {
    backgroundColor: "#ef94a4",
    top: 304,
    height: 151,
    width: 136,
    borderRadius: Border.br_mini,
    left: 20,
  },
  homePageChild2: {
    left: 167,
    backgroundColor: "#a4bff9",
    top: 304,
    height: 151,
    width: 136,
    borderRadius: Border.br_mini,
  },
  property: {
    left: 52,
  },
  motorVehicle: {
    left: 178,
  },
  homePageChild3: {
    top: 303,
    left: 315,
    backgroundColor: "#c595f9",
  },
  clipart7675121Icon: {
    top: 333,
    left: 40,
    height: 73,
  },
  clipart12717691Icon: {
    top: 348,
    height: 61,
    left: 184,
  },
  clipart34031Icon: {
    top: 343,
    left: 327,
    height: 71,
  },
  travelling: {
    top: 422,
    left: 330,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  gadgets: {
    left: 89,
  },
  work: {
    left: 89,
  },
  trend11: {
    backgroundColor: "#f5c395",
    paddingHorizontal: 10,
    paddingVertical: 0,
    justifyContent: "center",
  },
  trend1: {
    width: 154,
    left: 20,
  },
  home: {
    left: 91,
  },
  smartHome: {
    left: 90,
  },
  trend2Child: {
    backgroundColor: "#fce79e",
  },
  pngwing1Icon: {
    top: 19,
    left: 7,
    width: 70,
    height: 51,
    position: "absolute",
  },
  trend2: {
    width: 173,
    left: 184,
  },
  hiking: {
    left: 89,
  },
  ladakah: {
    left: 90,
  },
  f1Child: {
    backgroundColor: "#f2acac",
  },
  lovepikCom611370159AutumnAIcon: {
    top: 7,
    left: 9,
    height: 60,
    width: 60,
    position: "absolute",
  },
  f1: {
    width: 156,
    left: 20,
  },
  education: {
    left: 91,
  },
  school: {
    left: 91,
  },
  f2Child: {
    backgroundColor: "#cde5b7",
  },
  clipart254731Icon: {
    top: 12,
    left: 16,
    position: "absolute",
  },
  f2: {
    width: 170,
    left: 184,
  },
  homePage: {
    backgroundColor: Color.darkslategray,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default HomePage;
