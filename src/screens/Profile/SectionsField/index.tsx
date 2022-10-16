import * as Yup from "yup";
import React, { Fragment, useCallback, useState } from "react";

import { OptionSchema } from "..";
import { useAuth } from "../../../hooks/Auth";

import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { ModalFeedback } from "../../../components/ModalFeedback";

import { Section, ButtonContainer } from "./styles";

interface SectionsFieldProps {
  userAvatar: string;
  optionsSelected: OptionSchema;
}

export function SectionsField(props: SectionsFieldProps) {
  const { user, userUpdate } = useAuth();
  const { userAvatar, optionsSelected } = props;

  const [name, setName] = useState(user.name);
  const [driverLicense, setDriverLicense] = useState(user.name);
  const [modalTitleFeedback, setModalTitleFeedback] = useState("");
  const [modalMessageFeedback, setModalMessageFeedback] = useState("");
  const [isSuccessFeedbackVisible, displaySuccessFeedback] = useState(false);

  const isEditOptionVisible = optionsSelected === "dataEdit";

  async function handleProfileUpdate(): Promise<void> {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Nome é obrigatória"),
        driverLicense: Yup.string().required("CNH é obrigatória"),
      });

      await schema.validate({ name, driverLicense });

      await userUpdate({
        name,
        id: user.id,
        email: user.email,
        token: user.token,
        avatar: userAvatar,
        user_id: user.user_id,
        driver_license: driverLicense,
      });

      setModalMessageFeedback("");
      setModalTitleFeedback("Perfil atualziado!");

      handleDisplaySuccessFeedback();
    } catch (error) {
      let message = "Não foi possível atualizar os seus dados.";

      if (error instanceof Yup.ValidationError) {
        message = error.message;
      }

      setModalTitleFeedback("Ops!");
      setModalMessageFeedback(message);

      console.log(error.message);
      handleDisplaySuccessFeedback();
    }
  }

  function handleDisplaySuccessFeedback(): void {
    displaySuccessFeedback(!isSuccessFeedbackVisible);
  }

  const Fields = useCallback(() => {
    if (isEditOptionVisible) {
      return (
        <Fragment>
          <Input
            icon="user"
            placeholder="Nome"
            autoCorrect={false}
            onChangeText={setName}
            defaultValue={user.name}
          />

          <Input icon="mail" editable={false} defaultValue={user.email} />

          <Input
            placeholder="CNH"
            icon="credit-card"
            keyboardType="numeric"
            onChangeText={setDriverLicense}
            defaultValue={user.driver_license}
          />
        </Fragment>
      );
    }

    return (
      <Fragment>
        <Input
          isPassword
          icon="lock"
          autoCorrect={false}
          placeholder="Senha atual"
        />

        <Input
          isPassword
          icon="mail"
          autoCorrect={false}
          placeholder="Nova Senha"
        />

        <Input
          isPassword
          icon="mail"
          autoCorrect={false}
          placeholder="Repetir Senha"
        />
      </Fragment>
    );
  }, [isEditOptionVisible]);

  return (
    <Section>
      <Fields />

      <ButtonContainer>
        <Button title="Salvar alteraçõpes" onPress={handleProfileUpdate} />
      </ButtonContainer>

      <ModalFeedback
        buttonTitle="Continuar"
        title={modalTitleFeedback}
        message={modalMessageFeedback}
        isVisible={isSuccessFeedbackVisible}
        buttonAction={handleDisplaySuccessFeedback}
      />
    </Section>
  );
}
