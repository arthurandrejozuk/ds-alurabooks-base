import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbCampoQuantidade } from '../src/componentes/AbCampoQuantidade';

export default {
  title: 'componentes/AbCampoQuantidade',
  component: AbCampoQuantidade,
} as ComponentMeta<typeof AbCampoQuantidade>;

const Template: ComponentStory<typeof AbCampoQuantidade> = () => (
  <AbCampoQuantidade />
);

export const Default = Template.bind({});
