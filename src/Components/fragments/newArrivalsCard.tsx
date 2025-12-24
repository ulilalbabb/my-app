'use client'

import { useEffect, useState } from "react";
import { supabase } from "@/src/lib/supabase/init";
import { CiHeart } from "react-icons/ci";
import { ProductType } from "@/src/types/product.type";
import Image from "next/image";
import Button from "../elements/Button/Button";

const NewArrivalsCard = () => {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data, error } = await supabase.from('luminette').select('*');
            if (error) {
                console.log('Error fetching products: ', error);
            }
            if (data) {
                setProducts(data);
            }
        };
        fetchProducts();
    }, []);

    if (products.length === 0) {
        return <p>Loading...</p>;
    }

    console.log(products);

    return (
        <div className="flex gap-2">
            {products.map((product) => (
            <div key={product.id}>
                <div className="w-[262] h-[349] hover:border hover:border-green-400 transition duration-300">
                    <div className="flex justify-between items-center p-3">
                        <div>
                            <p className="font-semibold text-center">NEW</p>
                            <p className="bg-green-400 px-4 font-semibold text-white rounded-sm">-50%</p>
                        </div>
                        <Button variant="bg-white rounded-full p-2 shadow-md">
                            <CiHeart size={20} className="hover:text-green-400"/>
                        </Button>
                    </div>
                    <div>
                        <Image 
                            src={product.image}
                            width={200}
                            height={200}
                            alt="product"
                        />
                        {/* <Button variant="bg-black text-white">Add to Cart</Button> */}
                    </div>
                </div>
                <div>
                    <p className="font-semibold">{product.product_name}</p>
                    <p className="font-semibold">{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                </div>
            </div>
            ))}
        </div>
    );
};

export default NewArrivalsCard;