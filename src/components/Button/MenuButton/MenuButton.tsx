import menuIcon from '../../../../public/rhino_soldering.png';
import Image from 'next/image';

interface Props {
  onClick: () => void;
  className: string;
}

export const MenuButton: React.FC<Props> = ({
  onClick,
  className,
  ...restProps
}) => {
  return (
    <button
      style={{
        border: '1px solid black',
        position: 'relative',
        width: '48px',
        height: '48px',
        borderRadius: '3px',
      }}
      onClick={onClick}
      className={className}
      {...restProps}
    >
      <span
        style={{
          position: 'absolute',
          top: '1px',
          left: '8px',
          width: '30px',
          lineHeight: '12px',
          fontSize: '10px',
          fontWeight: '700',
          zIndex: '10',
        }}
      >
        MENU
      </span>
      <div style={{ margin: '3px' }}>
        <Image src={menuIcon} alt="menuIcon" width={40} height={40} />
      </div>
    </button>
  );
};
