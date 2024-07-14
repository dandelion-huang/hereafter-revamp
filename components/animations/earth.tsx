import { cn } from '@/utils/misc';

const Earth = () => {
  const earthClasses = 'absolute rounded-full';

  return (
    <div
      className={cn(
        earthClasses,
        'size-[363px] overflow-hidden bg-[#4fc1e9] -translate-x-1/2 -translate-y-1/2 sm:size-[600px]'
      )}
    >
      <div className="absolute h-full w-[200%] animate-[earth-rotate_8s_linear_infinite]">
        <div
          className={cn(
            earthClasses,
            '-left-[20%] top-3/4 h-[30%] w-1/5 bg-[#a0d468]'
          )}
        />
        <div
          className={cn(
            earthClasses,
            '-left-[10%] top-3/4 h-[15%] w-1/5 bg-[#a0d468]'
          )}
        />
        <div
          className={cn(
            earthClasses,
            'left-0 top-[40%] h-1/5 w-2/5 bg-[#a0d468]'
          )}
        />
        <div
          className={cn(
            earthClasses,
            'left-[30%] top-[10%] h-[10%] w-[45%] bg-[#a0d468]'
          )}
        />
        <div
          className={cn(
            earthClasses,
            'left-[60%] top-[80%] h-[10%] w-[15%] bg-[#a0d468]'
          )}
        />
        <div
          className={cn(
            earthClasses,
            'left-[88%] top-[41%] h-[6%] w-[6%] bg-[#a0d468]'
          )}
        />
        <div
          className={cn(
            earthClasses,
            'left-[90%] top-[30%] h-[13%] w-[13%] bg-[#a0d468]'
          )}
        />
      </div>
      <div className="absolute h-full w-[200%] animate-[earth-rotate_11s_linear_infinite]">
        <div
          className={cn(
            earthClasses,
            '-left-[45%] top-[49%] h-[5%] w-[15%] bg-white'
          )}
        />
        <div
          className={cn(
            earthClasses,
            '-left-[20%] top-[23%] h-[7%] w-1/5 bg-white'
          )}
        />
        <div
          className={cn(
            earthClasses,
            'left-0 top-[93%] h-[5%] w-[15%] bg-white'
          )}
        />
        <div
          className={cn(
            earthClasses,
            'left-[35%] top-[62%] h-[5%] w-[15%] bg-white'
          )}
        />
        <div
          className={cn(
            earthClasses,
            'left-[50%] top-[28%] h-[15%] w-[30%] bg-white'
          )}
        />
        <div
          className={cn(
            earthClasses,
            'left-[55%] top-[23%] h-[10%] w-[15%] bg-white'
          )}
        />
        <div
          className={cn(
            earthClasses,
            'left-[90%] top-[4%] h-[5%] w-[15%] bg-white'
          )}
        />
      </div>
      <div
        className={cn(
          earthClasses,
          '-left-[22%] -top-[15%] z-50 size-[125%] border-[50px] border-black/30 sm:border-[75px]'
        )}
      />
    </div>
  );
};

export { Earth };
