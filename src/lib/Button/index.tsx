import { FunctionComponent } from 'react';
import Button, { ButtonProps } from './Button';
import LinkButton from './LinkButton';

interface CompoundButtonProps extends FunctionComponent<ButtonProps> {
  Link: typeof LinkButton;
}

const CompoundButton = Button as CompoundButtonProps;

CompoundButton.Link = LinkButton;

export default CompoundButton;
