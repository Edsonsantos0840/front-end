import { ReactNode } from "react";

export default function ContainerDashboard({children}: {children: ReactNode}) {
  return (
    <div className="max-w-[1000px]">
        {children}
    </div>
  )
}
