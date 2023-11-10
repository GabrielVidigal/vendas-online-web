import { Input as InputAnt, InputProps as InputPropsAntd } from 'antd';

import { BoxInput, TitleInput } from './input.styles';

export interface InputProps extends InputPropsAntd {
  title?: string;
  margin?: string;
}

const Input = ({ title, margin, ...props }: InputProps) => {
  return (
    <BoxInput style={{ margin }}>
      {title && <TitleInput>{title}</TitleInput>}
      <InputAnt {...props} />
    </BoxInput>
  );
};

export default Input;
