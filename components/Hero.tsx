// import Resume from '../assets/macantan.panfilo.pdf';
import me from '../assets/me.png';
import Image from 'next/image';
import HeroAvatar from './Avatar';
import Link from 'next/link';
import { Button } from './ui/button';
import SectionHeading from './SectionHeading';
import { Spotlight } from './ui/Spotlight';
import { GridBackgroundDemo } from './Gridbackground';

const Hero = () => {
	return (
		<div className={`flex justify-center items-center`} id="hero">
			<Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

			<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 place-items-center lg:gap-20 lg:pt-0">
				{/* Avatar */}

				<div className="order-1 lg:order-2">
					<div className="flex justify-center items-center flex-col space-y-4">
						<h3
							className={`text-center text-xl lg:text-2xl lg:font-medium
							
						`}
						>
							I&apos;m Panfilo!
						</h3>

						<SectionHeading text="{ Frontend React Developer }" />
						<p className={`text-base text-center text-slate-500 dark:text-gray-500`}>Frontend developer crafting captivating websites with frontend tools to deliver seamless user experiences and engaging interfaces.</p>
					</div>

					<div className="flex justify-center items-center gap-2 mt-6">
						<Button asChild>
							<Link href={''} download className="shadow-sm text-sm font-medium px-5 py-2 rounded-sm  flex justify-center items-center">
								Download CV
							</Link>
						</Button>

						<Button
							asChild
							variant="ghost"
							className={`
								 border text-sm font-medium   py-2 
								 px-5 rounded-sm flex justify-center items-center`}
						>
							<Link href="/contact">Hire Me</Link>
						</Button>
					</div>
				</div>
				<HeroAvatar />
			</div>
		</div>
	);
};

export default Hero;
