import { Hero } from "@/components/hero";
import reliabilityImg from '../../../public/reliability.jpg';

export default function Reliability() {
  return (
    <Hero
      title='Super high reliability hosting'
      imgAlt='welding'
      imgData={reliabilityImg}
    />
  )
}
