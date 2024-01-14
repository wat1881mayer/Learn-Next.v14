import Hero from '@/components/hero';
import reliablityImg from '../../../public/reliability.jpg';

export default function ReliablityPage() {
  return (
    <Hero
      imgData={reliablityImg}
      imgAlt="welding"
      title="Super high reliablity hosting"
    />
  );
}
