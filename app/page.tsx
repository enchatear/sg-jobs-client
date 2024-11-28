import { permanentRedirect } from 'next/navigation';

export default function Home() {
  permanentRedirect('/candidate');
  return null;
}
