import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const heroImages: string[] = [hero1, hero2, hero3, hero4];
function HeroCarousel() {
  return (
    <div className='hidden lg:block'>
      <Carousel>
        <CarouselContent>
          {heroImages.map((hero, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className='p-2'>
                    <img src={hero} className='w-full object-cover h-[24rem]' />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
export default HeroCarousel;
