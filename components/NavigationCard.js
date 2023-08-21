import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const NavigationCard = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.frame, styles.frameLayout1]}>
      <View style={[styles.frame1, styles.framePosition2]}>
        <View style={[styles.frame2, styles.frameLayout]}>
          <Pressable
            style={[styles.frame3, styles.frameLayout]}
            onPress={() => navigation.navigate("HomePage")}
          >
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            <Image
              style={[styles.materialSymbolshomeIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/materialsymbolshome.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.frame4, styles.framePosition]}
            onPress={() => navigation.navigate("Goal")}
          >
            <Text style={[styles.goals, styles.homeTypo]}>Goals</Text>
            <Image
              style={[
                styles.materialSymbolsaccountBalanIcon,
                styles.iconLayout,
              ]}
              contentFit="cover"
              source={require("../assets/materialsymbolsaccountbalancewallet.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.frame5, styles.frameLayout]}>
          <Pressable style={[styles.frame6, styles.framePosition]}>
            <Text style={[styles.home, styles.homeTypo]}>Profile</Text>
            <Image
              style={[styles.materialSymbolspersonIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/materialsymbolsperson.png")}
            />
          </Pressable>
          <Pressable style={[styles.frame7, styles.frameLayout]}>
            <Text style={[styles.finance, styles.homeTypo]}>Finance</Text>
            <Image
              style={[styles.carbonfinanceIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/carbonfinance.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout1: {
    overflow: "hidden",
    height: 54,
    position: "absolute",
  },
  framePosition2: {
    top: 0,
    left: 0,
  },
  frameLayout: {
    height: 45,
    overflow: "hidden",
    position: "absolute",
  },
  homeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    top: 30,
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    width: 30,
    top: 0,
    overflow: "hidden",
    position: "absolute",
  },
  framePosition: {
    left: 89,
    height: 45,
    top: 0,
    overflow: "hidden",
    position: "absolute",
  },
  home: {
    color: Color.gray_400,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    top: 30,
    left: 0,
  },
  materialSymbolshomeIcon: {
    left: 4,
  },
  frame3: {
    width: 38,
    top: 0,
    left: 0,
  },
  goals: {
    left: 1,
    color: Color.gray_400,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    top: 30,
  },
  materialSymbolsaccountBalanIcon: {
    left: 0,
  },
  frame4: {
    width: 35,
  },
  frame2: {
    left: 22,
    width: 124,
    top: 6,
    height: 45,
  },
  materialSymbolspersonIcon: {
    left: 6,
  },
  frame6: {
    width: 41,
  },
  finance: {
    color: Color.aquamarine_100,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    top: 30,
    left: 0,
  },
  carbonfinanceIcon: {
    left: 10,
  },
  frame7: {
    width: 50,
    top: 0,
    left: 0,
  },
  frame5: {
    left: 185,
    width: 130,
    top: 6,
    height: 45,
  },
  frame1: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 336,
    overflow: "hidden",
    height: 54,
    position: "absolute",
  },
  frame: {
    top: 641,
    width: 338,
    left: 0,
  },
});

export default NavigationCard;
