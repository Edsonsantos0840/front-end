import { ReactNode } from "react";

export default function Container({children}: {children: ReactNode}) {
  return (
    <div className=" mx-2 max-w-[1200px] my-4 md:m-auto">
        {children}
    </div>
  )
}
