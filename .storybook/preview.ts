import { RouterContext } from 'next/dist/shared/lib/router-context' // next 13 next 13 (using next/navigation)
import type { Preview } from '@storybook/react'
import { WithNextRouter } from 'storybook-addon-next-router/dist/decorators'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // nextRouter: {
    //   Provider: RouterContext.Provider,
    // },
  },
  decorators: [
    // WithNextRouter
  ],
}

export default preview
