import { Button } from './components/ui/button';
import { useAppSelector } from './hooks';

function App() {
  const { name } = useAppSelector((state) => state.userState);
  console.log(name);
  return (
    <div>
      <h1 className='text-3xl font-bold'>hello,world</h1>
      <Button
        variant={'destructive'}
        size={'lg'}
        onClick={() => console.log('click me')}
      >
        Click me
      </Button>
    </div>
  );
}
export default App;
