"use client";

import { useRouter } from "next/navigation";

interface ListItemsProps {
    image: string;
    name: string;
    href: string;
}

const ListItems: React.FC<ListItemsProps> = ({image, name, href}) => {
    
    const router = useRouter();
    
    const onClick = () => {
        //add auth before push
        router.push(href);
    }

  return (
    <button className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
        
    </button>
  )
}

export default ListItems