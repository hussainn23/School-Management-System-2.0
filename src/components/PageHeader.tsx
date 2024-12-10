interface PageHeaderProps {
  title: string;
  subtitle?: string;
  leftContent?: React.ReactNode; 
  rightButtons?: React.ReactNode; 
  centerContent?: React.ReactNode; 
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  leftContent,
  rightButtons,
  centerContent,
}) => {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-600 dark:text-gray-400 text-xs">
              {subtitle}
            </p>
          )}
          {leftContent && <div className="mt-2">{leftContent}</div>}
        </div>
        <div className="flex items-center gap-2">{rightButtons}</div>
      </div>
      {centerContent && <div className="mt-4">{centerContent}</div>}
    </div>
  );
};
