import React from "react";

const AddButton = () => {
  return (
    <button
      type="button"
      className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <PlusIconMini className="h-5 w-5" aria-hidden="true" />
    </button>
  );
};

export default AddButton;
