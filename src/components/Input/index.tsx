import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";

import { Icon, Field, IconView, InputView, PasswordVisibility } from "./styles";

interface InputProps extends TextInputProps {
  value?: string;
  isPassword?: boolean;
  icon: React.ComponentProps<typeof Feather>["name"];
}

export function Input(props: InputProps) {
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, enablePasswordVisibility] = useState(true);

  const { icon, value, isPassword = false, ...rest } = props;

  function passwordVisibleIcon() {
    return isPasswordVisible ? "eye" : "eye-off";
  }

  function handlePasswordVisibility() {
    enablePasswordVisibility(!isPasswordVisible);
  }

  function handleIsFieldFocused(): void {
    setIsFocused(true);
  }

  function handleFieldOnBlur(): void {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  if (isPassword) {
    return (
      <InputView>
        <IconView>
          <Icon name={icon} isFieldFocused={isFocused || isFilled} />
        </IconView>

        <Field
          {...rest}
          onBlur={handleFieldOnBlur}
          isFieldFocused={isFocused}
          onFocus={handleIsFieldFocused}
          secureTextEntry={isPasswordVisible}
        />

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
        <Icon name={icon} isFieldFocused={isFocused || isFilled} />
      </IconView>

      <Field
        {...rest}
        isFieldFocused={isFocused}
        onBlur={handleFieldOnBlur}
        onFocus={handleIsFieldFocused}
      />
    </InputView>
  );
}
