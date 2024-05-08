import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React, { FC } from "react";

interface ICustomButtonProps extends TouchableOpacityProps {
  title: string;
  containerStyles?: string;
  isLoading?: boolean;
  textStyles?: string;
}

const CustomButton: FC<ICustomButtonProps> = ({
  title,
  containerStyles,
  isLoading,
  textStyles,
  ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...props}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
