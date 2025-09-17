"use client"
import { useSearchParams, useRouter } from 'next/navigation';
import { memo } from 'react';

const ButtonView = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleClick = () => {
        const currentLimit = Number(searchParams.get("limit"));
        const newLimit = currentLimit > 0 ? "4" : "0";
        const params = new URLSearchParams(searchParams.toString());
        params.set("limit", newLimit);
        router.push(`?${params.toString()}`);
    };

    return (
        <div className="w-full flex justify-center mb-[64px]">
            <button
                className='bg-white text-black py-[16px] px-[80px] rounded-[62px] mb-[64px] border border-black/[0.1] duration-300 hover:bg-[#f7f7f7] active:scale-[0.97]'
                onClick={handleClick}
            >
                {Number(searchParams.get("limit")) > 0 ? "Show Less" : "Show All"}
            </button>
        </div>
    );
};

export default memo(ButtonView);