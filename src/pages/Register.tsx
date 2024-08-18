import { FormInput } from '@/components';
import SubmitButton from '@/components/SubmitButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { customFetch } from '@/utils';
import { AxiosError } from 'axios';
import { ActionFunction, Form, Link, redirect } from 'react-router-dom';
function Register() {
  return (
    <section className='h-screen grid place-items-center'>
      <Card className='w-96 bg-muted'>
        <CardHeader>
          <CardTitle className='text-center'>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method='POST'>
            <FormInput
              type='text'
              name='username'
              label='username'
              defaultValue=''
            />
            <FormInput type='email' name='email' defaultValue='' />
            <FormInput type='password' name='password' defaultValue='' />
            <SubmitButton className='w-full mt-4' text='submit' />
            <p className='text-center mt-4'>
              Already a member?
              <Button type='button' asChild variant={'link'}>
                <Link to={'/login'}>Login</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}

export const action: ActionFunction = async ({
  request,
}): Promise<Response | null> => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const result = await customFetch.post('/auth/local/register', data);
    console.log(result);
    toast({ description: 'registered successfully' });
    return redirect('/login');
  } catch (error) {
    const errMsg =
      error instanceof AxiosError
        ? error.response?.data?.error.message
        : 'Registration failed ';
    toast({ description: errMsg });
  }
  return null;
};
export default Register;
