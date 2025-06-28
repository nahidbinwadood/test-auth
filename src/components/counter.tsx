'use client';
import { decrement, increment } from '@/features/counter/counter-slice';
import { useAppDispatch, useAppSelector } from '@/features/redux-hook';

export default function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.count);

  //   handlers:
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div className="flex  w-full flex-col items-center justify-center p-6 space-y-4 rounded-xl bg-gray-100 dark:bg-gray-800">
      <h2 className="text-2xl font-semibold">Counter: {count}</h2>
      <div className="flex gap-4">
        <button
          disabled={count <= 0}
          onClick={handleDecrement}
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition cursor-pointer"
        >
          Decrement
        </button>
        <button
          onClick={handleIncrement}
          className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition cursor-pointer"
        >
          Increment
        </button>
      </div>
    </div>
  );
}
