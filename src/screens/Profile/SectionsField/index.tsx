import React from "react";

import { OptionSchema } from "..";
import { useAuth } from "../../../hooks/Auth";
import { Input } from "../../../components/Input";

import { Section } from "./styles";

interface SectionsFieldProps {
  optionsSelected: OptionSchema;
}

export function SectionsField({ optionsSelected }: SectionsFieldProps) {
  const { user } = useAuth();
  const isEditOptionVisible = optionsSelected === "dataEdit";

  if (isEditOptionVisible) {
    return (
      <Section>
        <Input
          icon="user"
          placeholder="Nome"
          autoCorrect={false}
          defaultValue={user.name}
        />

        <Input icon="mail" editable={false} defaultValue={user.email} />

        <Input
          placeholder="CNH"
          icon="credit-card"
          keyboardType="numeric"
          defaultValue={user.driverLicense}
        />
      </Section>
    );
  }

  return (
    <Section>
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
    </Section>
  );
}
