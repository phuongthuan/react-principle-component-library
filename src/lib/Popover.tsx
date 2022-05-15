import * as PopoverPrimitive from '@radix-ui/react-popover';
import { ReactElement } from 'react';

interface MyPopoverProps {
  title?: string;
  content: ReactElement;
  children: JSX.Element | JSX.Element[] | string | string[];
  side?: 'top' | 'right' | 'bottom' | 'left';
}

const MyPopover = ({
  title = 'Default Title',
  content,
  children,
  side = 'bottom'
}: MyPopoverProps) => {
  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger>{children}</PopoverPrimitive.Trigger>
      <PopoverPrimitive.Anchor className='fill-white' />
      <PopoverPrimitive.Content
        sideOffset={4}
        side={side}
        className="bg-indigo-100 rounded p-4 shadow-md"
      >
        <p className="my-2 text-sm font-semibold">{title}</p>
        <div>{content}</div>
        <PopoverPrimitive.Arrow className="fill-indigo-100 w-4 h-2" />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Root>
  );
};

export default MyPopover;
