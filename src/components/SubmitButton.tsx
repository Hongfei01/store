import { useNavigation } from 'react-router-dom';
import { ReloadIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';

function SubmitButton({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Button type='submit' className={className}>
      {isSubmitting ? (
        <span className='flex'>
          <ReloadIcon className='mr-2 h-4 w-4 animate-spin' /> submitting
        </span>
      ) : (
        text
      )}
    </Button>
  );
}
export default SubmitButton;
