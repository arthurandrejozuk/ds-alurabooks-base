import React from 'react';
import { AbOptionsGroup } from '../src/componentes/AbOptionsGroup';
import { ComponentMeta, ComponentStory } from '@storybook/react';
// Informações do componente
export default {
  title: 'Componentes/AbOptionsGroup',
  component: AbOptionsGroup,
} as ComponentMeta<typeof AbOptionsGroup>;

//Template base para criação do componente no Storybooks
const Template: ComponentStory<typeof AbOptionsGroup> = args => (
  <AbOptionsGroup {...args} />
);

// Cria um bind vazio
export const Default = Template.bind({});

Default.args = {
  opcoes: [
    {
      id: 1,
      titulo: 'E-book',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob',
    },
    {
      id: 2,
      titulo: 'Impresso',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob',
    },
  ],
};
