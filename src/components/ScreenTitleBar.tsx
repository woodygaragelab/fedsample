interface ScreenTitleBarProps {
  id: string;
  title: string;
  subtitle?: string;
}

/** 画面タイトルバー（SCR-IDと画面名を表示） */
export default function ScreenTitleBar({
  id,
  title,
  subtitle,
}: ScreenTitleBarProps): JSX.Element {
  return (
    <div className="screen-title-bar">
      <span>
        {id} {title}
      </span>
      {subtitle && <span className="screen-id">{subtitle}</span>}
    </div>
  );
}
