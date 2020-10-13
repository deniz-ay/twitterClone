import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const CheckBox = (props) => (

    <TouchableOpacity
      onPress={props.onPress}
      style={{
      
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: "white",
        marginRight: 8,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.status && (
        <View
          style={{
            width: 16,
            height: 16,
            backgroundColor: "white",
            borderRadius: 2,
          }}
        />
      )}
    </TouchableOpacity>

);

export  {CheckBox};