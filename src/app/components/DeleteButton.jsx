"use client";

export default function DeleteButton({ handleDelete, reviewId }) {
  return (
    <div className="mt-4 flex justify-end">
      <button
        onClick={() => {
          handleDelete(reviewId);
        }}
        className="bg-ww-orange font-bold rounded-full py-2 px-4 text-sm shadow-md shadow-gray-400 hover:bg-ww-deep-blue hover:text-white"
      >
        Delete
      </button>
    </div>
  );
}
