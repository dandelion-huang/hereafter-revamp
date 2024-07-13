import { cn } from '@/utils/misc';

const Clock = () => {
  const handClasses = 'transform-style-3d absolute left-0 h-[5px] origin-left';

  return (
    <div className="perspective-[400vw] transform-style-3d">
      <div className="relative flex origin-center animate-clock-face-intro items-center justify-center transform-style-3d">
        <div className="absolute size-[360px] rounded-full border-[2px] border-secondary/50 rotate-x-90 before:absolute before:size-[357px] before:rounded-full before:border-[2px] before:border-accent-blue before:content-[''] after:absolute after:size-[363px] after:rounded-full after:border-[2px] after:border-accent-blue/50 after:content-[''] sm:size-[480px] sm:before:size-[476px] sm:after:size-[484px]" />
        <div
          className={cn(
            handClasses,
            'w-[105px] animate-[clock-hand_15s_linear_infinite] bg-[#6beff4] sm:w-[140px]'
          )}
        />
        <div
          className={cn(
            handClasses,
            'w-[135px] animate-[clock-hand_10s_linear_infinite] bg-action sm:w-[180px]'
          )}
        />
        <div
          className={cn(
            handClasses,
            'w-[165px] animate-[clock-hand_5s_linear_infinite] bg-highlight sm:w-[220px]'
          )}
        />
      </div>
    </div>
  );
};

export { Clock };
