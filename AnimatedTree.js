import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from "react-native-reanimated";

const AnimatedTree = () => {
	const treeSize = useSharedValue(150);

	const increasetreeSize = () => {
		treeSize.value = withSpring(treeSize.value + 20);
	};

	const treeStyle = useAnimatedStyle(() => {
		return {
			width: withSpring(treeSize.value),
			height: withSpring(treeSize.value),
		};
	});

	return (
		<View style={styles.container}>
			<Animated.Image source={require("./assets/greentree.png")} style={[styles.tree, treeStyle]} />
			<TouchableOpacity activeOpacity={0.8} onPress={increasetreeSize}>
				<Image source={require("./assets/trunk.png")} style={[styles.stump]} />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	tree: {
		width: 100,
		height: 100,
		bottom: -60,
		left: 5,
		objectFit: "contain",
	},
	stump: {
		width: 100,
		height: 200,
		aspectRatio: 1 / 3,
	},
});

export default AnimatedTree;
