import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const FinanceSection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <View style={[styles.homeParent, styles.parentPosition]}>
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Image
          style={[styles.materialSymbolshomeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/materialsymbolshome2.png")}
        />
      </View>
      <Pressable
        style={[styles.goalsParent, styles.parentPosition]}
        onPress={() => navigation.navigate("Goal")}
      >
        <Text style={[styles.goals, styles.homeTypo]}>Goals</Text>
        <Image
          style={[styles.materialSymbolsaccountBalanIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/materialsymbolsaccountbalancewallet2.png")}
        />
      </Pressable>
      <Pressable style={[styles.profileParent, styles.parentPosition]}>
        <Text style={[styles.goals, styles.homeTypo]}>Profile</Text>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/materialsymbolsperson1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.financeParent, styles.parentPosition]}
        onPress={() => navigation.navigate("Finance")}
      >
        <Text style={[styles.goals, styles.homeTypo]}>Finance</Text>
        <Image
          style={[styles.carbonfinanceIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/carbonfinance2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    height: 45,
    top: 6,
    position: "absolute",
  },
  homeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    top: 30,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    overflow: "hidden",
    height: 30,
    width: 30,
    top: 0,
    position: "absolute",
  },
  groupChild: {
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
    left: 0,
    top: 0,
    height: 54,
    width: 336,
    position: "absolute",
  },
  home: {
    color: Color.aquamarine_100,
  },
  materialSymbolshomeIcon: {
    left: 4,
  },
  homeParent: {
    left: 22,
    width: 38,
  },
  goals: {
    color: Color.gray_400,
  },
  materialSymbolsaccountBalanIcon: {
    left: 0,
  },
  goalsParent: {
    left: 105,
    width: 34,
  },
  groupItem: {
    left: 5,
    height: 30,
    width: 30,
    top: 0,
    position: "absolute",
  },
  profileParent: {
    left: 274,
    width: 41,
  },
  carbonfinanceIcon: {
    left: 10,
  },
  financeParent: {
    left: 184,
    width: 50,
  },
  rectangleParent: {
    top: 736,
    left: 11,
    height: 54,
    width: 336,
    position: "absolute",
  },
});

export default FinanceSection;
