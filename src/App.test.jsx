/* eslint-disable no-undef */
import { render } from '@testing-library/react'
// import App from './App.js'
import BotPart from './component/bot.js';
import TotPart from './component/top.js';
import BodyPart from './component/body.js';

describe('Renders files', () => {
    it('render spinner', () => {
      const { getByTestId } = render(<TotPart/>);
      const input = getByTestId('top')
      expect(input).toBeTruthy();
    })
})