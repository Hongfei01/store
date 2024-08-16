import { Form, useLoaderData, Link } from 'react-router-dom';

import { Button } from './ui/button';
import { ProductsResponseWithParams } from '@/utils';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';
function Filters() {
  const { meta, params } = useLoaderData() as ProductsResponseWithParams;
  const { search, category, company, order, price, shipping } = params;
  return (
    <Form className=' border grid gap-x-4 gap-y-4 px-8 py-4 rounded-md sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      {/* search */}
      <FormInput
        type='text'
        name='search'
        label='search product'
        defaultValue={search}
      />

      {/* category */}
      <FormSelect
        name='category'
        options={meta.categories}
        defaultValue={category}
        label={'select category'}
      />

      {/* company */}
      <FormSelect
        name='company'
        options={meta.companies}
        defaultValue={company}
        label={'select company'}
      />

      {/* orderBy */}
      <FormSelect
        name='order'
        options={['a-z', 'z-a', 'high', 'low']}
        defaultValue={order}
        label={'select category'}
      />

      {/* price */}
      <FormRange name='price' label='price' defaultValue={price} />

      {/* shipping */}
      <FormCheckbox
        name='shipping'
        label='free shipping'
        defaultValue={shipping}
      />
      <Button type='submit' size='sm' className='self-end mb-2'>
        search
      </Button>
      <Button
        type='button'
        asChild
        size='sm'
        variant='outline'
        className='self-end mb-2'
      >
        <Link to='/products'>reset</Link>
      </Button>
    </Form>
  );
}
export default Filters;
