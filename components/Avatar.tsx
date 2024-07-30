import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const HeroAvatar = () => {
	return (
		<Avatar className="h-32 w-32 lg:h-56 lg:w-56 rounded-full">
			<AvatarImage src="/assets/panfilo.jfif" draggable="false" />
			<AvatarFallback>PPM</AvatarFallback>
		</Avatar>
	);
};

export default HeroAvatar;
