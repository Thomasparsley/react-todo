import type { ReactNode } from "react"

interface Props {
  children?: ReactNode;
}

export default function DefaultLayout({ children }: Props) {
  return (
    <div className=":uno: w-screen h-screen bg-zinc-800">
      <div className=":uno: mx-a max-w-3xl p-8">
        {children}
      </div>
    </div>
  )
}