import clsx from 'clsx';
import { icons } from '../lib/icons';

export function Icon({
  name,
  size,
  color,
  strokeLinecap,
  strokeLinejoin,
  strokeWidth,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  name: string;
  size?: string;
  color?: string;
}) {
  if (!icons[name]) {
    return null;
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      dangerouslySetInnerHTML={{ __html: icons[name].svg }}
      {...props}
      className={clsx(
        'w-[var(--icon-size,24px)] h-[var(--icon-size,24px)] [stroke-width:var(--icon-stroke-width,2px)] [stroke-linecap:var(--icon-stroke-linecap,round)] [stroke-linejoin:var(--icon-stroke-linejoin,round)] stroke-[var(--icon-color,currentColor)]',
        props.className,
      )}
      style={{
        stroke: color,
        width: size,
        height: size,
        strokeLinecap,
        strokeLinejoin,
        strokeWidth,
        ...props.style,
      }}
    />
  );
}
