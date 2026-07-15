export const Wordmark = ({ onNavigate }) => {
  return (
    <h1 className='text-[8vw] md:text-[2vw] text-green-500 ml-5 mt-1' onClick={
      () => onNavigate('home')
    }>Curt Labs</h1>
  );
};