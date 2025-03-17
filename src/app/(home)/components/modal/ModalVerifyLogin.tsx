"use client";

import Link from "next/link";

export default function ModalVerifyLogin({
  setIsOpen,
  classEdit,
}: {
  setIsOpen: (isOpen: boolean) => void;
  classEdit: string;
}) {
  return (
    <dialog
      open
      className={`fixed inset-0 ${classEdit} flex items-center justify-center bg-black bg-opacity-50 z-50`}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center relative">
        <h2
          id="modal-title"
          className="text-lg font-semibold mb-4 text-principal"
        >
          Para concluir a ação, é necessário estar logado.
        </h2>

        <div className="flex justify-center gap-4">
          <Link
            href="/login"
            className="bg-principal text-white rounded-lg py-2 px-6 hover:scale-105"
          >
            Login
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-gray-300 text-gray-800 rounded-lg py-2 px-6 hover:scale-105"
            aria-label="Fechar modal"
          >
            Cancelar
          </button>
        </div>
      </div>
    </dialog>
  );
}
