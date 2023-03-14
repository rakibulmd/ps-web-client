import React from "react";
import { useNavigate } from "react-router";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className="mt-auto p-2 bg-neutral">
      <div className="container mx-auto">
        <div className="py-2">
          <h2 className="mb-1 text-md text-warning font-bold ">Change theme</h2>
          <div className="flex gap-1 flex-wrap">
            <button
              type="button"
              data-act-class="shadow-outline"
              data-set-theme="winter"
              className="btn btn-primary glass btn-sm"
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
        </div>
        <div className="py-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate("/internal/login")}
          >
            Management Login
          </button>
        </div>
        <p className="text-white text-center font-mono border-t ">
          Copyright 2023 @PRINTING SOLUTION
        </p>
      </div>
    </div>
  );
}
