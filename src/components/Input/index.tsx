import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";

import { Icon, Field, IconView, InputView, PasswordVisibility } from "./styles";

interface InputProps extends TextInputProps {
  isPassword?: boolean;
  icon: React.ComponentProps<typeof Feather>["name"];
}

export function Input(props: InputProps) {
  const [isPasswordVisible, enablePasswordVisibility] = useState(true);
  const { icon, isPassword = false, ...rest } = props;

  function handlePasswordVisibility() {
    enablePasswordVisibility(!isPasswordVisible);
  }

  function passwordVisibleIcon() {
    return isPasswordVisible ? "eye" : "eye-off";
  }

  if (isPassword) {
    return (
      <InputView>
        <IconView>
          <Icon name={icon} />
        </IconView>

        <Field {...rest} secureTextEntry={isPasswordVisible} />

        <PasswordVisibility onPress={handlePasswordVisibility}>
          <IconView>
            <Icon name={passwordVisibleIcon()} />
          </IconView>
        </PasswordVisibility>
      </InputView>
    );
  }

  return (
    <InputView>
      <IconView>
        <Icon name={icon} />
      </IconView>

      <Field {...rest} />
    </InputView>
  );
}
