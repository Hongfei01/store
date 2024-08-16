import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

type FormCheckboxProps = {
  name: string;
  label: string;
  defaultValue?: string;
};
function FormCheckbox({ name, label, defaultValue }: FormCheckboxProps) {
  const defaultChecked = defaultValue === 'on' ? true : false;
  return (
    <div className='mb-2 flex justify-between self-end '>
      <Label className=' capitalize' htmlFor={name}>
        {label || name}
      </Label>
      <Checkbox defaultChecked={defaultChecked} id={name} name={name} />
    </div>
  );
}
export default FormCheckbox;
