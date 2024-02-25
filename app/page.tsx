import Image from "next/image";
import styles from "./page.module.css";
import SellerInfo from "./listing-detail/components/SellerInfo";


export default function Home() {
  return (
    <SellerInfo sellerId="20" />
  );
}
