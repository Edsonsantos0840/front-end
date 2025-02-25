"use client";

import { ActionStateType } from "@/app/functions/handleSubmit/HandleRegister";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function useMessages(state?: ActionStateType) {
  useEffect(() => {
    if (state?.message?.length) {
      state.message.forEach((error) => toast.error(error));
    }
    if (state?.success) {
      toast.success(state.success);
    }
  }, [state]);

  // Não precisa retornar nada, pois o hook apenas executa os toasts
}

