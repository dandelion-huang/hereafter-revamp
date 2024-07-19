import { cn } from '@/utils/misc';

const Clock = () => {
  const handClasses = 'transform-style-3d absolute left-0 h-[25px] origin-left';

  return (
    <div className="perspective-[400vw] transform-style-3d">
      <div className="relative flex origin-center animate-clock-face-intro items-center justify-center transform-style-3d">
        <div className="absolute size-[1800px] rounded-full border-[10px] border-secondary/50 rotate-x-90 before:absolute before:size-[1785px] before:rounded-full before:border-[10px] before:border-accent-blue after:absolute after:size-[1815px] after:rounded-full after:border-[10px] after:border-accent-blue/50 sm:size-[2400px] sm:before:size-[2380px] sm:after:size-[2420px]" />
        <div
          className={cn(
            handClasses,
            'w-[525px] animate-[clock-hand_15s_linear_infinite] bg-[#6beff4] sm:w-[700px]'
          )}
        />
        <div
          className={cn(
            handClasses,
            'w-[675px] animate-[clock-hand_10s_linear_infinite] bg-action sm:w-[900px]'
          )}
        />
        <div
          className={cn(
            handClasses,
            'w-[825px] animate-[clock-hand_5s_linear_infinite] bg-highlight sm:w-[1100px]'
          )}
        />
      </div>
    </div>
  );
};

export { Clock };
