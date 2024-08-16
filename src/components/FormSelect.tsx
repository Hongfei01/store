import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Label } from '@/components/ui/label';

type FormSelectProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  options: string[];
};

function FormSelect({ name, label, defaultValue, options }: FormSelectProps) {
  return (
    <div className='mb-2'>
      <Label className='capitalize'>{label || name}</Label>
      <Select defaultValue={defaultValue || options[0]} name={name}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((item) => {
            return (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
export default FormSelect;
