import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbCard } from '../src/componentes/AbCard';

export default {
  title: 'componentes/AbCard',
  component: AbCard,
} as ComponentMeta<typeof AbCard>;

const Template: ComponentStory<typeof AbCard> = () => <AbCard />;

export const Primario = Template.bind({});
