import Image1 from '../assets/images/1.png'
import Image2 from '../assets/images/2.png'
import Image3 from '../assets/images/3.png'
import Image4 from '../assets/images/4.png'
import Image5 from '../assets/images/5.png'
import Image6 from '../assets/images/6.png'
import { GoodsCard } from './GoodsCard'

const goods = [
  {
    image: Image1,
    price: 4_000_000,
    name: 'Leo Messi',
  },
  {
    image: Image2,
    price: 15_000_000,
    name: 'R9',
  },
  {
    image: Image3,
    price: 1_000_000,
    name: 'CR7',
  },
  {
    image: Image4,
    price: 4_000_000,
    name: 'Ronaldinho',
  },
  {
    image: Image5,
    price: 5_000_000,
    name: 'Sheva',
  },
  {
    image: Image6,
    price: 7_000_000,
    name: 'Zidane',
  },
]

export const Gallery = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
      {goods.map((g) => (
        <GoodsCard name={g.name} price={g.price} image={g.image} key={g.name} />
      ))}
    </div>
  )
}
