import { composeStories } from '@storybook/react'
import { render, screen } from '@testing-library/react'

import * as stories from './MyComp.stories'

const { Default } = composeStories(stories)

test('My test', () => {
  render(<Default />)
  screen.getByText(/Path : \/toto/i)
})
