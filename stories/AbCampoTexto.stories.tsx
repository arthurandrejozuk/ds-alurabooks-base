import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbCampoTexto } from '../src/componentes/AbCampoTexto';
export default {
  title: 'componentes/AbCampoTexto',
  component: AbCampoTexto,
} as ComponentMeta<typeof AbCampoTexto>;

const Template: ComponentStory<typeof AbCampoTexto> = args => (
  <AbCampoTexto {...args} />
);
export const Default = Template.bind({});
