export type MouseEventProps = {
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | undefined) => void;
  onkeypress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onClickDiv: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
