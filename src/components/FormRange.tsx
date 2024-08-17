import { formatAsDollars } from '@/utils';
import { useState } from 'react';

import { Label } from '@/components/ui/label';
import { Slider } from './ui/slider';

type FormRangeProps = {
  name: string;
  label?: string;
  defaultValue?: string;
};
function FormRange({ name, label, defaultValue }: FormRangeProps) {
  const step = 1000;
  const maxPrice = 100000;
  const defaultPrice = defaultValue ? Number(defaultValue) : maxPrice;
  const [selectPrice, setSelectPrice] = useState(defaultPrice);
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='flex justify-between capitalize mb-2'>
        {label || name} <span>{formatAsDollars(selectPrice)}</span>
      </Label>
      <Slider
        id={name}
        value={[selectPrice]}
        step={step}
        max={maxPrice}
        name={name}
        onValueChange={(value) => setSelectPrice(value[0])}
      />
    </div>
  );
}
export default FormRange;
