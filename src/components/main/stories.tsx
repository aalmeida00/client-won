import { Meta, Story } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avancado',
    description: 'TypeScript, ReactJS, NextJS, Styled Components'
  }
} as Meta

export const Default: Story = (args) => <Main {...args} />
