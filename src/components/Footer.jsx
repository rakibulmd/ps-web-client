import React from "react";

export default function Footer() {
  return (
    <div className="m-5">
      <h2 className="mb-4 text-2xl text-green-700 font-bold">Change theme</h2>
      <div className="flex gap-4 flex-wrap">
        <button
          type="button"
          data-act-class="shadow-outline"
          data-set-theme="winter"
          className="btn btn-primary"
        >
          Default
        </button>
        <button
          type="button"
          data-act-class="shadow-outline"
          data-set-theme="dark"
          className="btn btn-primary"
        >
          Dark
        </button>
        <button
          type="button"
          data-act-class="shadow-outline"
          data-set-theme="light"
          className="btn btn-primary"
        >
          Light
        </button>
        <button
          type="button"
          data-act-class="shadow-outline"
          data-set-theme="emerald"
          className="btn btn-primary"
        >
          Emerald
        </button>
      </div>
    </div>
  );
}
