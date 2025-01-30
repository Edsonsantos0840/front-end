import Link from 'next/link';
import { GrView } from 'react-icons/gr';

// ...
 
export function BtnView({url }: { url: string }) {
  return (
    <Link
      href={url}
      className="rounded-md hover:scale-110"
    >
      <GrView size={20} />
    </Link>
  );
}