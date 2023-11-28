"use client"

import AuthModal from "@/components/AuthModal";
import SubscribeModal from "@/components/SubscribeModal";
import UploadModal from "@/components/UploadModal";
import { ProductWithPrice } from "@/types";
import { useEffect, useState } from "react";

interface ModelProviderProps {
    products: ProductWithPrice[];
}

const ModelProvider: React.FC<ModelProviderProps> = ({
    products
}) => {
    
    const [isMounted,SetisMounted] = useState(false);

    useEffect (() => {
        SetisMounted(true);
    },[])
    if (!isMounted){
        return null;
    }
        return(
            <>
           <AuthModal />
           <UploadModal />
           <SubscribeModal products={products} />
           </>
        )
     
}
 
export default ModelProvider;