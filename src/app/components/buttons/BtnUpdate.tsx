import Link from 'next/link';
import { AiFillEdit } from 'react-icons/ai';
 
// ...
 
export function BtnUpdate({url }: { url: string }) {
  return (
    <Link
      href={url}
      className="rounded-md hover:scale-110"
    >
      <AiFillEdit size={20} />
    </Link>
  );
}