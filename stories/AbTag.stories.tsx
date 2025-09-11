import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbTag } from '../src/componentes/AbTag';

export default {
  title: 'componentes/AbTag',
  component: AbTag,
} as ComponentMeta<typeof AbTag>;

const Template: ComponentStory<typeof AbTag> = () => <AbTag />;

export const Primario = Template.bind({});
