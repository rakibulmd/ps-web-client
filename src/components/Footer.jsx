import React from "react";

export default function Footer() {
  return (
    <div className="mt-auto p-2 bg-neutral">
      <h2 className="mb-1 text-md text-warning font-bold ">Change theme</h2>
      <div className="flex gap-1 flex-wrap">
        <button
          type="button"
          data-act-class="shadow-outline"
          data-set-theme="winter"
          className="btn btn-primary btn-sm"
        >
          Default
        </button>
        <button
          type="button"
          data-act-class="shadow-outline"
          data-set-theme="dark"
          className="btn btn-primary btn-sm"
        >
          Dark
        </button>
        <button
          type="button"
          data-act-class="shadow-outline"
          data-set-theme="light"
          className="btn btn-primary btn-sm"
        >
          Light
        </button>
        <button
          type="button"
          data-act-class="shadow-outline"
          data-set-theme="emerald"
          className="btn btn-primary btn-sm"
        >
          Emerald
        </button>
      </div>
      <p className="py-2 text-white">Copyright 2023 @printing solution</p>
    </div>
  );
}
