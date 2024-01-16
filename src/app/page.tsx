import homeImg from '../../public/home.jpg';
import { Hero } from '@/components/hero';

export default function Home() {
  return (
    <Hero
      title='Professional Cloud Hosting'
      imgAlt='car factory'
      imgData={homeImg}
    />
  )
}
