type SelectProductColor = {
  colors: string[];
  productColor: string;
  setProductColor: React.Dispatch<React.SetStateAction<string>>;
};

function SelectProductColor({
  colors,
  productColor,
  setProductColor,
}: SelectProductColor) {
  return (
    <div className='mt-6'>
      <h4 className='text-md font-medium capitalize tracking-wider '>colors</h4>
      <div className='mt-2'>
        {colors.map((color) => {
          return (
            <button
              key={color}
              className={`rounded-full h-6 w-6 mr-2 border-2 ${
                color === productColor && 'border-primary'
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setProductColor(color)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
export default SelectProductColor;
