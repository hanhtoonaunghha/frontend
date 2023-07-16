export default function CustomButton() {
  const handler = () => {
    console.log('on click');
  };
  return (
    <div>
      Custom Button
      <button onClick={handler} type='button'>
        Click Me
      </button>
    </div>
  );
}
