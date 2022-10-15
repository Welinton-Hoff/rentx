import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { SectionsField } from "./SectionsField";

import {
  Photo,
  Header,
  Content,
  Container,
  HeaderTop,
  LogoutIcon,
  OptionTitle,
  HeaderTitle,
  OptionButton,
  LogoutButton,
  EditPhotoIcon,
  ContentHeader,
  PhotoContainer,
  EditPhotoButton,
  HeaderBackButton,
} from "./styles";

export type OptionSchema = "dataEdit" | "passwordEdit";

export function Profile() {
  const [option, setOption] = useState<OptionSchema>("dataEdit");

  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleSignOut() {}

  function handleOptionChange(optionSelected: OptionSchema) {
    setOption(optionSelected);
  }

  return (
    <KeyboardAvoidingView enabled behavior="position">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <HeaderTop>
              <HeaderBackButton onPress={handleBack} />
              <HeaderTitle>Editar Perfil</HeaderTitle>

              <LogoutButton onPress={handleSignOut}>
                <LogoutIcon />
              </LogoutButton>
            </HeaderTop>

            <PhotoContainer>
              <Photo />

              <EditPhotoButton>
                <EditPhotoIcon />
              </EditPhotoButton>
            </PhotoContainer>
          </Header>

          <Content style={{ marginBottom: useBottomTabBarHeight() }}>
            <ContentHeader>
              <OptionButton
                active={option === "dataEdit"}
                onPress={() => handleOptionChange("dataEdit")}
              >
                <OptionTitle active={option === "dataEdit"}>Dados</OptionTitle>
              </OptionButton>

              <OptionButton
                active={option === "passwordEdit"}
                onPress={() => handleOptionChange("passwordEdit")}
              >
                <OptionTitle active={option === "passwordEdit"}>
                  Trocar senha
                </OptionTitle>
              </OptionButton>
            </ContentHeader>

            <SectionsField optionsSelected={option} />
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
