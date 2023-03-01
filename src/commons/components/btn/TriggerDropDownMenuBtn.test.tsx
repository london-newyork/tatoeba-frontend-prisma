import { render } from '@testing-library/react';
import { TriggerDropDownMenuBtn } from './TriggerDropDownMenuBtn';

test('snapshot testing', () => {
  const { asFragment } = render(
    <TriggerDropDownMenuBtn
      className=""
      onClick={() => {
        undefined;
      }}
    >
      テキスト
    </TriggerDropDownMenuBtn>
  );
  expect(asFragment()).toMatchSnapshot();
});
