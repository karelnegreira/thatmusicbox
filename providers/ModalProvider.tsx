"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/Modal";

const ModalProvider = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

  return (
    <>
        <Modal title="test title" description="test description" isOpen onChange={() => {}}  >
            TEST CHILDREN
        </Modal>    
    </>
  );
}

export default ModalProvider