import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Landing = () => {
  return (
    <LinearGradient
      style={styles.landing}
      locations={[0, 1]}
      colors={["#0ef5bd", "rgba(14, 245, 189, 0)"]}
    >
      <View style={styles.frame}>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame4.png")}
        />
        <LinearGradient
          style={styles.frame1}
          locations={[0, 1]}
          colors={["#0ef5bd", "rgba(14, 245, 189, 0)"]}
        >
          <Text style={styles.easySavingsWith}>{`Easy
Savings
With the
Simplest
Way`}</Text>
        </LinearGradient>
      </View>
      <Text
        style={styles.lremIpsumEgisk}
      >{`Lörem ipsum egisk apade, fäst plusjobb. Laledes hemilogi, nispedologi. Apyheten jujys. Defäras prejurade. `}</Text>
      <Image
        style={styles.frameIcon1}
        contentFit="cover"
        source={require("../assets/frame5.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  frameIcon: {
    position: "relative",
    width: 250,
    height: 180,
    overflow: "hidden",
  },
  easySavingsWith: {
    position: "relative",
    fontSize: 50,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: "#1d2528",
    textAlign: "left",
  },
  frame1: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 241,
    height: 331,
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 2,
    paddingVertical: 0,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginTop: 40,
  },
  frame: {
    width: 250,
    height: 551,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  lremIpsumEgisk: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratRegular,
    color: Color.black,
    textAlign: "left",
    width: 291,
    height: 51,
    marginLeft: 0,
    marginTop: 23,
  },
  frameIcon1: {
    position: "relative",
    top: 0,
    width: 135,
    height: 45,
    overflow: "hidden",
    marginLeft: 92,
    marginTop: 23,
  },
  landing: {
    position: "relative",
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingTop: 74,
    paddingBottom: 33,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
  },
});

export default Landing;
