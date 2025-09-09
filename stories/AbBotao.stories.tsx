import React from 'react';
import { AbBotao } from '../src/componentes/AbBotao';
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Informações do componente
export default {
  title: 'Componentes/AbBotao',
  component: AbBotao,
} as ComponentMeta<typeof AbBotao>;

//Template base para criação do componente no Storybooks
const Template: ComponentStory<typeof AbBotao> = () => <AbBotao />;

// Cria um bind vazio
export const Primario = Template.bind({});
