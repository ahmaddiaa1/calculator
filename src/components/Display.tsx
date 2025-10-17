export default function Display({ value }: { value: string }) {
  return (
    <div className='text-right mb-8 px-2'>
      <div className='text-6xl font-light text-foreground break-words text-balance font-sans'>
        {value}
      </div>
    </div>
  );
}
