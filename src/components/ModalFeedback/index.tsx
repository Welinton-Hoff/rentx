import React from "react";
import { Button } from "../Button";

import {
  Modal,
  Title,
  Content,
  Description,
  ButtonContainer,
  ModalBackground,
} from "./styles";

interface ModalFeedbackProps {
  title?: string;
  message?: string;
  isVisible: boolean;
  buttonTitle?: string;
  buttonAction: () => void;
  optionButtonTitle?: string;
  optionButtonAction?: () => void;
}

export function ModalFeedback(props: ModalFeedbackProps) {
  const {
    title,
    message,
    isVisible,
    buttonTitle,
    buttonAction,
    optionButtonTitle,
    optionButtonAction,
  } = props;

  return (
    <Modal
      transparent
      visible={isVisible}
      statusBarTranslucent
      animationType="fade"
    >
      <ModalBackground>
        <Content>
          <Title>{title}</Title>
          {!!message && <Description>{message}</Description>}

          <ButtonContainer>
            <Button title={buttonTitle} onPress={buttonAction} />
          </ButtonContainer>
          {!!optionButtonTitle && (
            <Button title={optionButtonTitle} onPress={optionButtonAction} />
          )}
        </Content>
      </ModalBackground>
    </Modal>
  );
}
