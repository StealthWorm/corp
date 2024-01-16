import { Hero } from "@/components/hero";
import scaleImg from '../../../public/scale.jpg';

export default function Scale() {
  return (
    <Hero
      title='Scale your app to infinity.'
      imgAlt='steel factory'
      imgData={scaleImg}
    />
  )
}
