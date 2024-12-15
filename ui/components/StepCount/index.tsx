import { useShallow } from 'zustand/react/shallow';
import type { ChangeEventHandler } from 'react';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import useColorPicker from '@store/colorPicker';

function StepCount() {
  const { stepCount, updateStepCount } = useColorPicker(
    useShallow((state) => {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const { stepCount, updateStepCount } = state;
      return { stepCount, updateStepCount };
    }),
  );

  const handleStepCount: ChangeEventHandler<HTMLInputElement> = (event) => {
    updateStepCount(+event.currentTarget.value);
  };
  return (
    <div className="w-20 flex flex-col">
      <Label className="px-2 py-1.5 text-sm font-semibold" htmlFor="step-count">
        Steps
      </Label>
      <Input
        id="step-count"
        type="number"
        min={2}
        max={20}
        value={stepCount}
        onChange={handleStepCount}
      />
    </div>
  );
}

export default StepCount;