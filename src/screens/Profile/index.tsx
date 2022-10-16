import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { useNetInfo } from "@react-native-community/netinfo";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";

import { useAuth } from "../../hooks/Auth";
import { SectionsField } from "./SectionsField";
import { ModalFeedback } from "../../components/ModalFeedback";

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
  const netInfo = useNetInfo();
  const navigation = useNavigation();
  const { user, signOut } = useAuth();

  const [avatar, setAvatar] = useState(user.avatar);
  const [option, setOption] = useState<OptionSchema>("dataEdit");
  const [isSignOutFeedbackVisible, displaySignOutFeedback] = useState(false);
  const [isPasswordChangeBlockedVisible, displayPasswordChangeBlocked] =
    useState(false);

  function handleBack(): void {
    navigation.goBack();
  }

  function handleOptionChange(optionSelected: OptionSchema): void {
    if (!netInfo.isConnected && optionSelected === "passwordEdit") {
      handleDisplayPasswordChangeBlocked();
    }

    setOption(optionSelected);
  }

  function handleDisplaySignOutFeedback(): void {
    displaySignOutFeedback(!isSignOutFeedbackVisible);
  }

  function handleDisplayPasswordChangeBlocked(): void {
    displayPasswordChangeBlocked(!isPasswordChangeBlockedVisible);
  }

  async function handleSelectAvatar(): Promise<void> {
    const result = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      aspect: [4, 4],
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.cancelled) {
      const { uri } = result as ImageInfo;
      setAvatar(uri);
    }

    return;
  }

  return (
    <KeyboardAvoidingView enabled behavior="position">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <HeaderTop>
              <HeaderBackButton onPress={handleBack} />
              <HeaderTitle>Editar Perfil</HeaderTitle>

              <LogoutButton onPress={handleDisplaySignOutFeedback}>
                <LogoutIcon />
              </LogoutButton>
            </HeaderTop>

            <PhotoContainer>
              {!!avatar && <Photo uri={avatar} />}

              <EditPhotoButton onPress={handleSelectAvatar}>
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

            <SectionsField userAvatar={avatar} optionsSelected={option} />
          </Content>

          <ModalFeedback
            title="Ops!"
            buttonTitle="Continuar"
            isVisible={isPasswordChangeBlockedVisible}
            buttonAction={handleDisplayPasswordChangeBlocked}
            message="Para alterar a senha, conecte-se a Internet."
          />

          <ModalFeedback
            buttonTitle="Sair"
            title="Tem certeza?"
            buttonAction={signOut}
            optionButtonTitle="Cancelar"
            isVisible={isSignOutFeedbackVisible}
            optionButtonAction={handleDisplaySignOutFeedback}
            message="Lembre-se, se você sair, irá precisar de internet para conectar-se novamente."
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
