import { images } from "@/assets";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CartButton = () => {
  const totalItems = 10;

  return (
    <TouchableOpacity className="cart-btn" onPress={() => {}}>
      <Image source={images.bag} className="size-5" resizeMode="contain" />
      {totalItems >= 1 && (
        <View className="cart-badge">
          <Text className="small-bold text-white">{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartButton;
