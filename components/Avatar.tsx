import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const HeroAvatar = () => {
	return (
		<Avatar className="h-32 w-32">
			<AvatarImage src="https://github.com/shadcn.png" draggable="false" />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	);
};

export default HeroAvatar;
