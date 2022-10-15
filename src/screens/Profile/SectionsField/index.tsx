import * as Yup from "yup";
import { Alert } from "react-native";
import React, { Fragment, useCallback, useState } from "react";

import { useAuth } from "../../../hooks/Auth";

import { Section } from "./styles";
import { OptionSchema } from "..";

import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

interface SectionsFieldProps {
  userAvatar: string;
  optionsSelected: OptionSchema;
}

export function SectionsField(props: SectionsFieldProps) {
  const { user, userUpdate } = useAuth();
  const { userAvatar, optionsSelected } = props;

  const [name, setName] = useState(user.name);
  const [driverLicense, setDriverLicense] = useState(user.name);

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

      Alert.alert("Perfil atualziado!");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert("Ops!", error.message);
      }

      console.log(error.message);
      Alert.alert("Não foi possível atualizar os seus dados.");
    }
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
      <Button title="Salvar alteraçõpes" onPress={handleProfileUpdate} />
    </Section>
  );
}
