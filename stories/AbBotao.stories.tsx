import React from 'react';
import { AbBotao, AbBotaoProps } from '../src/componentes/AbBotao';
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Informações do componente
export default {
  title: 'Componentes/AbBotao',
  component: AbBotao,
} as ComponentMeta<typeof AbBotao>;

//Template base para criação do componente no Storybooks
const Template: ComponentStory<typeof AbBotao> = args => <AbBotao {...args} />;

// Cria um bind vazio
export const Primario = Template.bind({});
export const Secundario = Template.bind({});

Primario.args = {
  texto: 'Ab Botão primário',
  tipo: 'primario',
} as AbBotaoProps;

Secundario.args = {
  texto: 'Ab Botão secundário',
  tipo: 'secundario',
};
